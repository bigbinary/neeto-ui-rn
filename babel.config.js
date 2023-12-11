
module.exports = api => {
  const babelEnv = api.env();
  const plugins = [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: require("./aliases.json"),
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
  ];
  if (babelEnv === "production") {
    plugins.push("transform-remove-console");
  }

  if (babelEnv === "development") {
    plugins.push('react-native-reanimated/plugin')
  }

  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins,
  };
};
