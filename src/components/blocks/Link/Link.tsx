import TextLink from "@/components/TextLink/TextLink";
import type { LinkFragment } from "@/graphql/generated/graphql";

const Link = (link: LinkFragment) => <TextLink link={link} />;

export default Link;
