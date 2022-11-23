import * as React from "react";
import { useContext } from "react";
import { useWindowDimensions } from "react-native";

import PropTypes from "prop-types";
import DeviceInfo from "react-native-device-info";
import CloseIcon from "react-native-remix-icon";
import T from "react-native-toast-message";
import { ThemeContext } from "styled-components/native";

import ErrorIcon from "@assets/icons/error.svg";
import InfoIcon from "@assets/icons/info.svg";
import SuccessIcon from "@assets/icons/success.svg";
import WarningIcon from "@assets/icons/warning.svg";
import { Container, Typography, Touchable } from "@components";
import { defaultToasterConfig } from "@config";

const ToastComponent = ({ type, text1, text2, hide }) => {
  const theme = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const Icon = () => {
    switch (type) {
      case "success":
        return <SuccessIcon />;
      case "warning":
        return <WarningIcon />;
      case "info":
        return <InfoIcon />;
      case "error":
        return <ErrorIcon />;
    }

    return null;
  };

  return (
    <Container
      alignItems="center"
      bg={theme.colors.background.secondary}
      borderRadius={16}
      flexDirection="row"
      minHeight={60}
      mt={DeviceInfo.hasDynamicIsland() ? 10 : 0}
      mx={10}
      px={10}
      width={width - 20}
    >
      <Container
        alignItems="center"
        bg={theme.colors.toast[type]}
        borderRadius={10}
        height={42}
        justifyContent="center"
        width={42}
      >
        <Icon />
      </Container>
      <Container flex={1} ml={10} py={3}>
        {text1 && (
          <Typography
            fontColor={theme.colors.font.primary}
            fontFamily={theme.fonts.sf600}
            fontSize="l"
          >
            {text1}
          </Typography>
        )}
        {text2 && (
          <Typography
            fontColor={theme.colors.font.secondary}
            fontFamily={theme.fonts.sf400}
            fontSize="xs"
          >
            {text2}
          </Typography>
        )}
      </Container>
      <Touchable
        hitSlop={{
          top: 5,
          right: 5,
          bottom: 5,
          left: 5,
        }}
        onPress={hide}
      >
        <CloseIcon color={theme.colors.font.grey500} name="ri-close-line" />
      </Touchable>
    </Container>
  );
};

ToastComponent.propTypes = {
  type: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hide: PropTypes.func,
};

/**
 * Toast component is a wrapper over https://github.com/calintamas/react-native-toast-message.
 *
 * <div class="screenshots">
 *   <img src="screenshots/toast/toast-1.png" />
 *   <img src="screenshots/toast/toast-2.png" />
 *   <img src="screenshots/toast/toast-3.png" />
 *   <img src="screenshots/toast/toast-4.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 *import { Toast } from "@bigbinary/neetoui-rn";
 *
 *export function App(props) {
 *  return (
 *    <>
 *      // Render at root component.
 *      <Toast />
 *    </>
 *  );
 *}
 *
 *
 *import * as React from "react";
 *import { Toast, Container, Button } from "@bigbinary/neetoui-rn";
 *
 *export default function Main() {
 *  return (
 *    <Container>
 *      <Button
 *        label="Error Test"
 *        onPress={() => {
 *          Toast.show({
 *            type: "error",
 *            text1: "Yay!",
 *            text2: "Have a nice day! 😄",
 *          });
 *        }}
 *      />
 *    </Container>
 *  );
 *}
 * ```
 * @extends StyledSystems props /styled-system
 */

export const Toast = ({ toasterConfig, ...rest }) => {
  const customConfig = {
    success: ToastComponent,
    warning: ToastComponent,
    info: ToastComponent,
    error: ToastComponent,
  };

  return (
    <T
      {...rest}
      config={{ ...defaultToasterConfig, ...customConfig, ...toasterConfig }}
      position="top"
    />
  );
};

Toast.show = T.show;
Toast.hide = T.hide;

Toast.propTypes = {
  /**
   * configuration
   */
  toasterConfig: PropTypes.object,
};