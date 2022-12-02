import React, { useContext } from "react";

import Proptypes from "prop-types";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

import { Container, Typography, Touchable } from "@components";

/**
 *
 * <div class="screenshots">
 *   <img src="screenshots/radioButton/radioButton.png" />
 * </div>
 *
 * This component supports below props categories from [styled-system ](/styled-system).
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
import { moderateScale } from "react-native-size-matters";

 * import { Container, RadioButton } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *  const [selected1, setSelected1] = useState(true);
 *  const [selected2, setSelected2] = useState(false);
 *
 *  return (
 *    <Container>
 *      <RadioButton
 *        mt={moderateScale(2)}
 *        selected={selected1}
 *        onSelect={() => setSelected1(prev => !prev)}
 *        label={`Radio button marked as ${!selected1 ? "un" : ""}selected`}
 *      />
 *      <RadioButton
 *        mt={moderateScale(3)}
 *        selected={selected2}
 *        onSelect={() => setSelected2(prev => !prev)}
 *        label={`Radio button marked as ${!selected2 ? "un" : ""}selected`}
 *      />
 *      <RadioButton mt={moderateScale(3)} disabled label="Disabled Radio button" />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const RadioButton = ({
  selected,
  onSelect,
  disabled,
  label,
  radioButtonStyle,
  labelStyle,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const disabledProps = {
    borderColor: theme.colors.border.secondary,
    labelProps: {
      color: theme.colors.font.grey400,
    },
  };

  const selectedProps = {
    borderWidth: moderateScale(4),
    borderColor: theme.colors.background.base,
    labelProps: {
      fontFamily: theme.fonts.sf500,
      color: theme.colors.font.primary,
    },
  };

  const unselectedProps = {
    borderWidth: moderateScale(2),
    borderColor: theme.colors.border.secondary,
    labelProps: {
      fontFamily: theme.fonts.sf400,
      color: theme.colors.font.secondary,
    },
  };

  return (
    <Touchable
      alignItems="center"
      disabled={disabled}
      flexDirection="row"
      onPress={onSelect}
      {...rest}
    >
      <Container
        bg={theme.colors.background.white}
        borderRadius={moderateScale(8)}
        height={moderateScale(16)}
        width={moderateScale(16)}
        {...(selected && selectedProps)}
        {...(!selected && unselectedProps)}
        {...(disabled && disabledProps)}
        {...radioButtonStyle}
      />
      <Typography
        flex={1}
        fontSize="m"
        ml={moderateScale(2)}
        {...(selected && selectedProps.labelProps)}
        {...(!selected && unselectedProps.labelProps)}
        {...(disabled && disabledProps.labelProps)}
        {...labelStyle}
      >
        {label}
      </Typography>
    </Touchable>
  );
};

RadioButton.propTypes = {
  /**
   * Whether radio button is selected or not.
   */
  selected: Proptypes.bool.isRequired,
  /**
   * Function to execute on press.
   */
  onSelect: Proptypes.func.isRequired,
  /**
   * To disable the component.
   */
  disabled: Proptypes.bool,
  /**
   * Text label to be shown with radio button.
   */
  label: Proptypes.string,
  /**
   * Customize radio button style.
   */
  radioButtonStyle: Proptypes.object,
  /**
   * Customize label style.
   */
  labelStyle: Proptypes.object,
};

RadioButton.defaultProps = {
  selected: false,
  onSelect: () => {},
};
