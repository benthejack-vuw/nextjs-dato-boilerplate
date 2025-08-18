import type { RootLevelPageFragment } from "@catalyst/types/dato/graphql";
import DynamicComponentCollection from "@/components/blocks/dynamic-component-collection/dynamic-component-collection";

const RootLevelPage = ({ title, components }: RootLevelPageFragment) => (
	<div>
		<div> page title: {title} </div>
		{components && <DynamicComponentCollection {...components} />}
	</div>
);

export default RootLevelPage;
