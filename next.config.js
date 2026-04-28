/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: isProd ? '/portfolio' : '',
    assetPrefix: isProd ? '/portfolio/' : '',
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
