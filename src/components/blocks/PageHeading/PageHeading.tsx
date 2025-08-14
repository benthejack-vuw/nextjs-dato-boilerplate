import type { PageHeadingFragment } from "@/graphql/generated/graphql";

export default function PageHeading({ copy }: PageHeadingFragment) {
	return <h1>{copy}</h1>;
}
