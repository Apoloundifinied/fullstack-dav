export function publicAsset(path: string) {
  return (process.env.NEXT_PUBLIC_SITE_BASE ?? "") + path;
}
