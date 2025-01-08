import { IImage, OpenSearchQuery } from "./basics";

export type Album = {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: IImage[];
  artist: string;
};

type AlbumMatches = {
  album: Album[];
};

export type AlbumSearchResult = {
  results: {
    "@attr"?: object;
    albummatches: AlbumMatches;
    "opensearch:Query": OpenSearchQuery;
    "opensearch:itemsPerPage": string;
    "opensearch:startIndex": string;
    "opensearch:totalResults": string;
  };
};
