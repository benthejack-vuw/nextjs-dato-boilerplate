import MediaAsset from "@/components/MediaAsset/MediaAsset";
import type { MediaAssetComponentFragment } from "@/graphql/generated/graphql";

const MediaAssetComponent = ({ asset }: MediaAssetComponentFragment) =>
	!!asset && <MediaAsset mediaAsset={asset} />;

export default MediaAssetComponent;
