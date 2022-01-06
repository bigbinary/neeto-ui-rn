import * as React from "react";
import PropTypes from "prop-types";

import {
  flexbox,
  space,
  border,
  buttonStyle,
  color,
  layout,
} from "styled-system";
import styled from "styled-components/native";
import { Container, Typography } from "@components";

export const TouchableOpacity = styled.TouchableOpacity`
  ${buttonStyle}
  ${flexbox}
  ${space}
  ${border}
  ${layout}
  ${color}
`;

/**
 * ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.
 * <div class="screenshots">
 *   <img src="screenshots/buttonGroup/buttonGroup.png" />
 * </div>
 * 
 * ## Usage
 * ```js
 * import React, { useState } from 'react';
 * import { ButtonGroup } from '@bigbinary/neetoui-rn';
 * 
 * export default function Main(){
 *  const buttonItems = ["Button1", "Button2"];
 *  const [activeButton, setActiveButton] = useState(buttonItems[0]);
 *  
 *  return(
 *   <ButtonGroup
 *     buttonItems={buttonItems}
 *     onPress={setActiveButton}
 *     currentActiveBtn={activeButton}
 *    />    
 *  );
 * } 

 * ```
 */

export const ButtonGroup = ({
  activeColor,
  inActiveColor,
  buttonItems,
  onPress,
  currentActiveBtn,
  ...rest
}) => {
  return (
    <Container
      my={3}
      border="1px solid"
      borderRadius={2}
      borderColor={activeColor}
      flexDirection="row"
      justifyContent="space-between"
      alignSelf="center"
      {...rest.wrapperStyle}
    >
      {buttonItems.map(item => {
        return (
          <TouchableOpacity
            key={item}
            bg={item === currentActiveBtn ? activeColor : inActiveColor}
            p={2}
            px={3}
            onPress={() => {
              if (item !== currentActiveBtn) {
                onPress(item);
              }
            }}
            {...rest.buttonStyle}
          >
            <Typography
              color={item === currentActiveBtn ? inActiveColor : activeColor}
              {...rest.buttonTextStyle}
            >
              {item}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
};

ButtonGroup.defaultProps = {
  activeColor: "background.grey600",
  inActiveColor: "background.white",
  wrapperStyle: {},
  buttonTextStyle: { ellipsizeMode: "tail", numberOfLines: 1 },
  buttonStyle: {},
};

ButtonGroup.propTypes = {
  /**
   * Sets active color to the selected button in buttonGroup.
   */
  activeColor: PropTypes.string,
  /**
   * Sets inActive color to the unselected button in buttonGroup.
   */
  inActiveColor: PropTypes.string,
  /**
   * Returns the current selected item on button press.
   */
  onPress: PropTypes.func.isRequired,
  /**
   * Array of button text.
   */
  buttonItems: PropTypes.array.isRequired,
  /**
   * Sets current active button.
   */
  currentActiveBtn: PropTypes.string.isRequired,
  /**
   * Styling for main container.
   */
  wrapperStyle: PropTypes.object,
  /**
   * Styling for button text.
   */
  buttonTextStyle: PropTypes.object,
  /**
   * Styling for button.
   */
  buttonStyle: PropTypes.object,
};
