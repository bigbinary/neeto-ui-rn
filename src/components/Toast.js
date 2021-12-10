import * as React from "react";
import PropTypes from "prop-types";
import T from "react-native-toast-message";

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
 *    // Render at root level.
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
 *            text2: "This is the toast message",
 *         });
 *       }}
 *     />
 *     </Container>
 *  );
 * }
 * ```
 * @extends StyledSystems props /styled-system
 */

export const Toast = ({ ...rest }) => {
  return <T {...rest} />;
};

Toast.defaultProps = {
  position: "bottom",
  type: "success",
};

Toast.propTypes = {
  /**
   * First line of text
   */
  text1: PropTypes.string.isRequired,
  /**
   * Second line of text
   */
  text2: PropTypes.string,
  /**
   * Supports 3 Types: `success`, `error`, `info`
   */
  type: PropTypes.string,
  /**
   *  Supports 2 Positions: `bottom`, `top`
   */
  position: PropTypes.string,
};
