import { moderateScale } from "react-native-size-matters";

const defaultColors = {
  white: "#FFFFFF",
  black: "#000000",
  base: "#2F3941",
  danger: "#FF6969",
};

const greyVarients = {
  grey: "#828282",
  grey100: "#F8F9F9",
  grey200: "#E9EBED",
  grey300: "#D8DCDE",
  grey400: "#C2C8CC",
  grey500: "#87929D",
  grey600: "#68737D",
  grey800: "#2F3941",
};

const colors = {
  font: {
    primary: "#1B1F23",
    secondary: "#676767",
    ...defaultColors,
    ...greyVarients,
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#E4E4E7",
    ...defaultColors,
    ...greyVarients,
  },
  border: {
    primary: "#E4E4E7",
    ...greyVarients,
    ...defaultColors,
  },
};

const baseTheme = {
  colors,
  fonts: {
    // We can add below commented fonts later as follows. Also add font faces in index.web.js for the web.
    // https://www.bigbinary.com/learn-react-native/adding-custom-fonats

    // thin: "Inter-Thin",
    // extraLight: "Inter-ExtraLight",
    // light: "Inter-Light",
    // medium: "Inter-Medium",
    // semiBold: "Inter-SemiBold",
    // extraBold: "Inter-ExtraBold",
    // black: "Inter-Black",

    regular: "Inter-Regular",
    bold: "Inter-Bold",
  },
  lineHeights: [24],
  fontSizes: {
    largeTitle: moderateScale(32),
    title1: moderateScale(24),
    title2: moderateScale(18),
    title3: moderateScale(18),
    headline: moderateScale(14),
    body: moderateScale(14),
    callout: moderateScale(12),
    caption1: moderateScale(12),
    caption2: moderateScale(10),
  },
};

//aliases
baseTheme.lineHeights.note = baseTheme.lineHeights[0] + "px";

export const theme = {
  ...baseTheme,
  buttons: {
    primary: {
      color: baseTheme.colors.white,
      backgroundColor: baseTheme.colors.grey800,
    },
    secondary: {
      color: baseTheme.colors.grey800,
      backgroundColor: baseTheme.colors.white,
    },
    disabled: {
      color: baseTheme.colors.white,
      backgroundColor: baseTheme.colors.grey,
    },
  },
};
