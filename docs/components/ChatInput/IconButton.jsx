import React, { useContext } from "react";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

import { Touchable } from "@components";

export const IconButton = ({ Icon, iconProps, ...rest }) => {
  const theme = useContext(ThemeContext);

  return (
    <Touchable
      alignItems="center"
      height={moderateScale(22)}
      px={moderateScale(18)}
      width={moderateScale(22)}
      {...rest}
    >
      {
        <Icon
          color={theme.colors.font.grey800}
          size={moderateScale(22)}
          {...iconProps}
        />
      }
    </Touchable>
  );
};

IconButton.propTypes = {
  Icon: PropTypes.elementType,
  iconProps: PropTypes.object,
};
