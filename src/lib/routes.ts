import type { SchemaTypes } from "@datocms/cma-client";

export const typenameToApiKey = {
	RootLevelPageRecord: "root_level_page",
};

const routes = {
	root_level_page: (slug: string) => `/${slug}`,
};

export async function recordToWebsiteRoute(
	item: SchemaTypes.Item,
	itemType: SchemaTypes.ItemType,
): Promise<string | null> {
	const type = itemType.attributes.api_key;
	return routes[type as keyof typeof routes](item.attributes.slug as string);
}
