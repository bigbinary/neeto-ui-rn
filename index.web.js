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

// Load Fonts
// Ref: https://github.com/oblador/react-native-vector-icons#web-with-webpack

import interRegular from "./assets/fonts/Inter-Regular.ttf";
import interBold from "./assets/fonts/Inter-Bold.ttf";

const iconFontStyles = `
@font-face {
  src: url(${interRegular});
  font-family: Inter-Regular;
}

@font-face {
  src: url(${interBold});
  font-family: Inter-Bold;
}


`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
