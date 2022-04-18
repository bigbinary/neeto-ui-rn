/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require("metro-config");

module.exports = async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      // eslint-disable-next-line require-await
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      resolverMainFields: ["sbmodern", "browser", "main"],
      sourceExts: [...sourceExts, "cjs"],
    },
  };
};
