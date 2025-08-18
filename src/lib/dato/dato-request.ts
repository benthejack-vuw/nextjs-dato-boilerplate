import { type ExecuteQueryOptions, executeQuery } from "@datocms/cda-client";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { cache } from "react";

export const cacheTag = "datocms";

const dedupedPerformRequest = cache(async <TQuery, TVariables>(serializedArgs: string) => {
	return executeQuery(
		...(JSON.parse(serializedArgs) as [
			TypedDocumentNode<TQuery, TVariables>,
			ExecuteQueryOptions<{ [key: string]: unknown }>,
		])
	) as Promise<TQuery>;
});

export function datoRequest<TQuery, TVariables>(
	query: TypedDocumentNode<TQuery, TVariables>,
	options?: Omit<ExecuteQueryOptions<{ [key: string]: unknown }>, "token">
) {
	return dedupedPerformRequest<TQuery, TVariables>(
		JSON.stringify([
			query,
			{
				...options,
				token: process.env.NEXT_PUBLIC_DATO_RO_TOKEN,
				environment: process.env.NEXT_PUBLIC_DATO_ENVIRONMENT,
				requestInitOptions: {
					cache: "force-cache",
					/*
					 * This project utilizes an extremely basic cache invalidation
					 * technique: by using the `next.tags` option, all requests to DatoCMS
					 * are tagged with "datocms" in the Next.js Data Cache. Whenever DatoCMS
					 * notifies us of any updates via webhook, we invalidate all requests
					 * with the same tag.
					 *
					 * Although this caching strategy may be sufficient for smaller
					 * websites, it is not advised for larger projects. Fortunately, with
					 * DatoCMS and Next, it is possible to implement a much more detailed
					 * invalidation strategy!
					 *
					 * For more info: https://www.datocms.com/docs/next-js/using-cache-tags
					 */
					next: {
						tags: [cacheTag],
					},
				},
			},
		])
	);
}
