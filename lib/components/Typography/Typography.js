import * as React from "react";
import styled from "styled-components/native";
import { space, layout, typography, color, textStyle } from "styled-system";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";

export const Text = styled.Text`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${textStyle}
`;

// @component-group Typography Components

/**
 * Typography component is a primitive text component built on top of styled-system.
 *
 * This component supports below props categories from [styled-system ](/styled-system)
 *
 * <ul>
 * <li>space</li>
 * <li>layout</li>
 * <li>typography</li>
 * <li>color</li>
 * <li>textStyle</li>
 * </ul>
 *
 * <div class="screenshots">
 *   <img src="screenshots/typography-all.png" />
 *   <img src="screenshots/typography-colors.png" />
 *   <img src="screenshots/typography-fonts.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Typography, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Typography>
 *         This is basic example of Typography
 *      </Typography>
 *     </Container>
 *  );
 * }
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Typography = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};

Typography.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.color,
  ...propTypes.textStyle,
  children: PropTypes.node.isRequired,
};

Typography.defaultProps = {
  color: "font.primary",
};
