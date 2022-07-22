import React, { useContext } from "react";
import Proptypes from "prop-types";
import Icon from "react-native-remix-icon";
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
 * import { Container, CheckBox } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *  const [checked, setChecked] = useState(true);
 *
 *  return (
 *    <Container>
 *      <CheckBox
 *        mt={2}
 *        checked={checked1}
 *        onSelect={() => setChecked1(prev => !prev)}
 *        label={`Checkbox marked as ${!checked1 ? "un" : ""}checked`}
 *      />
 *      <CheckBox
 *        mt={3}
 *        checked={checked2}
 *        onSelect={() => setChecked2(prev => !prev)}
 *        label={`Checkbox marked as ${!checked2 ? "un" : ""}checked`}
 *      />
 *      <CheckBox mt={3} disabled label="Disabled checkbox" />
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
    labelProps: {
      color: theme.colors.font.grey400,
    },
  };
  const checkedProps = {
    bg: theme.colors.background.base,
    labelProps: {
      fontFamily: theme.fonts.SFProText500,
      color: theme.colors.font.primary,
    },
  };
  const unCheckedProps = {
    bg: theme.colors.background.white,
    borderWidth: 1,
    borderColor: theme.colors.border.secondary,
    labelProps: {
      fontFamily: theme.fonts.SFProText400,
      color: theme.colors.font.secondary,
    },
  };
  return (
    <Touchable
      disabled={disabled}
      onPress={onSelect}
      flexDirection="row"
      alignItems="center"
      {...rest}
    >
      <Container
        height={16}
        width={16}
        borderRadius={3}
        justifyContent="center"
        alignItems="center"
        {...(checked && checkedProps)}
        {...(!checked && unCheckedProps)}
        {...checkboxStyle}
      >
        <Icon
          name="ri-check-line"
          size={14}
          color={theme.colors.font.white}
          {...checkIconStyle}
        />
      </Container>
      <Typography
        ml={2}
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
