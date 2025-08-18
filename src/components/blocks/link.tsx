import type { LinkFragment } from "@catalyst/types/dato/graphql";
import TextLink from "@/components/text-link";

const Link = (link: LinkFragment) => <TextLink link={link} />;

export default Link;
