import React from "react";
import Toast, { BaseToast } from "react-native-toast-message";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-remix-icon";

import { theme } from "@theme";

const CloseButton = () => {
  return (
    <Pressable style={styles.closeButtonStyle} onPress={Toast.hide}>
      <Icon
        name="ri-close-fill"
        size={25}
        color={theme.colors.background.white}
      />
    </Pressable>
  );
};

export const defaultToasterConfig = {
  success: props => (
    <BaseToast
      {...props}
      leadingIconContainerStyle={styles.toasterBGColor}
      renderTrailingIcon={() => <CloseButton />}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      text1NumberOfLines={10}
      text2NumberOfLines={10}
      touchableContainerProps={{
        style: [styles.touchableContainerProps, styles.successStyle],
      }}
    />
  ),
  error: props => (
    <BaseToast
      {...props}
      leadingIconContainerStyle={styles.toasterBGColor}
      renderTrailingIcon={() => <CloseButton />}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      text1NumberOfLines={10}
      text2NumberOfLines={10}
      touchableContainerProps={{
        style: [styles.touchableContainerProps, styles.errorStyle],
      }}
    />
  ),
  info: props => (
    <BaseToast
      {...props}
      leadingIconContainerStyle={styles.toasterBGColor}
      renderTrailingIcon={() => <CloseButton />}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      text1NumberOfLines={10}
      text2NumberOfLines={10}
      touchableContainerProps={{
        style: [styles.touchableContainerProps, styles.infoStyle],
      }}
    />
  ),
  warning: props => (
    <BaseToast
      {...props}
      leadingIconContainerStyle={styles.toasterBGColor}
      renderTrailingIcon={() => <CloseButton />}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      text1NumberOfLines={10}
      text2NumberOfLines={10}
      touchableContainerProps={{
        style: [styles.touchableContainerProps, styles.warningStyle],
      }}
    />
  ),
};

defaultToasterConfig.success.displayName = "Success";
defaultToasterConfig.error.displayName = "Error";

const styles = StyleSheet.create({
  touchableContainerProps: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: 10,
    width: 340,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    backgroundColor: "#FFF",
    borderLeftWidth: 5,
    borderLeftColor: "#D8D8D8",
  },
  successStyle: {
    borderLeftColor: theme.colors.toast.success,
    backgroundColor: theme.colors.background.grey800,
  },
  errorStyle: {
    borderLeftColor: theme.colors.toast.error,
    backgroundColor: theme.colors.background.grey800,
  },
  infoStyle: {
    borderLeftColor: theme.colors.toast.info,
    backgroundColor: theme.colors.background.grey800,
  },
  warningStyle: {
    borderLeftColor: theme.colors.toast.warning,
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
