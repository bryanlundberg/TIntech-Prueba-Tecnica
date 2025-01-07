"use client";
import SearchBar from "@/components/search-bar/search-bar";
export default function Page() {
  return (
    <>
      <div className="flex gap-3 mt-10 max-w-xl mx-auto">
        <div className="border-b-2 border-red-500">Artistas</div>
        <div>Albums</div>
        <div>Tracks</div>
      </div>

      <div className="border-b"></div>

      <div className="max-w-xl mx-auto mt-10">
        <SearchBar />
      </div>
    </>
  );
}
