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

import interThin from "./assets/fonts/Inter-Thin.ttf";
import interExtraLight from "./assets/fonts/Inter-ExtraLight.ttf";
import interLight from "./assets/fonts/Inter-Light.ttf";
import interRegular from "./assets/fonts/Inter-Regular.ttf";
import interMedium from "./assets/fonts/Inter-Medium.ttf";
import interSemiBold from "./assets/fonts/Inter-SemiBold.ttf";
import interBold from "./assets/fonts/Inter-Bold.ttf";
import interExtraBold from "./assets/fonts/Inter-ExtraBold.ttf";
import interBlack from "./assets/fonts/Inter-Black.ttf";

const iconFontStyles = `

@font-face {
  src: url(${interThin});
  font-family: Inter-Thin;
}

@font-face {
  src: url(${interExtraLight});
  font-family: Inter-ExtraLight;
}

@font-face {
  src: url(${interLight});
  font-family: Inter-Light;
}

@font-face {
  src: url(${interRegular});
  font-family: Inter-Regular;
}
@font-face {
  src: url(${interMedium});
  font-family: Inter-Medium;
}
@font-face {
  src: url(${interSemiBold});
  font-family: Inter-SemiBold;
}
@font-face {
  src: url(${interBold});
  font-family: Inter-Bold;
}
@font-face {
  src: url(${interExtraBold});
  font-family: Inter-ExtraBold;
}

@font-face {
  src: url(${interBlack});
  font-family: Inter-Black;
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
