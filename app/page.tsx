"use client";
import { Search } from "lucide-react";
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
        <form className="relative max-w-96">
          <input
            type="text"
            required
            minLength={1}
            name="search"
            autoComplete="off"
            className="focus:shadow-md border relative w-full focus:outline-none transition duration-300 text-sm p-2"
            placeholder="Busca música..."
          />
          <button className="absolute top-0 right-0 w-10 h-full z-10 flex items-center justify-center border-l">
            <Search size={14} />
          </button>
        </form>
      </div>
    </>
  );
}
