/* eslint-disable react/display-name */
import React, { useCallback, useContext, useEffect, useRef } from "react";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  typography,
  textStyle,
  color,
  layout,
  system,
  position,
} from "styled-system";
import { Animated } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
  ${typography}
  ${color}
`;

const View = styled.View`
  ${flexbox}
  ${space}
  ${border}
  ${color}
  ${layout}
`;

const Typography = styled.Text`
  ${textStyle}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${color}
  ${position}
  ${system({
    textDecoration: {
      property: "textDecoration",
      cssProperty: "textDecoration",
    },
    textTransform: { property: "textTransform", cssProperty: "textTransform" },
  })}
`;

/**
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>buttonStyle</li>
 * <li>brandLeft</li>
 * <li>typography</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Input, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Input value="Oliver Smith" onChangeHandle={()=>{}} label="Name" />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

const AnimatedLabel = Animated.createAnimatedComponent(Typography);

export const Input = props => {
  const {
    label,
    value = "",
    onChangeHandle = () => {},
    errorMessage = null,
    PrefixIcon,
    SuffixIcon,
    autoFocus = false,
    disabled = false,
    ...rest
  } = props;

  const colors = useContext(ThemeContext).colors;
  const inputRef = useRef();
  const containerRef = useRef();
  const animatedController = new Animated.Value(0);

  useEffect(() => {
    if (autoFocus || value) {
      handleLabelAnimation(true);
    } else {
      handleLabelAnimation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLabelAnimation = isFocused => {
    Animated.timing(animatedController, {
      toValue: !!isFocused || !!value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    inputRef.current &&
      inputRef.current.setNativeProps({
        style: {
          top: isFocused ? 10 : 0,
        },
      });
  };

  const handleStyles = useCallback(isFocused => {
    containerRef.current &&
      containerRef.current.setNativeProps({
        borderColor: errorMessage
          ? colors.border.danger
          : isFocused
          ? colors.border.purple700
          : colors.border.grey300,
        borderWidth: errorMessage || isFocused ? 2 : 1,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const labelStyles = {
    fontSize: animatedController.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
    top: animatedController.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 6],
    }),
  };

  const handleFocusBlur = isFocused => {
    if (!value) handleLabelAnimation(isFocused);
    handleStyles(isFocused);
  };

  return (
    <View>
      <View
        borderRadius={5}
        borderWidth={1}
        borderColor={errorMessage ? "border.danger" : "border.grey300"}
        ref={containerRef}
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        {!!PrefixIcon && (
          <View pl={2}>
            <PrefixIcon />
          </View>
        )}
        <View flex={1}>
          <AnimatedLabel
            color={disabled ? "font.grey400" : "font.grey600"}
            position="absolute"
            left={10}
            zIndex={1}
            style={labelStyles}
          >
            {label}
          </AnimatedLabel>
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeHandle}
            autoFocus={autoFocus}
            editable={!disabled}
            onFocus={() => {
              handleFocusBlur(true);
            }}
            onBlur={() => {
              handleFocusBlur(false);
            }}
            color={disabled ? "font.grey500" : "font.grey800"}
            fontSize={18}
            py={3}
            left={10}
            top={0}
            zIndex={2}
            {...rest.inputProps}
          />
        </View>
        {!!SuffixIcon && (
          <View px={2}>
            <SuffixIcon />
          </View>
        )}
      </View>
      {!!errorMessage && (
        <Typography py={2} color="font.danger">
          {errorMessage}
        </Typography>
      )}
    </View>
  );
};

Input.propTypes = {
  /**
   * The text to use for the floating label.
   */
  label: PropTypes.string,
  /**
   * Holds the current value of the Input.
   */
  value: PropTypes.string.isRequired,
  /**
   * Func to set the current value.
   */
  onChangeHandle: PropTypes.func.isRequired,
  /**
   * To display error/info messages
   */
  errorMessage: PropTypes.string,
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled: PropTypes.bool,
  /**
   * If true, shows border on focus.
   */
  autoFocus: PropTypes.bool,
  /**
   * Display Icon component to the left of input.
   */
  PrefixIcon: PropTypes.elementType,
  /**
   * Display Icon component to the Right of input.
   */
  SuffixIcon: PropTypes.elementType,
};
