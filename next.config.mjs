/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "render.crafty.gg"
            }
        ]
    }
};

export default nextConfig;
