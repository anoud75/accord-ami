type LovableAsset = {
  original_filename: string;
  url: string;
};

export const publicAssetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const hostedAssetUrl = ({ original_filename }: LovableAsset) =>
  publicAssetUrl(`portfolio/assets/${encodeURIComponent(original_filename)}`);
