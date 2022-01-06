import * as React from "react";
import { Container } from "@components";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

/**
 * This component is wrapper over Container component.
 * This component supports below props categories from [styled-system ](/styled-system).
 *
 *
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>color</li>
 * <li>layout</li>
 * </ul>
 *
 * <div class="screenshots">
 *   <img src="screenshots/card/shadows.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Typography } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *     <Card height="100px" width="100px" bg="background.danger" elevation={8}>
 *       <Typography fontSize="14px">Card</Typography>
 *     </Card>
 *  );
 * }
 * ```
 *
 */

export const Card = ({ children, elevation, ...rest }) => {
  const shadowRadiusList = [
    1, 1.41, 2.22, 2.62, 3.84, 4.65, 4.65, 4.65, 5.46, 6.27, 6.68, 7.49, 8.3,
    9.11, 9.51, 10.32, 11.14, 11.95, 12.35, 13.16, 13.97, 14.78, 15.19, 16,
  ];

  const shadowOpacityList = [
    0.18, 0.2, 0.22, 0.23, 0.25, 0.27, 0.29, 0.3, 0.32, 0.34, 0.36, 0.37, 0.39,
    0.41, 0.43, 0.44, 0.46, 0.48, 0.5, 0.51, 0.53, 0.55, 0.57, 0.58,
  ];

  const getShadowStyles = (elevation = 0) => {
    return {
      shadowOffset: {
        width: 0,
        height: Math.floor(elevation / 2),
      },
      shadowRadius: shadowRadiusList[elevation - 1],
      shadowOpacity: shadowOpacityList[elevation - 1],
      elevation: elevation,
    };
  };

  const shadowStyles = getShadowStyles(elevation);

  const cardStyles = { ...styles.defaultShadows, ...shadowStyles };
  return (
    <Container style={cardStyles} {...rest}>
      {children}
    </Container>
  );
};

Card.propTypes = {
  /**
   * To change the shadow styles based on elevation.
   * Valid elevation values (0-21).
   */
  elevation: PropTypes.number,
  children: PropTypes.node,
};

export const styles = StyleSheet.create({
  defaultShadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
