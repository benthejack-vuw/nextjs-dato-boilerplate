import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: [
		{
			"https://graphql.datocms.com": {
				headers: {
					Authorization: process.env.DATO_MANAGEMENT_TOKEN as string,
					...(process.env.DATO_ENVIRONMENT
						? { "X-Environment": process.env.DATO_ENVIRONMENT as string }
						: {}),
				},
			},
		},
	],
	documents: ["src/**/*.graphql"],
	ignoreNoDocuments: true,
	generates: {
		"./src/graphql/generated/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				nonOptionalTypename: true,
				strictScalars: true,
				scalars: {
					BooleanType: "boolean",
					CustomData: "Record<string, unknown>",
					Date: "string",
					DateTime: "string",
					FloatType: "number",
					IntType: "number",
					ItemId: "string",
					JsonField: "unknown",
					MetaTagAttributes: "Record<string, string>",
					UploadId: "string",
				},
			},
		},
	},
};
export default config;
