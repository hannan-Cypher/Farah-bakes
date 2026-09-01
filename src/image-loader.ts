export default function customImageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const isGithubPages =
    process.env.GITHUB_ACTIONS === "true" ||
    process.env.GITHUB_PAGES === "true" ||
    process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

  const basePath = isGithubPages ? "/Farah-bakes" : "";

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return `${basePath}${src.startsWith("/") ? "" : "/"}${src}`;
}
