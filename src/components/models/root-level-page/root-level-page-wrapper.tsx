import { RootLevelPageBySlugDocument } from "@catalyst/types/dato/graphql";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { datoRequest } from "@/lib/dato/dato-request";
import RootLevelPage from "./root-level-page";

const LiveUpdatesRootLevelPage = dynamic(() => import("@/components/models/root-level-page/live-updates"));

export default async function RootLevelPageWrapper({ slug }: { slug: string }) {
	const isDraftMode = (await draftMode()).isEnabled;
	const pageQuery = await datoRequest(RootLevelPageBySlugDocument, {
		variables: { slug },
	});

	if (!pageQuery.rootLevelPage) {
		notFound();
	}

	if (isDraftMode) {
		return (
			<LiveUpdatesRootLevelPage initialData={pageQuery} query={RootLevelPageBySlugDocument} variables={{ slug }} />
		);
	}

	return <RootLevelPage {...pageQuery.rootLevelPage} />;
}
