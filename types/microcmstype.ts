
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

export type Categrory = {
  id: string;
  name: string;
}

export type MicroCMSPhoto = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    image: {
      url: string;
      height: number;
      width: number;
    },
    takenAt: string,
    category: Categrory,
};
