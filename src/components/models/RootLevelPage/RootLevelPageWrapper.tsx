import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { PageBySlugDocument } from "@/graphql/generated/graphql";
import { datoRequest } from "@/graphql/graphql-request";
import RootLevelPage from "./RootLevelPage";

const LiveUpdatesRootLevelPage = dynamic(
	() => import("@/components/models/RootLevelPage/LiveUpdates"),
);

export default async function RootLevelPageWrapper({ slug }: { slug: string }) {
	const isDraftMode = (await draftMode()).isEnabled;
	const pageQuery = await datoRequest(PageBySlugDocument, {
		variables: { slug },
	});

	if (!pageQuery.rootLevelPage) {
		notFound();
	}

	if (isDraftMode) {
		return (
			<LiveUpdatesRootLevelPage
				initialData={pageQuery}
				query={PageBySlugDocument}
				variables={{ slug }}
			/>
		);
	}

	return <RootLevelPage {...pageQuery.rootLevelPage} />;
}
