type LovableAsset = {
  url: string;
};

const LOVABLE_ASSET_ORIGIN = "https://alanoudalsamil.pro";

export const hostedAssetUrl = ({ url }: LovableAsset) => {
  if (/^https?:\/\//.test(url)) return url;
  return new URL(url, LOVABLE_ASSET_ORIGIN).href;
};

export const publicAssetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
