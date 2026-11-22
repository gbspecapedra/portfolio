import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    deviceSizes: [640, 750, 828, 960, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 320, 384],
    remotePatterns: [
      { protocol: "https", hostname: "images.prismic.io", pathname: "/7l7juw0m/**" },
    ],
    localPatterns: [
      { pathname: "/_next/static/media/**", search: "" },
      { pathname: "/_next/static/immutable/media/**", search: "" },
      { pathname: "/images/projects/**", search: "" },
      { pathname: "/images/hero-image.png", search: "" },
      { pathname: "/images/headshot.png", search: "" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none'; base-uri 'none'; object-src 'none'",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/developer/projects/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
