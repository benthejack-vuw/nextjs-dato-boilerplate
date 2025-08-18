import type { StructuredTextFragment } from "@catalyst/types/dato/graphql";
import StructuredTextRenderer from "../structured-text/structured-text";

const StructuredText = ({ text }: StructuredTextFragment) => {
	return <StructuredTextRenderer data={text} />;
};

export default StructuredText;
