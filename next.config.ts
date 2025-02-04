import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/kvpproducts/image/upload/v1738656209/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
