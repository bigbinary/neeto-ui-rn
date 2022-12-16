import * as React from "react";

import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  color,
  layout,
} from "styled-system";

import Ripple from "./Ripple";

import { getShadowStyles } from "../utils/utils";

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
 *       rippleContainerBorderRadius = {moderateScale(50)}
 *     >
 *       <Typography fontSize="10px">This is wrapped in Touchable component</Typography>
 *     </Touchable>
 *  );
 * }
 * ```
 *
 */

export const Touchable = React.forwardRef((props, ref) => {
  const { children, elevation, rippleConfig, ...rest } = props;
  const shadowStyles = elevation ? getShadowStyles(elevation) : {};

  return (
    <StyledRipple ref={ref} style={shadowStyles} {...rest} {...rippleConfig}>
      {children}
    </StyledRipple>
  );
});

Touchable.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.buttonStyle,

  children: PropTypes.node,
  elevation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rippleConfig: Ripple.propTypes,
};

Touchable.displayName = "Touchable";
