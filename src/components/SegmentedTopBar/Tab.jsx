import React, { forwardRef, useCallback } from "react";
import { Pressable } from "react-native";

import PropTypes from "prop-types";

import { Typography } from "@components";

export const Tab = forwardRef(({ label, value, navigation, ...rest }, ref) => {
  const handleOnPress = useCallback(
    () => navigation.navigate(value),
    [navigation, value]
  );

  return (
    <Pressable
      justifyContent="center"
      ref={ref}
      onPress={handleOnPress}
      {...rest}
    >
      <Typography
        fontFamily="sf500"
        fontSize="xs"
        numberOfLines={1}
        textAlign="center"
      >
        {label}
      </Typography>
    </Pressable>
  );
});

Tab.displayName = "Tab";

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  navigation: PropTypes.object,
};
