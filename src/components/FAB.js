import * as React from "react";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  color,
  layout,
} from "styled-system";
import styled from "styled-components/native";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";

export const TouchableOpacity = styled.TouchableOpacity`
  ${buttonStyle}
  ${flexbox}
  ${space}
  ${border}
  ${layout}
  ${color}
`;

/**
 * FAB component is a floating action button which represents the primary action in an application and is built on top of styled-system.
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 *
 * <ul>
 * <li>space</li>
 * <li>layout</li>
 * <li>flexbox</li>
 * <li>color</li>
 * <li>textStyle</li>
 * <li>buttonStyle</li>
 * </ul>
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab/buttonstyles.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { FAB, Container, Typography } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *        <FAB
 *          Icon={() => {
 *            return <Typography>🔔</Typography>;
 *          }}
 *        />
 *     </Container>
 *  );
 * }
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const FAB = ({ Icon, bg, disabled, ...rest }) => {
  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  let style = rest.style || {};
  if (disabled) {
    style = { ...style, opacity: 0.5 };
  }
  return (
    <TouchableOpacity
      bg={bg}
      disabled={disabled}
      {...rest}
      style={[style, shadowStyle]}
    >
      <Icon />
    </TouchableOpacity>
  );
};

FAB.defaultProps = {
  variant: "solid",
  size: 56,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 28,
};

FAB.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  Icon: PropTypes.elementType.isRequired,
};
