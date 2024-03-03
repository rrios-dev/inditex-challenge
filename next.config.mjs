import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value: "script-src 'self';",
          },
        ],
      },
    ];
  },
};

export default million.next(nextConfig);
