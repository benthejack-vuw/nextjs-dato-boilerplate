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
