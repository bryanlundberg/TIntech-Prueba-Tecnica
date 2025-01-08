"use client";
import { Artist, ArtistSearchResult } from "@/interfaces/artists";
import { artistSearch } from "@/lib/api/artists/artist-search";
import { useSearchStore } from "@/store/search-store";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ResultItem from "../result-item/result-item";
import { Album, AlbumSearchResult } from "@/interfaces/albums";
import { albumSearch } from "@/lib/api/albums/album-search";
import { trackSearch } from "@/lib/api/tracks/track-search";
import { Track, TrackSearchResult } from "@/interfaces/tracks";

export default function SearchResults() {
  const { search, category } = useSearchStore();
  const [artistList, setArtistList] = useState<Artist[]>([]);
  const [albumsList, setAlbumsList] = useState<Album[]>([]);
  const [trackList, setTrackList] = useState<Track[]>([]);

  useEffect(() => {
    if (!search) return;

    if (category === "artist") {
      artistSearch({ artist: search })
        .then((res: ArtistSearchResult) => {
          console.log(res.results.artistmatches.artist);
          setArtistList(() => [...res.results.artistmatches.artist]);
        })
        .catch((err) => console.log(err));
    }

    if (category === "album") {
      albumSearch({ album: search })
        .then((res: AlbumSearchResult) => {
          console.log(res.results.albummatches.album);
          setAlbumsList(() => [...res.results.albummatches.album]);
        })
        .catch((err) => console.log(err));
    }

    if (category === "track") {
      trackSearch({ track: search })
        .then((res: TrackSearchResult) => {
          console.log(res.results.trackmatches.track);
          setTrackList(() => [...res.results.trackmatches.track]);
        })
        .catch((err) => console.log(err));
    }
  }, [search, category]);

  return (
    <>
      <div className=" w-full mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {category === "artist" &&
          artistList.length > 0 &&
          artistList.map((artist) => (
            <ResultItem
              key={uuidv4()}
              image={artist.image[2]["#text"]}
              title={artist.name}
              subtitle={artist.listeners + " oyentes"}
            />
          ))}

        {category === "album" &&
          albumsList.length > 0 &&
          albumsList.map((album) => (
            <ResultItem
              key={uuidv4()}
              image={album.image[2]["#text"]}
              title={album.name}
              subtitle={album.artist}
            />
          ))}

        {category === "track" &&
          trackList.length > 0 &&
          trackList.map((track) => (
            <ResultItem
              key={uuidv4()}
              image={track.image[2]["#text"]}
              title={track.name + " | " + track.artist}
              subtitle={track.listeners + " oyentes"}
            />
          ))}
      </div>
    </>
  );
}
