/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Farah-bakes",
  images: {
    loader: "custom",
    loaderFile: "./src/image-loader.ts",
  },
};

export default nextConfig;