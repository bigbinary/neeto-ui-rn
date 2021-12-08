import * as React from "react";
import PropTypes from "prop-types";
import { space, border, color, layout, flexbox } from "styled-system";
import styled from "styled-components/native";
import Icon from "react-native-remix-icon";

import { Typography } from "@components";

export const TouchableOpacity = styled.TouchableOpacity`
  ${space}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
`;

const variantStyleObj = {
  solid: {
    bg: "background.grey200",
  },
  outlined: {
    bg: "background.white",
    border: "1px solid",
    borderColor: "border.grey400",
  },
};

export const Chip = ({
  label,
  LeftIcon,
  variant,
  labelColor,
  closeIconBackground,
  closeIconColor,
  onClose,
  onChipPress,
  isDisabled,
  ...rest
}) => {
  return (
    <TouchableOpacity
      flexDirection="row"
      p={2}
      borderRadius={20}
      alignItems="center"
      onPress={onChipPress}
      disabled={!onChipPress || isDisabled}
      {...(variant && variantStyleObj[variant])}
      {...(isDisabled && { opacity: 0.5 })}
      {...rest.containerStyle}
    >
      {LeftIcon && <LeftIcon />}
      <Typography mx={2} fontFamily="inter400" color={labelColor}>
        {label}
      </Typography>
      {onClose && (
        <TouchableOpacity
          bg={closeIconBackground}
          borderRadius={10}
          disabled={isDisabled}
          onPress={onClose}
          {...rest.closeIconContainerStyle}
        >
          <Icon name="ri-close-fill" size="14" color={closeIconColor} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

Chip.defaultProps = {
  variant: "outlined",
  labelColor: "font.primary",
  closeIconBackground: "background.grey500",
  closeIconColor: "white",
  isDisabled: false,
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  LeftIcon: PropTypes.elementType,
  variant: PropTypes.string,
  labelColor: PropTypes.string,
  closeIconBackground: PropTypes.string,
  closeIconColor: PropTypes.string,
  onClose: PropTypes.func,
  onChipPress: PropTypes.func,
  isDisabled: PropTypes.bool,
};
