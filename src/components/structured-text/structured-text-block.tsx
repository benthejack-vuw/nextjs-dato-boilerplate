import type { Record } from "datocms-structured-text-utils";
import { ComponentError } from "@/components/component-error";
import { structuredTextBlocks } from "./structured-text-component-dictionary";

type StructuredTextComponentProps = {
	componentData: Record;
};

export const StructuredTextBlock = ({ componentData }: StructuredTextComponentProps) => {
	const Component = structuredTextBlocks[componentData.__typename];
	if (!Component) {
		return (
			<ComponentError
				message={`"${componentData.__typename}" hasn't yet been added to the STRUCTURED-TEXT BLOCKS dictionary, it's probably still under development`}
			/>
		);
	}
	return <Component {...componentData} />;
};
