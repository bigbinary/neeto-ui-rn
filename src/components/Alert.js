import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";

import { Typography, Container, Button } from "@components";

const useAlertHook = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [params, setParams] = useState({});

  const {
    title = "",
    description = "",
    isCancelable = true,
    onDismiss,
    buttons = [],
  } = params;

  const show = React.useCallback(params => {
    setParams(params);
    setIsVisible(true);
  }, []);

  const hide = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const hideOnBackPressDrop = React.useCallback(() => {
    if (isCancelable) {
      hide();
    }
    if (onDismiss && isCancelable) {
      onDismiss();
    }
  }, [hide, isCancelable, onDismiss]);

  return {
    isVisible,
    show,
    hide,
    hideOnBackPressDrop,
    title,
    description,
    isCancelable,
    buttons,
  };
};

let rootLevelRef = null;
/**
 * Launches an alert dialog with the specified title and message.
 * Optionally provide a list of buttons.
 * Tapping any button will fire the respective onPress callback and dismiss the alert.
 * By default, the only button will be an 'OK' button.
 *  ## Usage
 * ```js
 *import * as React from "react";
 *import { Alert } from "@bigbinary/neetoui-rn";
 *export function App(props) {
 *  return (
 *    <>
 *      // Render at root component.
 *      <Alert />
 *    </>
 *  );
 *}
 *
 *import * as React from "react";
 *import { Alert, Button } from "@bigbinary/neetoui-rn";
 *
 *export default function Main() {
 *  return (
 *    <Button
 *      width={200}
 *      my={10}
 *      label="Three Buttons"
 *      onPress={() => {
 *        Alert.show({
 *          title: "Enjoying our app ?",
 *          description: "Do you wannna rate us on app store ?",
 *          buttons: [
 *            {
 *              label: "Yay!",
 *              onPress: () => {},
 *            },
 *            {
 *              label: "No",
 *              onPress: () => {},
 *            },
 *            {
 *              label: "Ask me later",
 *              onPress: () => {},
 *            },
 *          ],
 *          isCancelable: false,
 *          onDismiss: () => {},
 *        });
 *      }}
 *    />
 *  );
 *}
 *
 * ```
 */
export const Alert = () => {
  const {
    isVisible,
    show,
    hide,
    buttons,
    hideOnBackPressDrop,
    title,
    description,
  } = useAlertHook();

  const [
    button1 = {
      label: "OK",
      onPress: () => {},
    },
    button2,
    button3,
  ] = buttons;

  const ref = React.useRef(null);

  React.useImperativeHandle(
    ref,
    React.useCallback(
      () => ({
        show,
      }),
      [show]
    )
  );

  React.useEffect(() => {
    rootLevelRef = ref.current;
  }, [ref]);

  return (
    <Modal
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      style={styles.modalStyle}
      isVisible={isVisible}
      onBackdropPress={hideOnBackPressDrop}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <Container
        bg="background.primary"
        justifyContent="center"
        alignItems="center"
        width="90%"
        padding={20}
        borderRadius={20}
      >
        <Typography fontFamily="inter700" fontSize="l" color="font.grey800">
          {title}
        </Typography>
        <Container alignItems="center" justifyContent="center">
          <Typography
            textAlign="center"
            py={20}
            fontFamily="inter400"
            fontSize="l"
            color="font.grey600"
          >
            {description}
          </Typography>
        </Container>

        <Container
          flexDirection="row"
          width="100%"
          justifyContent="space-around"
        >
          {button2 && (
            <Button
              borderWidth={1}
              variant="inverse"
              fontFamily="inter400"
              fontSize="m"
              borderRadius={50}
              minWidth={110}
              height={35}
              p={0}
              onPress={() => {
                button2.onPress?.();
                hide();
              }}
              label={button2.label}
            />
          )}
          {button1 && (
            <Button
              fontFamily="inter400"
              fontSize="m"
              borderRadius={50}
              minWidth={110}
              onPress={() => {
                button1.onPress?.();
                hide();
              }}
              label={button1.label}
              height={35}
              p={0}
            />
          )}
        </Container>
        {button3 && (
          <Button
            mt={20}
            borderWidth={1}
            variant="inverse"
            fontFamily="inter400"
            fontSize="m"
            borderRadius={50}
            minWidth={110}
            onPress={() => {
              button3.onPress?.();
              hide();
            }}
            label={button3.label}
            height={35}
            p={0}
          />
        )}
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});

Alert.show = params => {
  rootLevelRef.show(params);
};
