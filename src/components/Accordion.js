import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";
import { ThemeContext } from "styled-components/native";

import { Container } from "@components";

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
 *         header={() => (
 *           <Container flexDirection="row" alignItems="center">
 *             <Typography bg="#00BA8829" color="font.primary" p={1}>
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

const AccordionBody = ({ isExpanded, children }) => {
  const animationController = useRef(
    new Animated.Value(isExpanded ? 1 : 0)
  ).current;

  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    Animated.timing(animationController, {
      duration: 300,
      toValue: isExpanded ? 1 : 0,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const bodyContentHeight = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, viewHeight],
  });

  const getLayout = event => {
    const height = event.nativeEvent.layout.height;
    setViewHeight(height);
  };

  return (
    <Animated.View style={{ height: bodyContentHeight, overflow: "hidden" }}>
      <Container width="100%" position="absolute" onLayout={getLayout}>
        {children}
      </Container>
    </Animated.View>
  );
};

export const Accordion = React.forwardRef((props, ref) => {
  const {
    header,
    noBorder = false,
    iconProp = {},
    onStateChanged,
    children,
    position = "bottom",
    ...rest
  } = props;
  const { name, Label, size, color } = iconProp;
  const theme = useContext(ThemeContext);
  const [isExpanded, setExpanded] = useState(false);
  const animationController = useRef(
    new Animated.Value(isExpanded ? 1 : 0)
  ).current;

  useEffect(() => {
    Animated.timing(animationController, {
      duration: 300,
      toValue: isExpanded ? 1 : 0,
      useNativeDriver: false,
    }).start(() => {
      !!onStateChanged && onStateChanged(isExpanded);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const handleAnimation = () => {
    setExpanded(!isExpanded);
  };

  useImperativeHandle(ref, () => ({
    toggleAccordion: handleAnimation,
    openAccordion: () => setExpanded(true),
    closeAccordion: () => setExpanded(false),
  }));

  const arrowAngle = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0rad", `${Math.PI}rad`],
  });

  return (
    <Container
      {...(!noBorder && {
        borderColor: "border.grey400",
        borderWidth: 1,
        borderRadius: 8,
      })}
      width="100%"
      padding={12}
      {...rest}
    >
      {position === "top" && (
        <AccordionBody isExpanded={isExpanded}>{children}</AccordionBody>
      )}
      <TouchableOpacity
        rippleOpacity={0}
        style={styles.accordionContainer}
        onPress={() => {
          handleAnimation();
        }}
      >
        {!!header && <Container flexGrow={1}>{header()}</Container>}
        <Container
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          px={1}
        >
          {Label && <Label />}
          <Animated.View
            style={{
              alignItems: "flex-end",
              transform: [{ rotateZ: arrowAngle }],
            }}
          >
            <Container>
              <Icon
                name={name ?? "ri-arrow-down-s-line"}
                color={color ?? theme.colors.font.grey700}
                size={size ?? 24}
              />
            </Container>
          </Animated.View>
        </Container>
      </TouchableOpacity>

      {position === "bottom" && (
        <AccordionBody isExpanded={isExpanded}>{children}</AccordionBody>
      )}
    </Container>
  );
});

AccordionBody.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

Accordion.propTypes = {
  /**
   * Render a component on the header.
   */
  header: PropTypes.func,
  /**
   * Renders the child component passed in the body of the accordion.
   */
  children: PropTypes.node,
  /**
   * Takes a boolean value based on which border is shown.
   */
  noBorder: PropTypes.bool,
  /**
   * Function that returns the current state.
   */
  onStateChanged: PropTypes.func,
  /**
   * Takes an object based on which the icon to expand/collapse can be customized.
   * Label: Takes a component.
   * size: Used to update the icon size.
   * name: Used to update the default arrow icon.
   * color: Used to update the default color of the icon.
   */
  iconProp: PropTypes.shape({
    name: PropTypes.string,
    Label: PropTypes.elementType,
    size: PropTypes.number,
    color: PropTypes.string,
  }),
  /**
   * Determine whether the body should show at the top or bottom
   */
  position: PropTypes.string,
};

const styles = StyleSheet.create({
  accordionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
