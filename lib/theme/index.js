import { moderateScale } from "react-native-size-matters";

const baseTheme = {
  colors: {
    font: {
      default: "#FFFFFF",
      base: "##2F3941",
      primary: "#1B1F23",
      secondary: "#676767",
      danger: "#FE295C",
    },
    background: {
      default: "#FFFFFF",
      base: "#2F3941",
      primary: "#E4E4E7",
      secondary: "#E9EBED",
    },
    card: {
      default: "#FFFFFF",
      base: "#2F3941",
      primary: "#F8F9F9",
      secondary: "#E9EBED",
    },
    border: {
      default: "#FFFFFF",
      base: "#2F3941",
      primary: "#E4E4E7",
      danger: "#FE295C",
    },
  },
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
