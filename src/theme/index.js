const defaultColors = {
  white: "#ffffff",
  black: "#000000",
  base: "#2f3941",
  danger: "#ff6969",
  menubackground: "#f4f5f7",
};

const toastBorderColors = {
  success: "#5cb85c",
  error: "#d9534f",
  info: "#5bc0de",
  warning: "#f0ad4e",
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
    parentView: "#ffffff",
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
  toast: {
    ...toastBorderColors,
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

    // buttonTextStyles
    solid: {
      color: baseTheme.colors.font.white,
    },
    inverse: {
      color: baseTheme.colors.font.base,
    },
    text: {
      color: baseTheme.colors.font.base,
    },
  },
  buttons: {
    solid: {
      border: 2,
      borderColor: baseTheme.colors.background.base,
      backgroundColor: baseTheme.colors.background.base,
    },
    inverse: {
      border: 2,
      borderColor: baseTheme.colors.border.base,
      backgroundColor: baseTheme.colors.background.white,
    },
    text: {
      color: baseTheme.colors.font.grey800,
      backgroundColor: baseTheme.colors.background.white,
    },
  },
};
