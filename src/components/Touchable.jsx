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
 * Touchable component is a wrapper over Ripple.
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
 *       rippleConfig={{
 *          opacity: 0.09,
 *          duration: 600,
 *          containerBorderRadius: moderateScale(50),
 *       }}
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

  const rippleProps = {
    rippleCentered: rippleConfig.isCentered,
    rippleSequential: rippleConfig.isSequential,
    rippleFades: rippleConfig.shouldFade,
    rippleOutsideContainer: rippleConfig.shouldOverflowContainer,
    rippleColor: rippleConfig.color,
    rippleOpacity: rippleConfig.opacity,
    rippleDuration: rippleConfig.duration,
    rippleSize: rippleConfig.size,
    rippleContainerBorderRadius: rest.borderRadius ? rest.borderRadius : 0,
  };

  return (
    <StyledRipple ref={ref} style={shadowStyles} {...rippleProps} {...rest}>
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

  children: PropTypes.node.isRequired,
  elevation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rippleConfig: PropTypes.shape({
    isCentered: PropTypes.bool,
    isSequential: PropTypes.bool,
    shouldFade: PropTypes.bool,
    shouldOverflowContainer: PropTypes.bool,
    color: PropTypes.string,
    opacity: PropTypes.number,
    duration: PropTypes.number,
    size: PropTypes.number,
    containerBorderRadius: PropTypes.number,
  }),
};

Touchable.defaultProps = {
  rippleConfig: {
    isCentered: false,
    isSequential: false,
    shouldFade: true,
    shouldOverflowContainer: false,
    color: "#000",
    opacity: 0.09,
    duration: 600,
    size: 0,
    containerBorderRadius: 0,
  },
};

Touchable.displayName = "Touchable";
