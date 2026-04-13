import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@skillpass/db", "@skillpass/shared", "@skillpass/ai"],
};

export default nextConfig;
