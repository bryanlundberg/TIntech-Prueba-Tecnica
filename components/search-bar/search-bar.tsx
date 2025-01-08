"use client";

import { useSearchStore } from "@/store/search-store";
import { Search } from "lucide-react";
import { FormEvent } from "react";

export default function SearchBar() {
  const { handleChangeSearch } = useSearchStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search");
    if (query) handleChangeSearch(query as string);
  };

  return (
    <>
      <form className="relative max-w-96" onSubmit={handleSubmit}>
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
    </>
  );
}
