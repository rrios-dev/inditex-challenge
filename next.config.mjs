import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|ico)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
      {
        source: "/:all*(js|mjs|cjs|json)",
        locale: false,
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self';",
          },
        ],
      },
    ];
  },
};

export default million.next(nextConfig);
