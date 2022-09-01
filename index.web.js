import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";
if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
});

// Loaded Fonts with this approach: https://github.com/oblador/react-native-vector-icons#web-with-webpack


import sfRegular from "./assets/fonts/SFProText-Regular.ttf";
import sfMedium from "./assets/fonts/SFProText-Medium.ttf";
import sfSemiBold from "./assets/fonts/SFProText-Semibold.ttf";
import sfBold from "./assets/fonts/SFProText-Bold.ttf";


const iconFontStyles = `
@font-face {
  src: url(${sfRegular});
  font-family: SFProText-Regular;
}

@font-face {
  src: url(${sfMedium});
  font-family: SFProText-Medium;
}

@font-face {
  src: url(${sfSemiBold});
  font-family: SFProText-Semibold;
}

@font-face {
  src: url(${sfBold});
  font-family: SFProText-Bold;
}
`;

const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

document.head.appendChild(style);
