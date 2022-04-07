import React from "react";
import Proptypes from "prop-types";

import { Container, Typography, Touchable } from "@components";

/**
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>onSelect</li>
 * <li>selected</li>
 * <li>checkedComponent</li>
 * <li>containerStyle</li>
 * <li>checkedItemStyle</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import React, { useEffect, useState } from "react";
 * import { Container, CheckBox, Typography } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *  const [selectedValues, setSelectedValues] = useState([]);
 *
 *  const handleCheckbox = index => {
 *    const oldData = [...selectedValues];
 *    const itemIndex = selectedValues.indexOf(index);
 *    if (itemIndex === -1) {
 *      oldData.push(index);
 *    } else {
 *      oldData.splice(itemIndex, 1);
 *    }
 *    setSelectedValues(oldData);
 *  };
 *  return (
 *    <Container>
 *      <Container flexDirection="row" my={2}>
 *        <CheckBox
 *          selected={selectedValues.indexOf(1) !== -1}
 *          onSelect={() => handleCheckbox(1)}
 *          checkedComponent={
 *            <Container width={10} height={10} bg="background.base" />
 *          }
 *        />
 *        <Typography>With Custom Checked Component</Typography>
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
  containerStyle = {},
  checkedItemStyle = {},
}) => {
  return (
    <Touchable
      onPress={onSelect}
      borderColor="background.base"
      borderWidth={1}
      borderRadius={5}
      justifyContent="center"
      alignItems="center"
      width={20}
      height={20}
      mr={2}
      {...containerStyle}
    >
      {selected && (
        <Container>
          {checkedComponent || <Typography {...checkedItemStyle}>✓</Typography>}
        </Container>
      )}
    </Touchable>
  );
};

CheckBox.propTypes = {
  selected: Proptypes.bool.isRequired,
  onSelect: Proptypes.func.isRequired,
  checkedComponent: Proptypes.element,
  containerStyle: Proptypes.object,
  checkedItemStyle: Proptypes.object,
};
