import { create } from "zustand";

interface Session {
  id: string;
  email: string;
}
interface SessionStore {
  session: Session | null;
  accessToken: string | null;
  signIn: (accessToken: string, session: Session) => void;
  signOut: () => void;
}

export const useSessionStore = create<SessionStore>()((set) => ({
  session: null,
  accessToken: null,
  signIn: (accessToken: string, session: Session) => {
    set((state) => ({ ...state, accessToken, session: { ...session } }));
  },
  signOut: () => {
    set((state) => ({ ...state, session: null, accessToken: null }));
  },
}));
