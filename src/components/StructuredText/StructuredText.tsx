import classNames from "classnames";
import {
	isBlockquote,
	isHeading,
	isList,
	isParagraph,
	isRoot,
	isThematicBreak,
} from "datocms-structured-text-utils";
import Link from "next/link";
import type { ComponentProps, PropsWithChildren } from "react";
import {
	type RenderRecordLinkContext,
	renderNodeRule,
	StructuredText,
} from "react-datocms";
import { modelPath } from "@/lib/routes";
import { StructuredTextBlock } from "./StructuredTextBlock";

type LinkRecord = {
	__typename: string;
	id: string;
	slug: string;
	_modelApiKey: string;
};

type StructuredTextLinkProps = PropsWithChildren<
	Partial<RenderRecordLinkContext<LinkRecord>>
>;

type StructuredTextComponentProps = {
	padParagraphs?: boolean;
} & ComponentProps<typeof StructuredText>;

const StructuredTextLink = ({
	record,
	children,
	transformedMeta,
}: StructuredTextLinkProps) => (
	<Link
		{...transformedMeta}
		className="underline"
		href={{
			pathname: modelPath(
				record?._modelApiKey as string,
				record?.slug as string,
			),
		}}
	>
		{children}
	</Link>
);

const StructuredTextRenderer = ({ data }: StructuredTextComponentProps) => {
	return (
		<div className={classNames("w-full flex flex-col gap-5")}>
			<StructuredText
				data={data}
				renderInlineRecord={({ record }) => (
					<StructuredTextLink record={record as LinkRecord}>
						{(record as unknown as { title: string }).title}
					</StructuredTextLink>
				)}
				renderLinkToRecord={({ record, children, transformedMeta }) => (
					<StructuredTextLink
						record={record as LinkRecord}
						transformedMeta={transformedMeta}
					>
						{children}
					</StructuredTextLink>
				)}
				renderBlock={({ record }) => (
					<StructuredTextBlock componentData={record} />
				)}
				customNodeRules={[
					renderNodeRule(
						isHeading,
						({ adapter: { renderNode }, node, children, key }) => {
							return renderNode(
								`h${node.level}`,
								{
									key,
									className: "",
								},
								children,
							);
						},
					),
					renderNodeRule(
						isParagraph,
						({ adapter: { renderNode }, children, key, ancestors }) => {
							if (isRoot(ancestors[0])) {
								return renderNode(
									"p",
									{
										key,
										className: "",
									},
									children,
								);
							} else {
								return renderNode("p", { key }, children);
							}
						},
					),
					renderNodeRule(
						isBlockquote,
						({ adapter: { renderNode }, children, key, node }) => {
							return renderNode(
								"div",
								{
									key,
									className: "",
								},
								<>
									<blockquote>{children}</blockquote>
									<p className="text-small">{node.attribution}</p>
								</>,
							);
						},
					),
					renderNodeRule(
						isThematicBreak, // hr
						({ adapter: { renderNode }, key }) => {
							return renderNode("hr", {
								key,
								className: "",
							});
						},
					),
					renderNodeRule(
						isList,
						({ adapter: { renderNode }, node, key, children }) => {
							return renderNode(
								node.style === "bulleted" ? "ul" : "ol",
								{
									key,
									className:
										node.style === "bulleted"
											? "" //classes for bulleted list
											: "", // classes for numbered list
								},
								children,
							);
						},
					),
				]}
			/>
		</div>
	);
};

export default StructuredTextRenderer;
