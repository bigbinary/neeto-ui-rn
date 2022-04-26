import * as React from "react";
import { flexbox, space, color, layout } from "styled-system";
import styled from "styled-components/native";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";

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
  children: PropTypes.node,
};
