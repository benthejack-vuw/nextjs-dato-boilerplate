import type { ComponentProps } from "react";
import type { DynamicComponentCollectionFragment } from "@/graphql/generated/graphql";
import { DynamicComponentDictionary } from "./DynamicComponentDictionary";

const ComponentNotFound = ({ name }: { name: string }) => (
	<div>
		{name} wasn't found in the component dictionary. it's probably still under
		development.
	</div>
);

const DynamicComponentCollection = ({
	components,
	__typename,
	...props
}: ComponentProps<"div"> & DynamicComponentCollectionFragment) => {
	return (
		<div {...props}>
			{components.map((component) => {
				const Component = DynamicComponentDictionary[component.__typename];

				if (!Component) {
					return <ComponentNotFound name={component.__typename} />;
				}

				return (
					<Component
						key={component.id}
						{...(component as ComponentProps<typeof Component>)}
					/>
				);
			})}
		</div>
	);
};

export default DynamicComponentCollection;
