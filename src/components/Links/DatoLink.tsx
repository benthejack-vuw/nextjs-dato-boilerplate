import Link from "next/link";
import { type ComponentProps, forwardRef, type PropsWithChildren } from "react";
import type { LinkItem } from "@/lib/dato/link-utils";
import {
	isExternalLinkBlock,
	isInternalLinkBlock,
	linkHref,
} from "@/lib/dato/link-utils";

type DatoLinkProps = {
	link?: LinkItem;
} & PropsWithChildren &
	Omit<ComponentProps<"a">, "href">;

export const ExternalLink = forwardRef<
	HTMLAnchorElement,
	{ slug: string; children: React.ReactNode; className?: string }
>(({ slug, children, className, ...anchorProps }, ref) => {
	return (
		<a
			href={slug}
			rel="noopener noreferrer"
			target="_blank"
			className={className}
			ref={ref}
			{...anchorProps}
		>
			{children}
		</a>
	);
});

export const DatoLink = ({ link, children, ...props }: DatoLinkProps) => {
	if (isExternalLinkBlock(link)) {
		return (
			<ExternalLink slug={linkHref(link)} {...props}>
				{children}
			</ExternalLink>
		);
	}

	if (isInternalLinkBlock(link)) {
		return (
			<Link href={linkHref(link)} {...props}>
				{children}
			</Link>
		);
	}

	return <>{children}</>;
};
