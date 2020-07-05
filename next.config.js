const withOffline = require("next-offline");

const nextConfig = {
    target: "serverless",
    transformManifest: (manifest) => ["/"].concat(manifest), // add the homepage to the cache
    // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
    // turn on the SW in dev mode so that we can actually test it
    generateInDevMode: true,
    workboxOpts: {
        swDest: process.env.NEXT_EXPORT
            ? "service-worker.js"
            : "static/service-worker.js",
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: "NetworkFirst",
                options: {
                    cacheName: "https-calls",
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
            {
                urlPattern: /.(?:png|webp|svg)$/,
                handler: "CacheFirst",
            },
        ],
    },
    experimental: {
        rewrites() {
            return [
                {
                    source: "/service-worker.js",
                    destination: "/_next/static/service-worker.js",
                },
            ];
        },
        headers() {
            return [
                {
                    source: "/service-worker.js",
                    headers: [
                        {
                            key: "Cache-Control",
                            value: "public, max-age=43200, immutable",
                        },
                        {
                            key: "Service-Worker-Allowed",
                            value: "/",
                        },
                    ],
                },
            ];
        },
    },
};

module.exports =
    process.env.NODE_ENV === "development"
        ? nextConfig
        : withOffline(nextConfig);
