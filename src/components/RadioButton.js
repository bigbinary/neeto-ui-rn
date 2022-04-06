import React from "react";
import PropTypes from "prop-types";

import { Container, Touchable, Typography } from "@components";

export const RadioButton = ({
  outerWidth = 20,
  innerWidth = 10,
  containerBg = "background.grey",
  innerActiveBg = "background.base",
  innerInActiveBg = "background.secondary",
  onSelect = () => {},
  selected = null,
  value,
  innerOuterCircleDelta = 5,
  label = "Option",
  labelComponent = null,
  labelProp = {},
  containerProp = {},
}) => {
  return (
    <Container flexDirection="row" {...containerProp}>
      <Touchable
        height={outerWidth}
        width={outerWidth}
        onPress={() => onSelect(value)}
      >
        <Container
          bg={containerBg}
          height={outerWidth}
          width={outerWidth}
          borderRadius={outerWidth / 2}
          justifyContent="center"
          alignItems="center"
        >
          <Container
            height={innerWidth + innerOuterCircleDelta}
            width={innerWidth + innerOuterCircleDelta}
            borderRadius={(innerWidth + innerOuterCircleDelta) / 2}
            bg="background.white"
            justifyContent="center"
            alignItems="center"
          >
            <Container
              bg={selected ? innerActiveBg : innerInActiveBg}
              height={innerWidth}
              width={innerWidth}
              borderRadius={innerWidth / 2}
              m={1}
            />
          </Container>
        </Container>
      </Touchable>
      {labelComponent || (
        <Typography ml={2} {...labelProp}>
          {label}
        </Typography>
      )}
    </Container>
  );
};

RadioButton.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  outerWidth: PropTypes.number,
  innerWidth: PropTypes.number,
  containerBg: PropTypes.string,
  innerActiveBg: PropTypes.string,
  innerInActiveBg: PropTypes.string,
  innerOuterCircleDelta: PropTypes.number,
  label: PropTypes.string,
  labelComponent: PropTypes.element,
  labelProp: PropTypes.object,
  containerProp: PropTypes.object,
};
