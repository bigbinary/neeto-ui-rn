import React, { forwardRef, useCallback } from "react";
import { View } from "react-native";

import PropTypes from "prop-types";

import { Typography, Touchable } from "@components";

export const Tab = forwardRef(({ label, value, navigation, flex }, ref) => {
  const handleOnPress = useCallback(
    () => navigation.navigate(value),
    [navigation, value]
  );

  return (
    <View ref={ref} style={{ flex }}>
      <Touchable flex={1} justifyContent="center" onPress={handleOnPress}>
        <Typography
          fontFamily="sf500"
          fontSize="xs"
          numberOfLines={1}
          textAlign="center"
        >
          {label}
        </Typography>
      </Touchable>
    </View>
  );
});

Tab.displayName = "Tab";

Tab.propTypes = {
  flex: PropTypes.number,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  navigation: PropTypes.object,
};
