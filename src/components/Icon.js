import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "@components";
import * as CustomIcon from "@src/icons";

export const Icon = ({ name, size, color, ...rest }) => {
  const IconName = name.startsWith("ri-") ? name.substring(3) : name;
  const iconComponentName = IconName.split("-")
    .map(s => s[0].toUpperCase() + s.substr(1))
    .join("");
  const Component = CustomIcon[iconComponentName];

  return Component ? (
    <Component {...rest} fill={color} width={size} height={size} />
  ) : (
    <Typography>Invalid Icon Name</Typography>
  );
};

Icon.defaultProps = {
  name: "remixicon-fill",
  size: 20,
  color: "grey",
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
