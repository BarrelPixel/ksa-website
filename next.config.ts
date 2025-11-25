import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "ksa-website";

const nextConfig: NextConfig = {
	output: 'export',
	...(isProd ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` } : {}),
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

export default nextConfig;
