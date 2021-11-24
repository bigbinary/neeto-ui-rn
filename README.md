[![Netlify Status](https://api.netlify.com/api/v1/badges/1772e21c-61b9-4100-9b2e-9b0d1ce6a210/deploy-status)](https://app.netlify.com/sites/neetoui-rn/deploys) [![Netlify Status](https://api.netlify.com/api/v1/badges/717761ba-353e-4417-9860-86e49b78ac36/deploy-status)](https://app.netlify.com/sites/neetoui-rn-docs/deploys)



**NeetoUI-RN** is the library that drives the experience in all Neeto React
Native products built at [BigBinary](https://www.bigbinary.com).

## Installation

```
yarn add @bigbinary/neetoui-rn
```

## Development

Install all the dependencies by executing following command.

```
yarn
```

You can create new components in the `lib/components` and export them from
`lib/index.js`. You can create stories in `storybook/stories`.

You can use below commands for running storybook in different platforms:

| Platform | Command              |
| -------- | -------------------- |
| Android  | `yarn android`       |
| iOS:     | `yarn ios`           |
| Web      | `yarn storybook-web` |

## Auto Publish to NPM

NeetoUI-RN version gets patched, auto-incremented and auto-published to npm on
new commit to master. You can checkout the `publish` workflow in git actions to
get a live update.

## Building Storybook

Run `yarn build-react` to build storybook locally, this would create `dist`
folder with static files.

Run `yarn serve` to serve storybook locally.


## Building Component Documentation 

Run `cd docs`, `yarn build` to build component documentation locally, this would create `dist`
folder with static files in `docs` folder.

## Documentation

Read the docs here.

https://neetoui-rn.netlify.app
