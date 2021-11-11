[![Netlify Status](https://api.netlify.com/api/v1/badges/1772e21c-61b9-4100-9b2e-9b0d1ce6a210/deploy-status)](https://app.netlify.com/sites/neetoui-rn/deploys)


**NeetoUI-RN** is the library that drives the experience in all Neeto react native products built at [BigBinary](https://www.bigbinary.com).

## Installation

```
yarn add @bigbinary/neetoui-rn
```

## Development

Install all the dependencies by executing following command.

```
yarn
```

You can create new components in the `lib/components` and export them from `lib/index.js`. You can create stories in `storybook/stories`.

You can use below commands for running storbook in different platforms:

`yarn android` for android.

`yarn ios` for ios 

`yarn storybook-web` to run in browser.

## Building

NeetoUI gets auto-published to npm on new commit to master. You can checkout the `publish` workflow in git actions to get a live update.

Run `build-storybook-web` to build locally, this would create `storybook-static` folder with static files.

## Documentation

Read the docs here.

https://neetoui-rn.netlify.app
