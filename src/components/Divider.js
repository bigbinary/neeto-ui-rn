import * as React from "react";
import { flexbox, space, color, layout } from "styled-system";
import styled from "styled-components/native";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";

/**
 *
 * Divider is a separator line that can be used between two different sections.
 *
 * <div class="screenshots">
 *   <img src="screenshots/divider/divider.png" />
 * </div>
 *
 *   ## Usage
 * ```js
 * import * as React from 'react';
 * import { Divider } from '@bigbinary/neetoui-rn';
 *
 * export default function Main(){
 *  return (
 *   <Container>
 *     <Divider orientation="vertical" thickness={1}/>
 *   </Container>
 *  );
 * }
 * ```
 *
 */

const View = styled.View`
  ${flexbox}
  ${space}
  ${color}
  ${layout}
`;

export const Divider = ({ thickness, orientation, bg, ...rest }) => {
  const isHorizontal = orientation === "horizontal";
  const lineStyles = isHorizontal
    ? {
        ...rest,
        height: thickness,
      }
    : {
        ...rest,
        width: thickness,
        flex: 1,
      };

  return <View bg={bg} {...lineStyles} />;
};

Divider.defaultProps = {
  bg: "background.grey400",
  orientation: "horizontal",
  thickness: 1,
};

Divider.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  /**
   * To specify whether the line needs to horizontal or vertical
   */
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  /**
   * To specify the thickness of divider
   */
  thickness: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * To specify the color of divider
   */
  bg: PropTypes.string,
};
