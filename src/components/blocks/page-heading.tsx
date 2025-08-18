import type { PageHeadingFragment } from "@catalyst/types/dato/graphql";

export default function PageHeading({ copy }: PageHeadingFragment) {
	return <h1>{copy}</h1>;
}
