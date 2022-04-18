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
    ["react-native-reanimated/plugin"],
  ];
  if (babelEnv === "production") {
    plugins.push("transform-remove-console");
  }
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins,
  };
};
