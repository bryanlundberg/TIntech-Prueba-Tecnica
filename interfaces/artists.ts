import { IImage } from "./basics";

export type Artist = {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: IImage[];
};

type ArtistMatches = {
  artist: Artist[];
};

type OpenSearchQuery = {
  role: string;
  searchTerms: string;
  startPage: string;
  "#text": string;
};

export type ArtistSearchResult = {
  "@attr"?: object;
  artistmatches: ArtistMatches;
  "opensearch:Query": OpenSearchQuery;
  "opensearch:itemsPerPage": string;
  "opensearch:startIndex": string;
  "opensearch:totalResults": string;
};
