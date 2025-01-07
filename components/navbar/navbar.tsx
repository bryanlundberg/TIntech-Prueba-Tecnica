import Image from "next/image";

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
          <button className="hover:opacity-90">Inicia sesión</button>
          <button className="bg-white text-black p-2 rounded-sm hover:opacity-90">
            Regístrate
          </button>
        </div>
      </div>
    </>
  );
}
