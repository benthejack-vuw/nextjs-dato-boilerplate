/*
 *  Generic asset renderer that will render either an image
 *  or video depending on what the underlying dat asset is
 *  (in Dato all media assets are requested the same way)
 */

import classNames from "classnames";
import {
	Image,
	type ImagePropTypes,
	VideoPlayer,
	type VideoPlayerProps,
} from "react-datocms";
import type {
	ResponsiveMediaAssetFragment,
	VideoFragment,
} from "@/graphql/generated/graphql";

export type MediaAsset = Omit<
	ResponsiveMediaAssetFragment | VideoFragment,
	"__typename"
>;

export type MediaAssetProps = {
	mediaAsset: ResponsiveMediaAssetFragment;
	className?: string;
	datoVideoPlayerProps?: VideoPlayerProps;
	datoImageProps?: Omit<ImagePropTypes, "data">;
};

const alreadyPositioned = (className?: string) =>
	!!className &&
	["absolute", "relative", "fixed"].reduce(
		(found, curr) => found || className.includes(curr),
		false,
	);

const MediaAsset = ({
	className,
	mediaAsset,
	datoVideoPlayerProps = {},
	datoImageProps = {},
}: MediaAssetProps) => {
	return (
		<div
			className={classNames(className, {
				relative: !alreadyPositioned(className),
			})}
		>
			{mediaAsset.video?.muxPlaybackId && (
				<VideoPlayer {...datoVideoPlayerProps} />
			)}
			{mediaAsset?.responsiveImage && (
				<div className="size-full">
					{/* eslint-disable-next-line jsx-a11y/alt-text */}
					<Image
						className="size-full"
						data={mediaAsset.responsiveImage}
						objectFit="cover"
						{...datoImageProps}
					/>
				</div>
			)}
		</div>
	);
};

export default MediaAsset;
