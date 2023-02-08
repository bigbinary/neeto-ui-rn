import React, { useContext } from "react";

import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

import { Typography, Touchable } from "@components";

/**
 *
 * <div class="screenshots">
 *   <img src="screenshots/selectButton/selectButton.png" />
 * </div>
 *
 * This component supports below props categories from [styled-system](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>layout</li>
 * <li>color</li>
 * <li>buttonStyle</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import * as React from "react";
 * import { moderateScale } from "react-native-size-matters";
 * import { Container, SelectButton } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *  const [selected1, setSelected1] = useState(true);
 *  const [selected2, setSelected2] = useState(false);
 *
 *  return (
 *    <Container>
 *      <SelectButton
 *        mt={moderateScale(2)}
 *        selected={selected1}
 *        onSelect={() => setSelected1(prev => !prev)}
 *        label={`Button marked as ${!selected1 ? "un" : ""}selected`}
 *      />
 *      <SelectButton
 *        mt={moderateScale(3)}
 *        selected={selected2}
 *        onSelect={() => setSelected2(prev => !prev)}
 *        label={`Button marked as ${!selected2 ? "un" : ""}selected`}
 *      />
 *      <SelectButton mt={moderateScale(3)} disabled label="Disabled button" />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const SelectButton = ({
  selected,
  onSelect,
  disabled,
  label,
  selectIconStyle,
  labelStyle,
  ...rest
}) => {
  const theme = useContext(ThemeContext);

  const disabledProps = {
    labelProps: {
      opacity: 0.5,
    },
  };

  const selectedProps = {
    labelProps: {
      fontFamily: theme.fonts.sf700,
    },
  };

  const unselectedProps = {
    labelProps: {
      fontFamily: theme.fonts.sf400,
    },
  };

  return (
    <Touchable
      alignItems="center"
      disabled={disabled}
      flexDirection="row"
      py={moderateScale(8)}
      onPress={onSelect}
      {...rest}
    >
      <Typography
        color="font.primary"
        flex={1}
        fontSize="m"
        {...(selected && selectedProps.labelProps)}
        {...(!selected && unselectedProps.labelProps)}
        {...(disabled && disabledProps.labelProps)}
        {...labelStyle}
      >
        {label}
      </Typography>
      {selected && (
        <Icon
          color={theme.colors.font.primary}
          name="check-fill"
          size={moderateScale(20)}
          {...selectIconStyle}
        />
      )}
    </Touchable>
  );
};

SelectButton.propTypes = {
  /**
   * Whether the button is selected or not.
   */
  selected: PropTypes.bool.isRequired,
  /**
   * Function to execute on press.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * To disable the component.
   */
  disabled: PropTypes.bool,
  /**
   * Text label to be shown with the button.
   */
  label: PropTypes.string,
  /**
   * Customize selection icon style.
   */
  selectIconStyle: PropTypes.object,
  /**
   * Customize label style.
   */
  labelStyle: PropTypes.object,
};

SelectButton.defaultProps = {
  selected: false,
  onSelect: () => {},
};
