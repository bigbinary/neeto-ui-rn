import React from "react";
import PropTypes from "prop-types";

import { Container, Touchable, Typography } from "@components";
const LABELPOSITIONS = ["left", "right"];

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
 * <li>outerWidth</li>
 * <li>innerWidth</li>
 * <li>containerBg</li>
 * <li>innerActive</li>
 * <li>innerInActiveBg</li>
 * <li>onSelect</li>
 * <li>selected</li>
 * <li>innerOuterCircleDelta</li>
 * <li>label</li>
 * <li>labelComponent</li>
 * <li>labelProp</li>
 * <li>containerProp</li>
 * <li>labelPosition</li>
 * <li>disabled</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import React, { useEffect, useState } from "react";
 * import { Container, RadioButton, Typography } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 * useEffect(() => {
 * // console.log("selected is ", selected);
 * }, [selected]);
 *  return (
 *    <Container>
 *     <RadioButton
 *      selected={selected === 0}
 *      onSelect={() => setSelected(0)}
 *      label="option label 1"
 *      labelPosition="left"
 *     />
 *    </Container>
 *  );
 * }
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
  containerProp = {},
  labelPosition = "right",
  disabled = false,
}) => {
  return (
    <Touchable
      disabled={disabled}
      opacity={disabled ? 0.5 : 1}
      onPress={onSelect}
    >
      <Container flexDirection="row" alignItems="center" {...containerProp}>
        {labelPosition === LABELPOSITIONS[0] ? (
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
        {labelPosition === LABELPOSITIONS[1] ? (
          <LabelComponent
            label={label}
            labelComponent={labelComponent}
            labelProp={labelProp}
          />
        ) : null}
      </Container>
    </Touchable>
  );
};

RadioButton.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.any.isRequired,
  outerWidth: PropTypes.number,
  innerWidth: PropTypes.number,
  containerBg: PropTypes.string,
  innerActiveBg: PropTypes.string,
  innerInActiveBg: PropTypes.string,
  innerOuterCircleDelta: PropTypes.number,
  label: PropTypes.string,
  labelComponent: PropTypes.element,
  labelProp: PropTypes.object,
  containerProp: PropTypes.object,
  labelPosition: PropTypes.oneOf(LABELPOSITIONS),
  disabled: PropTypes.bool,
};

LabelComponent.propTypes = {
  label: PropTypes.string,
  labelComponent: PropTypes.element,
  labelProp: PropTypes.object,
};
