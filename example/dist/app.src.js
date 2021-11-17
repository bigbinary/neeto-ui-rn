
import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import App from '/Users/sangameshsomawar/Desktop/bbprojects/neeto-ui-rn/node_modules/component-docs/dist/templates/App.js';
import data from './app.data';
import '/Users/sangameshsomawar/Desktop/bbprojects/neeto-ui-rn/node_modules/component-docs/dist/styles/reset.css';
import '/Users/sangameshsomawar/Desktop/bbprojects/neeto-ui-rn/node_modules/component-docs/dist/styles/globals.css';

import '/Users/sangameshsomawar/Desktop/bbprojects/neeto-ui-rn/example/__fixtures__/assets/styles.css';

const root = document.getElementById('root');
const render = () => {
  try {
    ReactDOM.hydrate(
      <App
        name={window.__INITIAL_PATH__}
        data={data}
        github={"https://github.com/callstack/component-docs/edit/master"}
        logo={"images/logo.svg"}
        title={"[title] - Component Docs"}
      />,
      root
    );
  } catch (e) {
    ReactDOM.render(
      <RedBox error={e} />,
      root
    );
  }
};

if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}

render();
