/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API: 'http://localhost:3001/'
    },
    output: 'export',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
