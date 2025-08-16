import Link from "next/link";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { isAbsolutePath } from "@/lib/dato/link-utils";

type RenderMarkdownProps = PropsWithChildren<{
	className?: string;
	wrapper?: ReactNode;
}>;

const Strong = ({ children }: PropsWithChildren) => (
	<strong className="font-bold">{children}</strong>
);

const Emphasis = ({ children }: PropsWithChildren) => (
	<em className="italic">{children}</em>
);

const Strikethrough = ({ children }: PropsWithChildren) => (
	<s className="line-through">{children}</s>
);

const anchor = ({ children, href }: ComponentProps<"a">) => {
	if (isAbsolutePath(href)) {
		//if absolute path/url (starts with http[s]://) assume external and open in new tab
		return (
			<a className="underline" href={href} target="_blank">
				{children}
			</a>
		);
	}

	const urlParts = (href ?? "").split("?");
	const params = Object.fromEntries(
		new URLSearchParams(urlParts[1] ?? "").entries(),
	);

	return (
		<Link className="underline" href={{ pathname: urlParts[0], query: params }}>
			{children}
		</Link>
	);
};

const markdownComponents: Components = {
	h1: ({ children }: PropsWithChildren) => <h1 className="">{children}</h1>,
	h2: ({ children }: PropsWithChildren) => <h2 className="">{children}</h2>,
	h3: ({ children }: PropsWithChildren) => <h3 className="">{children}</h3>,
	h4: ({ children }: PropsWithChildren) => <h4 className="">{children}</h4>,
	h5: ({ children }: PropsWithChildren) => <h5 className="">{children}</h5>,
	h6: ({ children }: PropsWithChildren) => <h6 className="">{children}</h6>,
	strong: Strong,
	b: Strong,
	em: Emphasis,
	i: Emphasis,
	s: Strikethrough,
	del: Strikethrough,
	blockquote: ({ children }: PropsWithChildren) => (
		<blockquote className="">{children}</blockquote>
	),
	hr: () => <hr className="" />,
	ul: ({ children }: PropsWithChildren) => <ul className="">{children}</ul>,
	ol: ({ children }: PropsWithChildren) => <ol className="">{children}</ol>,
	a: anchor,
	code: ({ children }: PropsWithChildren) => <div className="">{children}</div>,
};

const RenderMarkdown = ({ className, children }: RenderMarkdownProps) => {
	return (
		<div className={className}>
			<Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
				{children as string}
			</Markdown>
		</div>
	);
};

export default RenderMarkdown;
