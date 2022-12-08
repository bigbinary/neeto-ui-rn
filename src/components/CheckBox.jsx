import React, { useContext } from "react";

import Proptypes from "prop-types";
import Icon from "react-native-remix-icon";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

import { Container, Typography, Touchable } from "@components";

/**
 *
 * <div class="screenshots">
 *   <img src="screenshots/checkbox/checkbox.png" />
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
 * import { moderateScale } from "react-native-size-matters";
 * import { Container, CheckBox } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *  const [checked, setChecked] = useState(true);
 *
 *  return (
 *    <Container>
 *      <CheckBox
 *        mt={moderateScale(2)}
 *        checked={checked1}
 *        onSelect={() => setChecked1(prev => !prev)}
 *        label={`Checkbox marked as ${!checked1 ? "un" : ""}checked`}
 *      />
 *      <CheckBox
 *        mt={moderateScale(3)}
 *        checked={checked2}
 *        onSelect={() => setChecked2(prev => !prev)}
 *        label={`Checkbox marked as ${!checked2 ? "un" : ""}checked`}
 *      />
 *      <CheckBox mt={moderateScale(3)} disabled label="Disabled checkbox" />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const CheckBox = ({
  checked,
  onSelect,
  disabled,
  label,
  checkboxStyle,
  checkIconStyle,
  labelStyle,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const disabledProps = {
    bg: theme.colors.background[checked ? "grey400" : "white"],
    labelProps: {
      color: theme.colors.font.grey400,
    },
  };

  const checkedProps = {
    bg: theme.colors.background.base,
    labelProps: {
      fontFamily: theme.fonts.sf500,
      color: theme.colors.font.primary,
    },
  };

  const unCheckedProps = {
    bg: theme.colors.background.white,
    borderWidth: moderateScale(1),
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
      flexShrink={1}
      onPress={onSelect}
      {...rest}
    >
      <Container
        alignItems="center"
        borderRadius={moderateScale(3)}
        height={moderateScale(16)}
        justifyContent="center"
        width={moderateScale(16)}
        {...(!checked && unCheckedProps)}
        {...(checked && checkedProps)}
        {...(disabled && disabledProps)}
        {...checkboxStyle}
      >
        {checked && (
          <Icon
            color={theme.colors.font.white}
            name="ri-check-line"
            size={moderateScale(14)}
            {...checkIconStyle}
          />
        )}
      </Container>
      <Typography
        flex={1}
        fontSize="m"
        ml={moderateScale(8)}
        {...(checked && checkedProps.labelProps)}
        {...(!checked && unCheckedProps.labelProps)}
        {...(disabled && disabledProps.labelProps)}
        {...labelStyle}
      >
        {label}
      </Typography>
    </Touchable>
  );
};

CheckBox.propTypes = {
  /**
   * Whether checkbox is checked or not.
   */
  checked: Proptypes.bool.isRequired,
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
   * Customize checkbox style.
   */
  checkboxStyle: Proptypes.object,
  /**
   * Customize check icon style.
   */
  checkIconStyle: Proptypes.object,
  /**
   * Customize label style.
   */
  labelStyle: Proptypes.object,
};

CheckBox.defaultProps = {
  checked: false,
  onSelect: () => {},
};
