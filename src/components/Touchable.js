import * as React from "react";
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import Ripple from "react-native-material-ripple";
import styled from "styled-components/native";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  color,
  layout,
} from "styled-system";

const StyledRipple = styled(Ripple)`
  ${buttonStyle}
  ${flexbox}
  ${space}
  ${border}
  ${layout}
  ${color}
`;

/**
 * Touchable component is a wrapper over https://github.com/n4kz/react-native-material-ripple.
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>layout</li>
 * <li>color</li>
 * <li>buttonStyle</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Touchable, Typography } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *     <Touchable
 *       bg="background.primary"
 *       width="100px"
 *       height="30px"
 *       rippleOpacity = {0.09}
 *       rippleDuration = {600}
 *       rippleContainerBorderRadius = {50}
 *     >
 *       <Typography fontSize="10px">This is wrapped in Touchable component</Typography>
 *     </Touchable>
 *  );
 * }
 * ```
 *
 */

export const Touchable = ({ children, ...rest }) => {
  return (
    <StyledRipple
      rippleOpacity={0.09}
      rippleDuration={600}
      rippleContainerBorderRadius={rest.borderRadius ? rest.borderRadius : 0}
      {...rest}
    >
      {children}
    </StyledRipple>
  );
};

Touchable.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.buttonStyle,

  children: PropTypes.node,
};
