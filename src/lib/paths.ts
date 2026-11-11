const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix local asset paths for GitHub Pages (`/culture-house-website`). */
export function withBasePath(path: string): string {
  if (
    !path ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
