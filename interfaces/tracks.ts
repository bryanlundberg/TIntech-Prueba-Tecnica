import { IImage, OpenSearchQuery } from "./basics";

export type Track = {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: IImage[];
  artist: string;
};

type TrackMatches = {
  track: Track[];
};

export type TrackSearchResult = {
  "@attr"?: object;
  albummatches: TrackMatches;
  "opensearch:Query": OpenSearchQuery;
  "opensearch:itemsPerPage": string;
  "opensearch:startIndex": string;
  "opensearch:totalResults": string;
};
