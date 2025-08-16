import RenderMarkdown from "@/components/RenderMarkdown/RenderMarkdown";
import type { GenericParagraphFragment } from "@/graphql/generated/graphql";

export default function GenericParagraph({ copy }: GenericParagraphFragment) {
	return (
		<div className="p-6">
			<RenderMarkdown>{copy}</RenderMarkdown>
		</div>
	);
}
