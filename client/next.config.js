/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SERVER_URL: "http://localhost:8747"
  },
  images: {
    domains: ['localhost'], // Add 'localhost' to the list of allowed domains
    // Optionally, you can configure remote patterns as well
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
