"use client";
import { useSessionStore } from "@/store/session-store";

export default function Page() {
  const { session } = useSessionStore();
  return (
    <>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
