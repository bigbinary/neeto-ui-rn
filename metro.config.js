/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      getTransformOptions: () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "cjs", "svg", "jsx", "js"],
    },
  };
})();
