import React, { useContext } from "react";

import {
  Checkbox as CheckboxIcon,
  CheckboxInactive,
} from "@bigbinary/neeto-icons-rn";
import Proptypes from "prop-types";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

import { Typography, Touchable } from "@components";

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
    labelProps: {
      fontFamily: theme.fonts.sf600,
    },
  };

  const unCheckedProps = {
    labelProps: {
      fontFamily: theme.fonts.sf400,
    },
  };

  const Icon = checked ? CheckboxIcon : CheckboxInactive;

  return (
    <Touchable
      alignItems="center"
      disabled={disabled}
      flexDirection="row"
      flexShrink={1}
      py={moderateScale(8)}
      onPress={onSelect}
      {...rest}
    >
      <Typography
        flex={1}
        fontSize="m"
        lineHeight={`${moderateScale(22)}px`}
        {...(checked && checkedProps.labelProps)}
        {...(!checked && unCheckedProps.labelProps)}
        {...(disabled && disabledProps.labelProps)}
        {...labelStyle}
      >
        {label}
      </Typography>
      <Icon
        color={theme.colors.font.primary}
        size={moderateScale(22)}
        {...checkIconStyle}
      />
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
