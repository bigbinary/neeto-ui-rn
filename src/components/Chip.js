import * as React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

import { Typography, Touchable } from "@components";

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

/**
 *
 * Chips are compact elements that represent an input, attribute, or action.
 *
 * <div class="screenshots">
 *   <img src="screenshots/chip/chip.png" />
 * </div>
 *
 *   ## Usage
 * ```js
 * import * as React from 'react';
 * import { Chip, Container, Typography } from '@bigbinary/neetoui-rn';
 *
 * export default function Main(){
 *  return (
 *   <Container>
 *     <Chip
 *      label="Outlined Chip"
 *      LeftIcon={() => <Typography>📣</Typography>}
 *      variant="outlined"
 *      onChipPress={() => {
 *       alert("Chip pressed");
 *      }}
 *      onClose={() => {
 *        alert("On Close clicked");
 *       }}
 *    />
 *   </Container>
 *  );
 * }
 * ```
 *
 */

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
  closeIconSize,
  closeIcon,
  ...rest
}) => {
  return (
    <Touchable
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
      <Typography mx={2} fontFamily="SFProText400" color={labelColor}>
        {label}
      </Typography>
      {onClose && (
        <Touchable
          bg={closeIconBackground}
          borderRadius={10}
          disabled={isDisabled}
          onPress={onClose}
          {...rest.closeIconContainerStyle}
        >
          <Icon name={closeIcon} size={closeIconSize} color={closeIconColor} />
        </Touchable>
      )}
    </Touchable>
  );
};

Chip.defaultProps = {
  variant: "outlined",
  labelColor: "font.primary",
  closeIconBackground: "background.grey500",
  closeIconColor: "white",
  isDisabled: false,
  closeIconSize: 14,
  closeIcon: "ri-close-fill",
};

Chip.propTypes = {
  /**
   * Takes the text that needs to be displayed inside the chip.
   */
  label: PropTypes.string.isRequired,
  /**
   * Expects a component. Used to set left Icon or Avatar.
   */
  LeftIcon: PropTypes.elementType,
  /**
   * Supported variant: 'outlined' | 'solid'
   */
  variant: PropTypes.string,
  /**
   * Sets chip text color.
   */
  labelColor: PropTypes.string,
  /**
   * Sets close Icon background color.
   */
  closeIconBackground: PropTypes.string,
  /**
   * Sets close Icon color.
   */
  closeIconColor: PropTypes.string,
  /**
   * Expects a function to execute on close icon press. The close icon appears only when the onClose prop is specified.
   */
  onClose: PropTypes.func,
  /**
   * Used to set the size of the close icon.
   */
  closeIconSize: PropTypes.number,
  /**
   * Close icon name can be specified if default one needs to changed. Only supports remixIcons.
   */
  closeIcon: PropTypes.string,
  /**
   * Expects a function to execute on chip press.
   */
  onChipPress: PropTypes.func,
  /**
   * Whether the chip is disabled. A disabled chip has a overlay and onPress is not called on touch.
   */
  isDisabled: PropTypes.bool,
};
