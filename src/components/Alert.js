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
 * <div class="screenshots">
 *   <img src="screenshots/alert/alert-1.png" />
 *   <img src="screenshots/alert/alert-2.png" />
 *   <img src="screenshots/alert/alert-3.png" />
 *   <img src="screenshots/alert/alert-4.png" />
 *   <img src="screenshots/alert/alert-5.png" />
 *   <img src="screenshots/alert/alert-6.png" />
 * </div>
 *
 *
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
      variant: "solid",
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
        padding={18}
        borderRadius={8}
      >
        <Typography fontFamily="sf600" fontSize="3xl" color="font.grey800">
          {title}
        </Typography>
        <Container alignItems="center" justifyContent="center">
          <Typography
            textAlign="center"
            py={20}
            fontFamily="sf400"
            fontSize="s"
            color="font.grey500"
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
              fontFamily="sf400"
              fontSize="m"
              borderRadius={8}
              minWidth={110}
              height={35}
              p={0}
              onPress={() => {
                button2.onPress?.();
                hide();
              }}
              label={button2.label}
              width={undefined}
              variant={button2.variant || "text"}
            />
          )}
          {button1 && (
            <Button
              fontFamily="sf400"
              fontSize="m"
              borderRadius={8}
              minWidth={110}
              onPress={() => {
                button1.onPress?.();
                hide();
              }}
              label={button1.label}
              height={35}
              p={0}
              width={undefined}
              variant={button1.variant}
            />
          )}
        </Container>
        {button3 && (
          <Button
            mt={20}
            borderWidth={1}
            fontFamily="sf400"
            fontSize="m"
            borderRadius={8}
            minWidth={110}
            onPress={() => {
              button3.onPress?.();
              hide();
            }}
            label={button3.label}
            height={35}
            p={0}
            variant={button3.variant}
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
