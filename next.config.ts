/** @type {import('next').NextConfig} */
const isGithubPages =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.GITHUB_PAGES === "true";

const basePath = isGithubPages ? "/Farah-bakes" : "";

const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: basePath ? basePath : undefined,
  images: isGithubPages
    ? {
        loader: "custom",
        loaderFile: "./src/image-loader.ts",
      }
    : {
        unoptimized: true,
      },
};

export default nextConfig;