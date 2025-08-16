import StructuredTextRenderer from "@/components/StructuredText/StructuredText";
import type { StructuredTextFragment } from "@/graphql/generated/graphql";

const StructuredText = ({ text }: StructuredTextFragment) => {
	console.log("text data", text);
	return <StructuredTextRenderer data={text} />;
};

export default StructuredText;
