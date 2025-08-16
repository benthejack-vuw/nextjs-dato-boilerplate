import StructuredTextRenderer from "@/components/StructuredText/StructuredText";
import type { StructuredTextFragment } from "@/graphql/generated/graphql";

const StructuredText = ({ text }: StructuredTextFragment) => {
	return <StructuredTextRenderer data={text} />;
};

export default StructuredText;
