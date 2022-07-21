import React, { useContext, useRef, useState } from "react";
import { Animated } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";
import { ThemeContext } from "styled-components/native";

import { Container, Touchable } from "@components";

/**
 * A component used to display an expandable list item.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, Accordion } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Accordion
 *         Header={() => (
 *           <Container flexDirection="row" alignItems="center">
 *             <Typography bg="#00BA8829" color="font.green800" p={1}>
 *               Open
 *             </Typography>
 *             <Typography px={2}>Low</Typography>
 *           </Container>
 *         )}
 *         iconProp={{
 *           IconLabel: () => (
 *             <Typography color="font.danger">Collapse</Typography>
 *           ),
 *           iconColor: theme.colors.font.danger,
 *         }}
 *       >
 *         <Container my={2} p={3} bg="background.grey100" borderRadius={8}>
 *           <Typography color="font.primary">Body Content</Typography>
 *         </Container>
 *       </Accordion>
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const Accordion = props => {
  const { Header, noBorder = false, iconProp = {}, children } = props;
  const { iconName, IconLabel, iconSize, iconColor } = iconProp;
  const theme = useContext(ThemeContext);
  const [isExpanded, setExpanded] = useState(false);
  const [viewHeight, setViewHeight] = useState(0);
  const animationController = useRef(
    new Animated.Value(isExpanded ? 1 : 0)
  ).current;

  const getLayout = event => {
    const height = event.nativeEvent.layout.height;
    setViewHeight(height);
  };

  const handleAnimation = () => {
    Animated.timing(animationController, {
      duration: 300,
      toValue: isExpanded ? 1 : 0,
      useNativeDriver: false,
    }).start();
    setExpanded(!isExpanded);
  };

  const arrowAngle = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0rad", `${Math.PI}rad`],
  });

  const bodyContentHeight = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, viewHeight],
  });

  return (
    <Container
      {...(!noBorder && {
        borderColor: "border.grey400",
        borderWidth: 1,
        borderRadius: 8,
        p: 2,
      })}
      width="100%"
    >
      <Container flexDirection="row" alignItems="center">
        {!!Header && (
          <Container flexGrow={1}>
            <Header />
          </Container>
        )}
        <Touchable
          onPress={handleAnimation}
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          px={1}
        >
          {IconLabel && <IconLabel />}
          <Animated.View
            style={{
              alignItems: "flex-end",
              transform: [{ rotateZ: arrowAngle }],
            }}
          >
            <Container>
              <Icon
                name={iconName ?? "ri-arrow-down-s-line"}
                color={iconColor ?? theme.colors.font.grey700}
                size={iconSize ?? 24}
              />
            </Container>
          </Animated.View>
        </Touchable>
      </Container>
      <Animated.View style={{ height: bodyContentHeight, overflow: "hidden" }}>
        <Container width="100%" position="absolute" onLayout={getLayout}>
          {children}
        </Container>
      </Animated.View>
    </Container>
  );
};

Accordion.propTypes = {
  /**
   * Render a component on the header.
   */
  Header: PropTypes.elementType,
  /**
   * Renders the child component passed in the body of the accordion.
   */
  children: PropTypes.node,
  /**
   * Takes a boolean value based on which border is shown.
   */
  noBorder: PropTypes.bool,
  /**
   * Takes an object based on which the icon to expand/collapse can be customized.
   */
  iconProp: PropTypes.object,
};
