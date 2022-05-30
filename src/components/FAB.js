import * as React from "react";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";
import { Touchable } from "@components";

/**
 * FAB component is a floating action button which represents the primary action in an application and is built on top of styled-system.
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 *
 * <ul>
 * <li>space</li>
 * <li>layout</li>
 * <li>flexbox</li>
 * <li>color</li>
 * <li>textStyle</li>
 * <li>buttonStyle</li>
 * </ul>
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab/buttonstyles.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { FAB, Container, Typography } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *        <FAB
 *          Icon={() => {
 *            return <Typography>🔔</Typography>;
 *          }}
 *        />
 *     </Container>
 *  );
 * }
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

// eslint-disable-next-line neeto/no-dangling-constants
export const FAB = ({ Icon, bg, disabled, variant, onPress, ...rest }) => {
  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  let style = rest.style || {};
  if (disabled) {
    style = { ...style, opacity: 0.5 };
  }

  return (
    <Touchable
      {...(variant !== "inverse" ? { bg } : {})}
      disabled={disabled}
      variant={variant}
      onPress={onPress}
      style={[style, shadowStyle]}
      {...(variant !== "inverse" ? { borderColor: bg } : {})}
      {...rest}
    >
      <Icon />
    </Touchable>
  );
};

FAB.defaultProps = {
  variant: "solid",
  size: 56,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 28,
};

FAB.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  /**
   * Icon to display for the Button.
   */
  Icon: PropTypes.elementType.isRequired,
  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func.isRequired,
};
