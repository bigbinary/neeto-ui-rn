const custom = require("../webpack.config.js");

module.exports = {
  webpackFinal: config => {
    return {
      ...config,
      resolve: { alias: { ...config.resolve.alias, ...custom.resolve.alias } },
      module: { ...config.module, rules: custom.module.rules },
    };
  },

  stories: ["../storybook/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-notes",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-backgrounds",
  ],
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
