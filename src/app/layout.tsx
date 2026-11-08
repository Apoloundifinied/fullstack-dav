import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { pageMetadata, siteUrl } from "@/lib/seo";
const jost = localFont({ src: "../../public/fonts/jost.ttf", variable: "--font-jost", display: "swap", weight: "100 900" });
export const metadata: Metadata = {
  ...pageMetadata("Robson | Desenvolvedor Full Stack, IA e Automação", "Portfólio de Robson, desenvolvedor no Rio Grande do Sul. Projetos com TypeScript, Python, Rust, integrações de IA, MCP e automação."),
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
  icons: { icon: `${siteUrl}icon.svg` },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={jost.variable}>{children}</body></html>;
}
