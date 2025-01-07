export type IImage = {
  size: ImageSizes;
  "#text": string;
};

type ImageSizes = "small" | "medium" | "large" | "extralarge" | "mega";

export type OpenSearchQuery = {
  role: string;
  searchTerms: string;
  startPage: string;
  "#text": string;
};
