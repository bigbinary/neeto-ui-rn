import { moderateScale } from "react-native-size-matters";

const baseTheme = {
  colors: {
    font: {
      default: "#FFFFFF",
      base: "#E69800",
      primary: "#383433",
      secondary: "#676767",
      danger: "#FE295C",
    },
    background: {
      default: "#FFFFFF",
      base: "#E69800",
      primary: "#383433",
      secondary: "#676767",
    },
    border: {
      default: "#FFFFFF",
      base: "#E69800",
      primary: "#383433",
      secondary: "#676767",
      danger: "#FE295C",
    },
  },
  fonts: {
    // We can add commented fonts later as follows.
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
