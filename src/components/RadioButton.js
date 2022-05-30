import React from "react";
import PropTypes from "prop-types";

import { Container, Touchable, Typography } from "@components";
const labelPositions = ["left", "right"];

const LabelComponent = ({ label, labelComponent, labelProp }) => {
  return labelComponent || <Typography {...labelProp}>{label}</Typography>;
};

/**
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
 * import { Container, RadioButton } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *  const [selected, setSelected] = useState(false);
 *
 *   return (
 *     <Container>
 *      <RadioButton
 *       selected={selected}
 *       onSelect={() => setSelected(!selected)}
 *       label="option label 1"
 *       labelPosition="left"
 *      />
 *     </Container>
 *   );
 *  }
 * ```
 *
 */

export const RadioButton = ({
  radioButtonWidth = 20,
  radioButtonSelectedWidth = 10,
  containerBg = "background.grey",
  innerActiveBg = "background.base",
  innerInActiveBg = "background.secondary",
  onSelect = () => {},
  selected = null,
  density = 5,
  label = "Option",
  labelComponent = null,
  labelProp = {},
  labelPosition = "right",
  disabled = false,
  ...rest
}) => {
  return (
    <Touchable
      disabled={disabled}
      opacity={disabled ? 0.5 : 1}
      onPress={onSelect}
      flexDirection="row"
      alignItems="center"
      py={1}
      {...rest}
    >
      {labelPosition === labelPositions[0] ? (
        <LabelComponent
          label={label}
          labelComponent={labelComponent}
          labelProp={{ mr: 2, ...labelProp }}
        />
      ) : null}
      <Container
        bg={containerBg}
        height={radioButtonWidth}
        width={radioButtonWidth}
        borderRadius={radioButtonWidth / 2}
        justifyContent="center"
        alignItems="center"
      >
        <Container
          height={radioButtonSelectedWidth + density}
          width={radioButtonSelectedWidth + density}
          borderRadius={(radioButtonSelectedWidth + density) / 2}
          bg="background.white"
          justifyContent="center"
          alignItems="center"
        >
          <Container
            bg={selected ? innerActiveBg : innerInActiveBg}
            height={radioButtonSelectedWidth}
            width={radioButtonSelectedWidth}
            borderRadius={radioButtonSelectedWidth / 2}
            m={1}
          />
        </Container>
      </Container>
      {labelPosition === labelPositions[1] ? (
        <LabelComponent
          label={label}
          labelComponent={labelComponent}
          labelProp={{ ml: 2, ...labelProp }}
        />
      ) : null}
    </Touchable>
  );
};

RadioButton.propTypes = {
  /**
   * Function to execute on press.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Whether radio is selected.
   */
  selected: PropTypes.any.isRequired,
  /**
   * Text label to be shown with radio button.
   */
  label: PropTypes.string,
  /**
   * Props for the label.
   */
  labelProp: PropTypes.object,
  /**
   * Label can passed as a component as well.
   */
  labelComponent: PropTypes.element,
  /**
   * Position of label relative to the radio button. It can be either `left` or `right`
   */
  labelPosition: PropTypes.oneOf(labelPositions),
  /**
   * Whether radio is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Size of radio button.
   */
  radioButtonWidth: PropTypes.number,
  /**
   * Size of radio button when selected.
   */
  radioButtonSelectedWidth: PropTypes.number,
  /**
   * Background color of radio button.
   */
  containerBg: PropTypes.string,
  /**
   * Color of radio button when selected.
   */
  innerActiveBg: PropTypes.string,
  /**
   * Color of radio button when not selected.
   */
  innerInActiveBg: PropTypes.string,
  /**
   * Thickness of radio button container component.
   */
  density: PropTypes.number,
};

LabelComponent.propTypes = {
  label: PropTypes.string,
  labelComponent: PropTypes.element,
  labelProp: PropTypes.object,
};
