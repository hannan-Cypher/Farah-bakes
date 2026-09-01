export default function customImageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/Farah-bakes";
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return `${basePath}${src.startsWith("/") ? "" : "/"}${src}`;
}
