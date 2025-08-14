import { type NextRequest, NextResponse } from "next/server";
import { recordToWebsiteRoute } from "@/lib/routes";
import {
	handleUnexpectedError,
	invalidRequestResponse,
	withCORS,
} from "../utils";

export async function OPTIONS() {
	return new Response("OK", withCORS());
}

type PreviewLink = {
	label: string;
	url: string;
	reloadPreviewOnRecordUpdate?: boolean | { delayInMs: number };
};

type WebPreviewsResponse = {
	previewLinks: PreviewLink[];
};

/**
 * This route handler implements the Previews webhook required for the "Web
 * Previews" plugin:
 *
 * https://www.datocms.com/marketplace/plugins/i/datocms-plugin-web-previews#the-previews-webhook
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		// Parse query string parameters
		const token = request.nextUrl.searchParams.get("token");
		console.log("tokeny is", token, process.env.SECRET_API_TOKEN);

		// Ensure that the request is coming from a trusted source
		if (token !== process.env.SECRET_API_TOKEN) {
			return invalidRequestResponse("Invalid token", 401);
		}

		/**
		 * The plugin sends the record and model for which the user wants a preview,
		 * along with information about which locale they are currently viewing in
		 * the interface
		 */
		const { item, itemType } = await request.json();

		// We can use this info to generate the frontend URL associated
		const url = await recordToWebsiteRoute(item, itemType);
		const forwardedHost = request.headers.get("x-forwarded-host");
		const baseUrl = forwardedHost ? `https://${forwardedHost}` : request.url;
		console.log("BASE URL", baseUrl);

		const response: WebPreviewsResponse = { previewLinks: [] };

		if (url) {
			/**
			 * If status is not published, it means that it has a current version that's
			 * different from the published one, so it has a draft version!
			 */
			if (item.meta.status !== "published") {
				/**
				 * Generate a URL that initially enters Next.js Draft Mode, and then
				 * redirects to the desired URL
				 */
				response.previewLinks.push({
					label: "Draft version",
					url: new URL(
						/*
						 * We generate the URL in a way that it first passes through the
						 * endpoint that enables the Draft Mode.
						 */
						`/api/draft-mode/enable?url=${url}&token=${token}`,
						baseUrl,
					).toString(),
				});
			}

			/** If status is not draft, it means that it has a published version! */
			if (item.meta.status !== "draft") {
				/**
				 * Generate a URL that first exits from Next.js Draft Mode, and then
				 * redirects to the desired URL.
				 */
				response.previewLinks.push({
					label: "Published version",
					url: new URL(
						/*
						 * We generate the URL in a way that it first passes through the
						 * endpoint that disables the Draft Mode.
						 */
						`/api/draft-mode/disable?url=${url}`,
						baseUrl,
					).toString(),
				});
			}
		}

		// Respond in the format expected by the plugin
		return NextResponse.json(response, withCORS());
	} catch (error) {
		return handleUnexpectedError(error);
	}
}
