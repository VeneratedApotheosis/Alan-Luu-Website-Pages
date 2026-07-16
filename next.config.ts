import type { NextConfig } from "next";
import { appendBasePath } from '@/utils/paths';

const nextConfig: NextConfig = {
  basePath: appendBasePath("/Alan-Luu-Website-Pages"),
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
