/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatar.iran.liara.run'],
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
}

module.exports = nextConfig
