import type { MediaAssetComponentFragment } from "@catalyst/types/dato/graphql";
import MediaAsset from "@/components/media-asset";

const MediaAssetComponent = ({ asset }: MediaAssetComponentFragment) => !!asset && <MediaAsset mediaAsset={asset} />;

export default MediaAssetComponent;
