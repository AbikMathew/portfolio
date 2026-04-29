/** @type {import('next').NextConfig} */
// Served from apex domain abik.in, so no basePath/assetPrefix.
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
