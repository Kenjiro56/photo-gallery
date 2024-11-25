export type MicroCMSImages = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  photos: {
    url: string;
    hegiht: number;
    width: number;
  };
};

export type ImageProps = {
    url: string;
    hegiht: number;
    width: number;
}
