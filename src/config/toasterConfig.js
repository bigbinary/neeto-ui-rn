import React from "react";
import Toast, { SuccessToast, ErrorToast } from "react-native-toast-message";
import { StyleSheet } from "react-native";
import { Button, Typography } from "@components";

import { theme } from "@theme";

export const toasterConfig = {
  success: props => (
    <SuccessToast
      {...props}
      leadingIconContainerStyle={styles.toasterBGColor}
      trailingIcon={() => {
        return <Button label="x" />;
      }}
      // trailingIcon={require("@assets/images/close.png")}
      trailingIconContainerStyle={styles.toasterBGColor}
      onTrailingIconPress={() => Toast.hide()}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      leadingIconContainerStyle={styles.toasterBGColor}
      renderTrailingIcon={() => {
        return <Typography> X </Typography>;
      }}
      // trailingIcon={require("@assets/images/close.png")}
      trailingIconContainerStyle={styles.toasterBGColor}
      onTrailingIconPress={() => Toast.hide()}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),
};

toasterConfig.success.displayName = "Success";
toasterConfig.error.displayName = "Error";

const styles = StyleSheet.create({
  toasterBGColor: { backgroundColor: theme.colors.background.grey800 },
  contentContainerStyle: {
    paddingHorizontal: 15,
    backgroundColor: theme.colors.background.grey800,
  },
  text1Style: {
    fontSize: 15,
    fontFamily: theme.fonts.inter700,
    color: theme.colors.font.white,
  },
  text2Style: {
    fontSize: 16,
    fontFamily: theme.fonts.inter700,
    color: theme.colors.font.white,
  },
});
