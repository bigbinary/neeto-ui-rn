import React from "react";
import Proptypes from "prop-types";

import { Container, Typography, Touchable } from "@components";

export const CheckBox = ({
  selected = false,
  onSelect = () => {},
  checkedComponent = null,
  containerStyle = {},
  checkedItemStyle = {},
}) => {
  return (
    <Touchable
      onPress={onSelect}
      borderColor="background.base"
      borderWidth={1}
      borderRadius={5}
      justifyContent="center"
      alignItems="center"
      width={20}
      height={20}
      mr={2}
      {...containerStyle}
    >
      {selected && (
        <Container>
          {checkedComponent || <Typography {...checkedItemStyle}>✓</Typography>}
        </Container>
      )}
    </Touchable>
  );
};

CheckBox.propTypes = {
  selected: Proptypes.bool.isRequired,
  onSelect: Proptypes.func.isRequired,
  checkedComponent: Proptypes.element,
  containerStyle: Proptypes.object,
  checkedItemStyle: Proptypes.object,
};
