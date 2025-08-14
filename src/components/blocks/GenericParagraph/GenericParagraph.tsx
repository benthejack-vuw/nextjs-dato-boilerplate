import type { GenericParagraphFragment } from "@/graphql/generated/graphql";

export default function GenericParagraph({ copy }: GenericParagraphFragment) {
	return <p>{copy}</p>;
}
