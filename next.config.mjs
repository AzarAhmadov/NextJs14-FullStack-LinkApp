/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [{
            source: '/',
            destination: '/AzarAhmadov',
            permanent: true,
        }, ];
    },
};

export default nextConfig;