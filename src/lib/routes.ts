export const typenameToApiKey = {
	RootLevelPageRecord: "root_level_page",
};

const slugFunctions = {
	root_level_page: (slug?: string) => `/${slug}`,
};

export function modelPath(itemApiKey: string, itemSlug: string) {
	const slugfn = slugFunctions[itemApiKey as keyof typeof slugFunctions];
	if (!slugfn) {
		throw Error(
			`can not create a path for ${itemApiKey}. that model doesn't have an entry in the slugFunctions dictionary`
		);
	}
	return slugfn(itemSlug);
}
