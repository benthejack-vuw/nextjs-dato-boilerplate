import type { DynamicComponentCollectionFragment } from "@catalyst/types/dato/graphql";
import type { ComponentProps } from "react";
import { ComponentError } from "@/components/component-error";
import { dynamicComponentDictionary } from "./dynamic-component-dictionary";

const DynamicComponentCollection = ({
	components,
	...props
}: ComponentProps<"div"> & DynamicComponentCollectionFragment) => {
	return (
		<div {...props}>
			{components.map((component) => {
				const Component = dynamicComponentDictionary[component.__typename];

				if (!Component) {
					return (
						<ComponentError
							message={`"${component.__typename}" hasn't been added to component dictionary yet. it's probably still in development`}
						/>
					);
				}

				return <Component key={component.id} {...(component as ComponentProps<typeof Component>)} />;
			})}
		</div>
	);
};

export default DynamicComponentCollection;
