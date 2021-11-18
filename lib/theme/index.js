const baseTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    error: "#FF6969",
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
    thin: "Inter-Thin",

    extraLight: "Inter-ExtraLight",
    light: "Inter-Light",

    regular: "Inter-Regular",
    medium: "Inter-Medium",

    semiBold: "Inter-SemiBold",
    bold: "Inter-Bold",
    extraBold: "Inter-ExtraBold",

    black: "Inter-Black",
  },
  fontSizes: {
    largeTitle: "32px",
    title1: "24px",
    title2: "24px",
    title3: "18px",
    headline: "14px",
    body: "14px",
    subhead: "12px",
    callout: "12px",
    footnote: "10px",
    caption1: "12px",
    caption2: "10px",
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
