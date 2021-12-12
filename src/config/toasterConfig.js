import React from "react";
import Toast, { BaseToast } from "react-native-toast-message";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-remix-icon";

import { theme } from "@theme";

const CloseButton = () => {
  return (
    <Pressable style={styles.closeButtonStyle} onPress={() => Toast.hide()}>
      <Icon
        name="ri-close-fill"
        size={25}
        color={theme.colors.background.white}
      />
    </Pressable>
  );
};

export const toasterConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={styles.successStyle}
      leadingIconContainerStyle={styles.toasterBGColor}
      renderTrailingIcon={() => <CloseButton />}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),
  error: props => (
    <BaseToast
      {...props}
      style={styles.errorStyle}
      leadingIconContainerStyle={styles.toasterBGColor}
      renderTrailingIcon={() => <CloseButton />}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),
};

toasterConfig.success.displayName = "Success";
toasterConfig.error.displayName = "Error";

const styles = StyleSheet.create({
  successStyle: {
    borderLeftColor: "#69C779",
    backgroundColor: theme.colors.background.grey800,
  },
  errorStyle: {
    borderLeftColor: "#FE6301",
    backgroundColor: theme.colors.background.grey800,
  },
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
  closeButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    backgroundColor: theme.colors.background.grey800,
    shadowColor: theme.colors.background.grey800,
    flexDirection: "row",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
});
