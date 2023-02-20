import React from "react";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";

import { Touchable } from "@components";

export const IconButton = ({ Icon, ...rest }) => (
  <Touchable
    alignItems="center"
    height={moderateScale(22)}
    px={moderateScale(18)}
    width={moderateScale(22)}
    {...rest}
  >
    {<Icon />}
  </Touchable>
);

IconButton.propTypes = {
  Icon: PropTypes.elementType,
};
