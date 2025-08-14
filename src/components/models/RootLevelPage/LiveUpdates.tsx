"use client";

import type { TypedDocumentNode } from "@datocms/cda-client";
import { useQuerySubscription } from "react-datocms";
import type { PageBySlugQuery } from "@/graphql/generated/graphql";
import RootLevelPage from "./RootLevelPage";

type LiveUpdatesProps = {
	query: TypedDocumentNode<PageBySlugQuery, { slug: string }>;
	variables: { slug: string };
	initialData: PageBySlugQuery;
};

const LiveUpdates = ({ query, variables, initialData }: LiveUpdatesProps) => {
	const { data, error } = useQuerySubscription({
		query,
		variables,
		initialData,
		includeDrafts: true,
		preview: true,
		excludeInvalid: true,
		...(process.env.NEXT_PUBLIC_DATO_ENVIRONMENT
			? { environment: process.env.NEXT_PUBLIC_DATO_ENVIRONMENT as string }
			: {}),
		token: process.env.NEXT_PUBLIC_DATO_RO_TOKEN as string,
	});

	const subscriptionPage = data?.rootLevelPage;

	if (error) {
		return (
			<div>
				<pre>{error.code}</pre>: {error.message}
			</div>
		);
	}

	if (!subscriptionPage) {
		return <div>no sub page</div>;
	}

	return <RootLevelPage {...subscriptionPage} />;
};

export default LiveUpdates;
