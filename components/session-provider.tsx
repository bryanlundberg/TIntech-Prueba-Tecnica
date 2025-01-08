"use client";

import { useSessionStore } from "@/store/session-store";
import { useEffect } from "react";

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { signIn } = useSessionStore();

  useEffect(() => {
    async function getSession() {
      try {
        const response = await fetch("/api/auth/validate-token", {
          method: "POST",
        });
        const { session, accessToken } = await response.json();
        signIn(accessToken, session);
      } catch (error) {
        console.log(error);
      }
    }

    getSession();
  }, [signIn]);
  return children;
}
