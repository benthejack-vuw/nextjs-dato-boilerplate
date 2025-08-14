import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { DynamicComponentFragment } from "@/graphql/generated/graphql";

export type DynamicComponentDictionary = {
	// biome-ignore lint/suspicious/noExplicitAny: the props can be any
	[key in DynamicComponentFragment["__typename"]]?: ComponentType<any>;
};

const DynamicComponentDictionary: DynamicComponentDictionary = {
	PageHeadingRecord: dynamic(
		() => import("@/components/blocks/PageHeading/PageHeading"),
	),
	GenericParagraphRecord: dynamic(
		() => import("@/components/blocks/GenericParagraph/GenericParagraph"),
	),
};

export { DynamicComponentDictionary };
