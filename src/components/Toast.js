import * as React from "react";
import PropTypes from "prop-types";
import T from "react-native-toast-message";
import { defaultToasterConfig } from "@config";

/**
 * Tost component is a wrapper over https://github.com/calintamas/react-native-toast-message.
 *
 *  ## Usage
 * ```js
 * import {Toast} from '@bigbinary/neetoui-rn';
 *
 * export function App(props) {
 *  return (
 *  <>
 *    // Render at root component.
 *    <Toast />
 *  </>
 * );
 * }
 *
 * import * as React from 'react';
 * import { Toast, Container, Button } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *        <Button
 *          label="Error Test"
 *          onPress={() => {
 *            Toast.show({
 *            type: "error",
 *            position: "bottom",
 *            text1: "Yay!",
 *            text2: "Have a nice day! 😄",
 *         });
 *       }}
 *     />
 *     </Container>
 *  );
 * }
 * ```
 * @extends StyledSystems props /styled-system
 */

export const Toast = ({ toasterConfig, ...rest }) => {
  return <T {...rest} config={{ ...defaultToasterConfig, ...toasterConfig }} />;
};

Toast.show = T.show;
Toast.hide = T.hide;

Toast.propTypes = {
  /**
   * configuration
   */
  toasterConfig: PropTypes.object,
};
