"use client";
import SearchBar from "@/components/search-bar/search-bar";
import SearchResults from "@/components/search-results/search-results";
import TabItem from "@/components/tabs/tab-item";
import { useSearchStore } from "@/store/search-store";
import { useSessionStore } from "@/store/session-store";
import { redirect } from "next/navigation";

export default function Page() {
  const { search, handleChangeCategory, category } = useSearchStore();
  const { session } = useSessionStore();
  if (!session) redirect("/login");
  return (
    <>
      {search !== "" && (
        <div className="max-w-xl mx-auto mt-10 font-black text-2xl">
          Resultados para <span className="opacity-70">{search}</span>
        </div>
      )}
      <div className="flex gap-3 mt-10 max-w-xl mx-auto px-3">
        <TabItem
          onClick={() => handleChangeCategory("artist")}
          label="Artistas"
          active={category === "artist"}
        />
        <TabItem
          onClick={() => handleChangeCategory("album")}
          label="Albums"
          active={category === "album"}
        />
        <TabItem
          onClick={() => handleChangeCategory("track")}
          label="Canciones"
          active={category === "track"}
        />
      </div>

      <div className="border-b"></div>

      <div className="max-w-xl mx-auto mt-10 px-3">
        <SearchBar />
        <SearchResults />
      </div>
    </>
  );
}
