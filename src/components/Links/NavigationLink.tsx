import Link from "next/link";
import type { ComponentProps, PropsWithChildren } from "react";
import { isLinkBlock, type LinkItem } from "@/lib/dato/link-utils";
import { DatoLink } from "./DatoLink";

export type NextLinkHref = ComponentProps<typeof Link>["href"];
export type Linkish = LinkItem | NextLinkHref | null | undefined;

type NavigationLinkProps = {
	link?: Linkish;
} & PropsWithChildren &
	Omit<ComponentProps<"a">, "href">;

export const NavigationLink = ({
	link,
	children,
	...rest
}: NavigationLinkProps) => {
	if (!link) return <>{children}</>;

	if (isLinkBlock(link)) {
		return (
			<DatoLink link={link} {...rest}>
				{children}
			</DatoLink>
		);
	}

	return (
		<Link href={link as NextLinkHref} {...rest}>
			{children}
		</Link>
	);
};
