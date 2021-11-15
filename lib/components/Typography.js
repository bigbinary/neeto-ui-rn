import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

// const STYLES = {
//   h1: "h1",
//   h2: "h2",
//   h3: "h3",
//   h4: "h4",
//   h5: "h5",
//   h6: "h6",
//   body1: "body1",
//   body2: "body2",
//   body3: "body3",
// };

export const Typography = ({ label }) => {
  return <Text>{label}</Text>;
};

Typography.propTypes = {
  label: PropTypes.string,
};
