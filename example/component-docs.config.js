/* @flow */

import path from 'path';
import fs from 'fs';

const output = path.join(__dirname, 'dist');
const fixtures = path.join(__dirname, '__fixtures__');
const assets = path.join(fixtures, 'assets');
const github = 'https://github.com/callstack/component-docs/edit/master';

console.log("Sam")
function pages() {
  const component = path.join(__dirname, '../lib/components');

   const p = [
    ...fs
      .readdirSync(component)
      .map((f) => path.join(component, f))
      .map((file) => ({ type: 'component', file })),
    { type: 'separator' },
  ];
  console.log("p",p)
  return p
}

module.exports = {
  logo: 'images/logo.svg',
  favicon: 'images/logo.ico',
  assets: [path.join(assets, 'screenshots'), path.join(assets, 'images')],
  styles: [path.join(assets, 'styles.css')],
  pages,
  output,
  github,
  title: '[title] - Component Docs',
};
