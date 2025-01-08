"use client";

import { useSessionStore } from "@/store/session-store";
import { useEffect, useState } from "react";

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { signIn } = useSessionStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSession() {
      try {
        const response = await fetch("/api/auth/validate-token", {
          method: "POST",
        });

        if (!response.ok) throw new Error("No se autentico");
        const { session, accessToken } = await response.json();
        signIn(accessToken, session);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getSession();
  }, [signIn]);
  return <> {!isLoading && <>{children}</>};</>;
}
