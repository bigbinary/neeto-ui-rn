import React from "react";
import PropTypes from "prop-types";

import { Container, Touchable, Typography } from "@components";
const LABEL_POSITIONS = ["left", "right"];

const LabelComponent = ({ label, labelComponent, labelProp }) => {
  return (
    labelComponent || (
      <Typography mx={2} {...labelProp}>
        {label}
      </Typography>
    )
  );
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
  outerWidth = 20,
  innerWidth = 10,
  containerBg = "background.grey",
  innerActiveBg = "background.base",
  innerInActiveBg = "background.secondary",
  onSelect = () => {},
  selected = null,
  innerOuterCircleDelta = 5,
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
      {labelPosition === LABEL_POSITIONS[0] ? (
        <LabelComponent
          label={label}
          labelComponent={labelComponent}
          labelProp={labelProp}
        />
      ) : null}
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
      {labelPosition === LABEL_POSITIONS[1] ? (
        <LabelComponent
          label={label}
          labelComponent={labelComponent}
          labelProp={labelProp}
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
  labelPosition: PropTypes.oneOf(LABEL_POSITIONS),
  /**
   * Whether radio is disabled.
   */
  disabled: PropTypes.bool,
  outerWidth: PropTypes.number,
  innerWidth: PropTypes.number,
  containerBg: PropTypes.string,
  innerActiveBg: PropTypes.string,
  innerInActiveBg: PropTypes.string,
  innerOuterCircleDelta: PropTypes.number,
};

LabelComponent.propTypes = {
  label: PropTypes.string,
  labelComponent: PropTypes.element,
  labelProp: PropTypes.object,
};
