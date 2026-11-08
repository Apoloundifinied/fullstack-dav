import type { Metadata } from "next";
export const siteUrl = "https://apoloundifinied.github.io/fullstack-dav/";
export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = new URL(path, siteUrl).href;
  const images = [{ url: `${siteUrl}images/social-preview.png`, width: 1200, height: 630, alt: "Robson — Full Stack, IA e Automação" }];
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Robson · Portfólio", locale: "pt_BR", type: "website", images },
    twitter: { card: "summary_large_image", title, description, images: images.map(image => image.url) },
  };
}
