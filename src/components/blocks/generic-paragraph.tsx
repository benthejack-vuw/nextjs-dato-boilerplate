import type { GenericParagraphFragment } from "@catalyst/types/dato/graphql";
import Markdown from "@/components/markdown";

export default function GenericParagraph({ copy }: GenericParagraphFragment) {
	return (
		<div className="p-6">
			<Markdown>{copy}</Markdown>
		</div>
	);
}
