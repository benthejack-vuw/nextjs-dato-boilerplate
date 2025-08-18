import type { DynamicComponentFragment } from "@catalyst/types/dato/graphql";
import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type DynamicComponentDictionary = {
	[key in DynamicComponentFragment["__typename"]]?: ComponentType<any>;
};

const dynamicComponentDictionary: DynamicComponentDictionary = {
	PageHeadingRecord: dynamic(() => import("@/components/blocks/page-heading")),
	GenericParagraphRecord: dynamic(() => import("@/components/blocks/generic-paragraph")),
	LinkCardGridRecord: dynamic(() => import("@/components/blocks/link-card-grid")),
	LinkRecord: dynamic(() => import("@/components/blocks/link")),
	StructuredTextRecord: dynamic(() => import("@/components/blocks/structured-text-component")),
};

export { dynamicComponentDictionary };
