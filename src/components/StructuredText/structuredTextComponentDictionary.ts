import type { ComponentType } from "react";
import MediaAssetComponent from "../blocks/MediaAssetComponent/MediaAssetComponent";

export type BlockDictionary = {
	// biome-ignore lint/suspicious/noExplicitAny: props can be any
	[key: string]: ComponentType<any>;
};

export type LinkDictionary = {
	// biome-ignore lint/suspicious/noExplicitAny: props can be any
	[key: string]: ComponentType<any>;
};

export const structuredTextBlocks: BlockDictionary = {
	MediaAssetRecord: MediaAssetComponent,
};

export const structuredTextLinks: LinkDictionary = {};
