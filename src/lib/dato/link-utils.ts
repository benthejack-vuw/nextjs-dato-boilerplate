import type {
	ExternalLinkFragment,
	InternalLinkFragment,
	LinkFragment,
	LinkMediaAssetFragment,
	OverridesInternalLinkFragment,
} from "@catalyst/types/dato/graphql";
import { modelPath } from "@/lib/routes";

// LinkItem is the general overarching "Link" type
// use this to refer to "anything that can be used to create a link"
export type LinkItem =
	| LinkFragment
	| InternalLinkTarget
	| InternalLinkFragment
	| ExternalLinkFragment
	| OverridesInternalLinkFragment;

export type InternalLinkTarget = NonNullable<InternalLinkFragment["link"]>;
export type InternalLinkBlock = NonNullable<InternalLinkFragment | OverridesInternalLinkFragment>;
export type LinkBlockWithOverrides = NonNullable<ExternalLinkFragment | OverridesInternalLinkFragment>;
export type ExternalLinkBlock = NonNullable<ExternalLinkFragment>;
export type LinkBlock = NonNullable<InternalLinkBlock | ExternalLinkBlock>;

export type InternalOrExternalLink = InternalLinkFragment | OverridesInternalLinkFragment | ExternalLinkFragment;

type FieldMap = {
	[key in InternalLinkTarget["__typename"]]: string;
};

const typeLabels: FieldMap = {
	RootLevelPageRecord: "Page",
};

const titleKeys: FieldMap = {
	RootLevelPageRecord: "title",
};

const subtitleKeys: FieldMap = {
	RootLevelPageRecord: "subtitle",
};

const slugKeys: FieldMap = {
	RootLevelPageRecord: "slug",
};

const internalLinkTargets = Object.keys(typeLabels);

const internalLinkTypenames = ["InternalLinkRecord", "OverridesInternalLinkRecord"];

const externalLinkTypenames = ["ExternalLinkRecord"];

const linkTypesWithManualData = ["OverridesInternalLinkRecord", "ExternalLinkRecord"];

const allLinkTypenames = ["LinkRecord", "InternalLinkRecord", "OverridesInternalLinkRecord", "ExternalLinkRecord"];

// biome-ignore lint/suspicious/noExplicitAny: explicit type check
export const isLinkBlock = (link?: any): link is LinkBlock =>
	allLinkTypenames.includes(link?.__typename ?? "not a dato record");

export const isLinkFragment = (link?: LinkItem): link is LinkFragment => link?.__typename === "LinkRecord";

export const isInternalLinkBlock = (link?: LinkItem): link is InternalLinkBlock => {
	if (isLinkFragment(link) && isLinkBlock(link.link)) return isInternalLinkBlock(link.link);

	return !!link && internalLinkTypenames.includes(link.__typename);
};

export const isExternalLinkBlock = (link?: LinkItem): link is ExternalLinkBlock => {
	if (isLinkFragment(link) && isLinkBlock(link.link)) return isExternalLinkBlock(link.link);

	return !!link && externalLinkTypenames.includes(link.__typename);
};

export const isInternalLinkTarget = (link?: LinkItem): link is InternalLinkTarget =>
	!!link && internalLinkTargets.includes(link.__typename);

export const hasManualData = (link: LinkItem): link is LinkBlockWithOverrides =>
	linkTypesWithManualData.includes(link.__typename);

export const linkTarget = (link: LinkItem): InternalLinkTarget | null => {
	if (isLinkFragment(link) && isLinkBlock(link.link)) return linkTarget(link.link);

	if (isExternalLinkBlock(link)) return null;
	if (isInternalLinkTarget(link)) return link;
	if (isInternalLinkBlock(link)) return link.link as InternalLinkTarget;
	return null;
};

export const linkHref = (link: LinkItem): string => {
	if (isLinkFragment(link) && isLinkBlock(link.link)) return linkHref(link.link);

	if (isExternalLinkBlock(link)) return link.url ?? "/";

	const target = linkTarget(link);
	if (!target) return "/";

	const slugKey = slugKeys[target.__typename] as keyof typeof target;
	const slug = (target[slugKey] as string) ?? "";
	return modelPath(target._modelApiKey, slug);
};

export const linkTitle = (link: LinkItem): string => {
	if (isLinkFragment(link) && isLinkBlock(link.link)) return linkTitle(link.link);

	if (hasManualData(link) && link.title) return link.title;

	const target = linkTarget(link);
	if (!target) return "";

	const titleKey = titleKeys[target.__typename] as keyof typeof target;
	return target[titleKey] as string;
};

export const linkSubtitle = (link: LinkItem): string => {
	if (isLinkFragment(link) && isLinkBlock(link.link)) return linkSubtitle(link.link);

	if (hasManualData(link) && link.subtitle) return link.subtitle;

	const target = linkTarget(link);
	if (!target) return "";

	const subtitleKey = subtitleKeys[target.__typename] as keyof typeof target;
	return target[subtitleKey] as string;
};

export const linkImage = (link: LinkItem): LinkMediaAssetFragment | null | undefined => {
	if (isLinkFragment(link) && isLinkBlock(link.link)) return linkImage(link.link);

	if (hasManualData(link) && link.image) return link.image;

	const target = linkTarget(link);
	return target?.image;
};

export const getLinkData = (link: LinkItem) => ({
	title: linkTitle(link),
	subtitle: linkSubtitle(link),
	image: linkImage(link),
	href: linkHref(link),
});

export const isAbsolutePath = (path?: string) => /^https?:\/\//.test(path ?? "");
