import { revalidateTag } from "next/cache";
import type { NextRequest, NextResponse } from "next/server";
import { cacheTag } from "@/lib/dato/dato-request";
import { handleUnexpectedError, invalidRequestResponse, successfulResponse } from "../utils";

export async function POST(req: NextRequest): Promise<NextResponse> {
	try {
		// Parse query string parameters
		const token = req.nextUrl.searchParams.get("token");

		// Ensure that the request is coming from a trusted source
		if (token !== process.env.SECRET_API_TOKEN) {
			return invalidRequestResponse("Invalid token", 401);
		}

		revalidateTag(cacheTag);

		return successfulResponse();
	} catch (error) {
		return handleUnexpectedError(error);
	}
}
