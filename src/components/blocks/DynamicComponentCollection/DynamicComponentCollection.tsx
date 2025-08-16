import type { ComponentProps } from "react";
import { ComponentError } from "@/components/ComponentError/ComponentError";
import type { DynamicComponentCollectionFragment } from "@/graphql/generated/graphql";
import { DynamicComponentDictionary } from "./DynamicComponentDictionary";

const DynamicComponentCollection = ({
	components,
	...props
}: ComponentProps<"div"> & DynamicComponentCollectionFragment) => {
	return (
		<div {...props}>
			{components.map((component) => {
				const Component = DynamicComponentDictionary[component.__typename];

				if (!Component) {
					return (
						<ComponentError
							message={`"${component.__typename}" hasn't been added to component dictionary yet. it's probably still in development`}
						/>
					);
				}

				console.log("component", component);
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
