import * as React from "react";
import { flexbox, space, color, layout } from "styled-system";
import styled from "styled-components/native";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";

/**
 *
 * Divider is a separator line that can be used between two different sections.
 *
 *   ## Usage
 * ```js
 * import * as React from 'react';
 * import { Divider } from '@bigbinary/neetoui-rn';
 *
 * export default function Main(){
 *  return (
 *   <Container>
 *     <Divider flex={1} height={1}/>
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

export const Divider = ({ ...rest }) => {
  return <View {...rest} />;
};

Divider.defaultProps = {
  color: "background.grey400",
};

Divider.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  /**
   * To specify the height of the divider line
   */
  height: PropTypes.number,
  /**
   * To specify the width of the divider line
   */
  width: PropTypes.number,
};
