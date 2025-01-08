"use server";
import { config } from "@/config/config";
import { AlbumSearchResult } from "@/interfaces/albums";

interface IAlbumSearchParams {
  limit?: number;
  page?: number;
  album: string;
}

export async function albumSearch({ limit, page, album }: IAlbumSearchParams) {
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

    params.method = "album.search";
    params.format = "json";
    if (limit !== undefined) params.limit = limit.toString();
    if (page !== undefined) params.page = page.toString();
    if (album) params.album = album;

    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Response error: ${response.statusText}`);
    }

    const data: AlbumSearchResult = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
