/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**", // Allow all paths
      },
      {
        hostname: "buddhist-institute.kimsoreya.site",
      },
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default nextConfig;
