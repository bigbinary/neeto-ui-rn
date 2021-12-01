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
    xs: 10,
    s: 12,
    m: 14,
    l: 18,
    xl: 24,
    xxl: 32,
  },
};

//aliases
baseTheme.lineHeights.note = baseTheme.lineHeights[0] + "px";

export const theme = {
  ...baseTheme,
  textStyles: {
    defaultTextStyle: {
      color: baseTheme.colors.font.primary,
    },
    header: {
      color: baseTheme.colors.font.primary,
      fontSize: baseTheme.fontSizes.l,
      fontFamily: baseTheme.fonts.inter700,
    },
    body: {
      color: baseTheme.colors.font.primary,
      fontSize: baseTheme.fontSizes.m,
    },
    subtext: {
      color: baseTheme.colors.font.primary,
      fontSize: baseTheme.fontSizes.s,
    },
  },
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
      color: "#00FF00",
      backgroundColor: baseTheme.colors.grey,
    },
  },
};
