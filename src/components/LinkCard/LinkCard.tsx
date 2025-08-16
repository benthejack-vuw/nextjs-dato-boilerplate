import classNames from "classnames";
import type { ComponentProps } from "react";
import { getLinkData, type LinkItem } from "@/lib/dato/link-utils";
import { NavigationLink } from "../Links/NavigationLink";
import MediaAsset from "../MediaAsset/MediaAsset";

type LinkCardProps = {
	link: LinkItem;
} & ComponentProps<"a">;

const LinkCard = ({ link, className, ...props }: LinkCardProps) => {
	const { title, subtitle, image } = getLinkData(link);
	console.log("title", title, subtitle, image);

	return (
		<NavigationLink
			link={link}
			className={classNames("flex flex-col", className)}
			{...props}
		>
			<div className="aspect-video">
				{image && <MediaAsset mediaAsset={image} />}
			</div>
			<div className="flex flex-col">
				<div>{title}</div>
				<div>{subtitle}</div>
			</div>
		</NavigationLink>
	);
};

export default LinkCard;
