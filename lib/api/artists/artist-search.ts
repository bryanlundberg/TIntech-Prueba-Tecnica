"use server";
import { config } from "@/config/config";
import { ArtistSearchResult } from "@/interfaces/artists";

interface IArtistSearchParams {
  limit?: number;
  page?: number;
  artist: string;
}

export async function artistSearch({
  limit,
  page,
  artist,
}: IArtistSearchParams) {
  try {
    if (!config.LAST_FM_BASE_URL) {
      throw new Error("LAST_FM_BASE_URL not found.");
    }

    if (!config.LAST_FM_API_KEY) {
      throw new Error("LAST_FM_API_KEY not found.");
    }

    const url = new URL(config.LAST_FM_BASE_URL);

    const params: Record<string, string> = {
      api_key: config.LAST_FM_API_KEY,
    };

    params.method = "artist.search";
    params.format = "json";
    if (limit !== undefined) params.limit = limit.toString();
    if (page !== undefined) params.page = page.toString();
    if (artist) params.artist = artist;

    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Response error: ${response.statusText}`);
    }

    const data: ArtistSearchResult = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
