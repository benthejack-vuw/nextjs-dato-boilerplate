import DynamicComponentCollection from "@/components/blocks/DynamicComponentCollection/DynamicComponentCollection";
import type { RootLevelPageFragment } from "@/graphql/generated/graphql";

const RootLevelPage = ({ title, components }: RootLevelPageFragment) => (
	<div>
		<div> page title: {title} </div>
		{components && <DynamicComponentCollection {...components} />}
	</div>
);

export default RootLevelPage;
