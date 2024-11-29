export type MicroCMSImages = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  photos: {
    url: string;
    height: number;
    width: number;
  }[];
};

export type PhotoArray = Pick<MicroCMSImages,"photos">;
