/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/KisanWise",
  assetPrefix: '/KisanWise/',
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
