const baseTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    grey800: "#2F3941",
    grey600: "#68737D",
    grey500: "#87929D",
    grey100: "#F8F9F9",
    grey: "#828282",
    lightgrey: "#F4F5F7",
    border: "#E4E4E7",
    boulder: "#787878",
    spindle: "#C2C8CC",
    primary: "#1B1F23",
    error: "#FF6969",
  },
  fonts: {
    Inter700: "Inter-Bold",
    Inter400: "Inter-Regular",
  },
  fontSizes: {
    h1: "32px",
    h2: "24px",
    h3: "20px",
    h4: "16px",
    h5: "14px",
    h6: "12px",
    body1: "16px",
    body2: "14px",
    body3: "12px",
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
