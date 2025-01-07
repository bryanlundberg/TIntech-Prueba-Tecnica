import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
