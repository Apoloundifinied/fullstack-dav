import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const jost = localFont({ src: "../../public/fonts/jost.ttf", variable: "--font-jost", display: "swap", weight: "100 900" });
export const metadata: Metadata = {
  title: "Fullstack — Desenvolvimento & Criação Visual",
  description: "Portfólio de Fullstack: desenvolvimento Full Stack, automação, integrações com IA, edição de foto e vídeo e motion design.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={jost.variable}>{children}</body></html>;
}
