import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "TIntech Prueba Técnica",
  description:
    "Aplicación web utilizando React que permite a los usuarios buscar música utilizando la API de Last.fm. La aplicación  muestra los álbumes, canciones y artistas relacionados con la búsqueda realizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-dvh min-w-dvw">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
