import * as React from "react";
import PropTypes from "prop-types";
import T from "react-native-toast-message";
import { defaultToasterConfig } from "@config";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { useWindowDimensions } from "react-native";

import SuccessIcon from "@assets/icons/success.svg";
import WarningIcon from "@assets/icons/warning.svg";
import InfoIcon from "@assets/icons/info.svg";
import ErrorIcon from "@assets/icons/error.svg";
import { Container, Typography } from "@components";

const ToastComponent = ({ type, text1, text2 }) => {
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
  };
  return (
    <Container
      width={width - 20}
      minHeight={60}
      borderRadius={16}
      bg={theme.colors.background.secondary}
      flexDirection="row"
      alignItems="center"
      px={10}
      mx={10}
    >
      <Container
        height={42}
        width={42}
        borderRadius={10}
        bg={theme.colors.toast[type]}
        alignItems="center"
        justifyContent="center"
      >
        <Icon />
      </Container>

      <Container flex={1} ml={10} py={3}>
        {text1 && (
          <Typography
            fontFamily={theme.fonts.sf600}
            fontSize="m"
            fontColor={theme.colors.font.primary}
          >
            {text1}
          </Typography>
        )}
        {text2 && (
          <Typography
            fontFamily={theme.fonts.sf400}
            fontSize="xs"
            fontColor={theme.colors.font.secondary}
          >
            {text2}
          </Typography>
        )}
      </Container>
    </Container>
  );
};

ToastComponent.propTypes = {
  type: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

/**
 * Toast component is a wrapper over https://github.com/calintamas/react-native-toast-message.
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
