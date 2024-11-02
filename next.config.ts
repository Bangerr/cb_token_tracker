import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CB_NAME: process.env.NEXT_PUBLIC_CB_NAME,
    NEXT_PUBLIC_CB_PRIVATEKEY: process.env.NEXT_PUBLIC_CB_PRIVATEKEY,
  },
};

export default nextConfig;
