/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      hmrRefreshes: true,
      fullUrl: true,
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.worms.de",
        port: "",
        pathname: "/neu-de-wAssets/**",
      },
    ],
  },
};

export default nextConfig;
