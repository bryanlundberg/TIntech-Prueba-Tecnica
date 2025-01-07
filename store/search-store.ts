import { create } from "zustand";

type Category = "artist" | "track" | "album";

interface SearchStore {
  search: string;
  category: Category;
  handleChangeSearch: (word: string) => void;
  handleChangeCategory: (category: Category) => void;
}

export const useSearchStore = create<SearchStore>()((set) => ({
  search: "",
  category: "artist",
  handleChangeSearch: (word) => set((state) => ({ ...state, search: word })),
  handleChangeCategory: (category) => set((state) => ({ ...state, category })),
}));
