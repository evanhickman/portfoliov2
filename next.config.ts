import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: false,
		tsconfigPath: 'tsconfig.json',
	},
	experimental: {
		optimizePackageImports: ['framer-motion'],
	},
};

export default nextConfig;
