import * as React from "react";
import { Platform } from "react-native"; // Added Platform import for Android-specific fixes

import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import {
  space,
  layout,
  flexbox,
  typography,
  color,
  textStyle,
  position,
  system,
} from "styled-system";

// Enhanced Text component with Android-specific fixes
export const Text = styled.Text`
  ${textStyle}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${color}
  ${position}
  ${system({
    textDecoration: {
      property: "textDecoration",
      cssProperty: "textDecoration",
    },
    textTransform: { property: "textTransform", cssProperty: "textTransform" },
  })}

  /* Android-specific fixes for text rendering */
  /* 1. Disable default font padding on Android to prevent descender clipping */
  /* 2. Ensure text is vertically centered */
  /* 3. Ensure proper line height for descenders */
  ${Platform.select({
    android: `
      include-font-padding: false;
      text-align-vertical: center;
      line-height: ${props => {
        const fontSize = props.fontSize || 16;

        return `${Math.floor(fontSize * 1.3)}px`;
      }};
    `,
    ios: "",
  })}
`;

/**
 * Typography component is a primitive text component which is built on top of styled-system.
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 *
 * <ul>
 * <li>space</li>
 * <li>layout</li>
 * <li>flexbox</li>
 * <li>typography</li>
 * <li>color</li>
 * <li>textStyle</li>
 * </ul>
 *
 * <div class="screenshots">
 *   <img src="screenshots/typography/colors.png" />
 *   <img src="screenshots/typography/fontfamilies.png" />
 * </div>
 *
 * <div class="screenshots">
 *   <img src="screenshots/typography/fontsizes.png" />
 *   <img src="screenshots/typography/textstyles.png" />
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

export const Typography = ({
  children,
  lineHeightMultiplier = 1.3, // New prop to control line height
  ...rest
}) => (
  <Text
    {...rest}
    // Android-specific text rendering properties
    android_hyphenationFrequency="full"
    textBreakStrategy="simple"
    style={[
      // Dynamic line height calculation for Android
      Platform.OS === "android" && {
        lineHeight: Math.floor((rest.fontSize || 16) * lineHeightMultiplier),
      },
      rest.style,
    ]}
  >
    {children}
  </Text>
);

Typography.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.typography,
  ...propTypes.color,
  ...propTypes.textStyle,
  children: PropTypes.node,
  // New prop type for line height control
  lineHeightMultiplier: PropTypes.number,
};

Typography.defaultProps = {
  textStyle: "defaultTextStyle",
  // Default value for line height multiplier
  lineHeightMultiplier: 1.3,
};
