import type { PropsWithChildren } from "react";
import { isLinkBlock, linkTitle } from "@/lib/dato/link-utils";
import { type Linkish, NavigationLink } from "../Links/NavigationLink";

type TextLinkProps = {
	link: Linkish;
};

/*
 *  Common styled wrapper for text only links
 *
 *  the link prop can be any dato link data or anything that you
 *  would usually pass to the next/Link href prop.
 */
const TextLink = ({ link, children }: PropsWithChildren<TextLinkProps>) => (
	<NavigationLink link={link} className="">
		{children ?? (isLinkBlock(link) && linkTitle(link))}
	</NavigationLink>
);

export default TextLink;
