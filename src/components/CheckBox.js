import React from "react";
import Proptypes from "prop-types";

import { Container, Typography, Touchable } from "@components";

export const CheckBox = ({
  checked = false,
  onCheck = () => {},
  checkedComponent = null,
  containerStyle = {},
  checkedItemStyle = {},
}) => {
  return (
    <Touchable
      onPress={onCheck}
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
      {checked && (
        <Container>
          {checkedComponent || <Typography {...checkedItemStyle}>✓</Typography>}
        </Container>
      )}
    </Touchable>
  );
};

CheckBox.propTypes = {
  checked: Proptypes.bool.isRequired,
  onCheck: Proptypes.func.isRequired,
  checkedComponent: Proptypes.element,
  containerStyle: Proptypes.object,
  checkedItemStyle: Proptypes.object,
};
