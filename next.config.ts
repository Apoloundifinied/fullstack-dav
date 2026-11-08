import type { NextConfig } from "next";

const pages = process.env.GITHUB_PAGES === "1";

const config: NextConfig = pages
  ? {
      output: "export",
      basePath: "/fullstack-dav",
      distDir: "pages-out",
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_SITE_BASE: "/fullstack-dav" },
    }
  : {};

export default config;
