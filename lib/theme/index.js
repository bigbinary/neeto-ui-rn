const defaultColors = {
  white: "#ffffff",
  black: "#000000",
  base: "#2f3941",
  danger: "#ff6969",
};

const greyVarients = {
  grey: "#828282",
  grey100: "#f8f9f9",
  grey200: "#e9ebed",
  grey300: "#d8dcde",
  grey400: "#c2c8cc",
  grey500: "#87929d",
  grey600: "#68737d",
  grey800: "#2f3941",
};

const colors = {
  font: {
    primary: "#1b1f23",
    secondary: "#828282",
    ...defaultColors,
    ...greyVarients,
  },
  background: {
    primary: "#ffffff",
    secondary: "#e4e4e7",
    ...defaultColors,
    ...greyVarients,
  },
  border: {
    primary: "#e4e4e7",
    ...greyVarients,
    ...defaultColors,
  },
};

const baseTheme = {
  colors,
  fonts: {
    // We can add below commented fonts later as follows. Also add font faces in index.web.js for the web.
    // https://www.bigbinary.com/learn-react-native/adding-custom-fonats

    // inter100: "Inter-Thin",
    // inter200: "Inter-ExtraLight",
    // inter300: "Inter-Light",
    // inter500: "Inter-Medium",
    // inter600: "Inter-SemiBold",
    // inter800: "Inter-ExtraBold",
    // inter900: "Inter-Black",

    inter400: "Inter-Regular",
    inter700: "Inter-Bold",
  },
  lineHeights: [24],
  fontSizes: {
    largeTitle: 32,
    title1: 24,
    title2: 18,
    title3: 18,
    headline: 14,
    body: 14,
    callout: 12,
    caption1: 12,
    caption2: 10,
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
