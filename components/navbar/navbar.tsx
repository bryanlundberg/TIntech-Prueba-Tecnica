import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-black flex h-[68px] px-2 items-center justify-between">
        <Image
          src={"/logo.svg"}
          alt="logo last.fm"
          width={100}
          height={100}
          className="w-[120px] h-[28px] object-scale-down"
        />
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
      </div>
    </>
  );
}
