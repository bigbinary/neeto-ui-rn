import * as React from "react";
import { flexbox, space, border, color, layout } from "styled-system";
import styled from "styled-components/native";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";

const View = styled.View`
  ${flexbox}
  ${space}
  ${border}
  ${color}
  ${layout}
`;

export const Container = ({ children, ...rest }) => {
  return <View {...rest}>{children}</View>;
};

Container.defaultProps = {
  color: "background.primary",
};

Container.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  children: PropTypes.node,
};
