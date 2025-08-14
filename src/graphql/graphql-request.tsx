import { type ExecuteQueryOptions, executeQuery } from "@datocms/cda-client";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { cache } from "react";

const dedupedPerformRequest = cache(
	async <TQuery, TVariables>(serializedArgs: string) => {
		return executeQuery(
			...(JSON.parse(serializedArgs) as [
				TypedDocumentNode<TQuery, TVariables>,
				ExecuteQueryOptions<{ [key: string]: unknown }>,
			]),
		) as Promise<TQuery>;
	},
);

export function datoRequest<TQuery, TVariables>(
	query: TypedDocumentNode<TQuery, TVariables>,
	options?: Omit<ExecuteQueryOptions<{ [key: string]: unknown }>, "token">,
) {
	return dedupedPerformRequest<TQuery, TVariables>(
		JSON.stringify([
			query,
			{
				...options,
				token: process.env.DATO_RO_TOKEN,
				environment: process.env.DATO_ENVIRONMENT,
			},
		]),
	);
}

// export async function gqlRequest<TQuery, TVariables>(
// 	query: TypedDocumentNode<TQuery, TVariables>,
// 	variables?: TVariables,
// 	draftMode?: boolean,
// ) {
// 	const response = await fetch("https://graphql.datocms.com", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 			Accept: "application/graphql-response+json",
// 			Authorization: process.env.DATO_RO_TOKEN as string,
// 			...(process.env.DATO_ENVIRONMENT
// 				? { "X-Environment": process.env.DATO_ENVIRONMENT as string }
// 				: {}),
// 			...(draftMode ? { "X-Include-Drafts": "true" } : {}),
// 		},
// 		body: JSON.stringify({
// 			query,
// 			variables,
// 		}),
// 	});
//
// 	if (!response.ok) {
// 		throw new Error("Network response was not ok");
// 	}
//
// 	return response.json() as TQuery;
// }
