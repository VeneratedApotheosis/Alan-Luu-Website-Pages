import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Alan-Luu-Website-Pages/",
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
