const isLocalLikeBuildEnv =
  !process.env.BUILD_ENV || process.env.BUILD_ENV === "local";
const isProductionLikeRuntime = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable <React.StrictMode> in application
  reactStrictMode: true,
  env: {
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    gaTrackingId: process.env.gaTrackingId,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
  compiler: {
    styledComponents: {
      ssr: true,
      pure: isProductionLikeRuntime,
      minify: isProductionLikeRuntime,
      transpileTemplateLiterals: isProductionLikeRuntime,
      fileName: isLocalLikeBuildEnv,
      displayName: isLocalLikeBuildEnv,
    },
  },
};

module.exports = nextConfig;
