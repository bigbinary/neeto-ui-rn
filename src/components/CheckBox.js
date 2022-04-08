import React from "react";
import Proptypes from "prop-types";

import { Container, Typography, Touchable } from "@components";
const LABEL_POSITIONS = ["left", "right"];

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
 * import { Container, CheckBox, Typography } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *  const [selected, setSelected] = useState(false);
 *
 *
 *  return (
 *    <Container>
 *      <Container flexDirection="row" my={2}>
 *        <CheckBox
 *          selected={selected}
 *          onSelect={() => setSelected(!selected)}
 *          checkedComponent={
 *            <Container width={10} height={10} bg="background.base" />
 *          }
 *          label="Agree"
 *        />
 *      </Container>
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const CheckBox = ({
  selected = false,
  onSelect = () => {},
  checkedComponent = null,
  checkedItemProp = {},
  disabled = false,
  label = "Option",
  labelComponent = null,
  labelProp = {},
  labelPosition = "right",
  checkboxContainerProp = {},
  ...rest
}) => {
  return (
    <Touchable
      disabled={disabled}
      onPress={onSelect}
      opacity={disabled ? 0.5 : 1}
      flexDirection="row"
      alignItems="center"
      {...rest}
    >
      {labelPosition === LABEL_POSITIONS[0] ? (
        <LabelComponent
          label={label}
          labelComponent={labelComponent}
          labelProp={{ mr: 2, ...labelProp }}
        />
      ) : null}
      <Container
        borderColor="background.base"
        borderWidth={1}
        borderRadius={5}
        justifyContent="center"
        alignItems="center"
        width={20}
        height={20}
        {...checkboxContainerProp}
      >
        {selected && (
          <Container>
            {checkedComponent || (
              <Typography {...checkedItemProp}>✓</Typography>
            )}
          </Container>
        )}
      </Container>
      {labelPosition === LABEL_POSITIONS[1] ? (
        <LabelComponent
          label={label}
          labelComponent={labelComponent}
          labelProp={{ ml: 2, ...labelProp }}
        />
      ) : null}
    </Touchable>
  );
};

CheckBox.propTypes = {
  /**
   * Whether checkbox is selected.
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
   * Render custom checked component.
   */
  checkedComponent: Proptypes.element,
  /**
   * Check mark style.
   */
  checkedItemProp: Proptypes.object,
  /**
   * Text label to be shown with radio button.
   */
  label: Proptypes.string,
  /**
   * Props for the label.
   */
  labelProp: Proptypes.object,
  /**
   * Label can passed as a component as well.
   */
  labelComponent: Proptypes.element,
  /**
   * Position of label relative to the radio button. It can be either `left` or `right`
   */
  labelPosition: Proptypes.oneOf(LABEL_POSITIONS),
  /**
   * Extra param to customize checkbox container
   */
  checkboxContainerProp: Proptypes.object,
};

LabelComponent.propTypes = {
  label: Proptypes.string,
  labelComponent: Proptypes.element,
  labelProp: Proptypes.object,
};
