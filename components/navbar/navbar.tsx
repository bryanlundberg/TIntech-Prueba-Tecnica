"use client";
import { useSessionStore } from "@/store/session-store";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { session, signOut } = useSessionStore();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        signOut();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-black flex h-[68px] px-2 items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="logo last.fm"
            width={100}
            height={100}
            className="w-[120px] h-[28px] object-scale-down"
          />
        </Link>
        {!session ? (
          <>
            <div className="text-white flex gap-5">
              <Link
                href={"/login"}
                className="hover:opacity-90 flex items-center justify-center"
              >
                Inicia sesión
              </Link>
              <Link
                href="/register"
                className="bg-white text-black p-2 rounded-sm hover:opacity-90"
              >
                Regístrate
              </Link>
            </div>
          </>
        ) : (
          <p
            className="hover:opacity-90 text-white hover:cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </p>
        )}
      </div>
    </>
  );
}
