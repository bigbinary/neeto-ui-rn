import React, { useCallback, useContext, useEffect, useRef } from "react";
import {
  Animated,
  InputAccessoryView,
  Keyboard,
  StyleSheet,
  useWindowDimensions,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components/native";
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

import { Button, Container } from "@components";

import { theme } from "../theme";

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

const AnimatedLabel = Animated.createAnimatedComponent(Typography);

/**
 * Input component allow users to input custom text entries with a keyboard.
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
 * <div class="screenshots">
 *   <img src="screenshots/inputs/inputs.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Input, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Input value="Oliver Smith" onChangeText={()=>{}} label="Name" />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const Input = ({
  label,
  value = "",
  onChangeText = () => {},
  onBlur = () => {},
  errorMessage = null,
  PrefixIcon,
  SuffixIcon,
  autoFocus = false,
  disabled = false,
  noBorder = false,
  showInputAccessoryView = true,
  textAlignVertical = "top",
  containerProps,
  ...rest
}) => {
  const { width } = useWindowDimensions();
  const colors = useContext(ThemeContext).colors;
  const inputRef = useRef();
  const containerRef = useRef();
  const animatedController = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (autoFocus) {
      handleLabelAnimation(true);
    } else {
      handleLabelAnimation(false);
    }
  }, [autoFocus]);

  useEffect(() => {
    if (value) {
      if (Math.floor(animatedController._value) === 0) {
        handleLabelAnimation(true);
      }
    } else {
      handleLabelAnimation(false);
    }
  }, [value]);

  const handleLabelAnimation = isFocused => {
    Animated.timing(animatedController, {
      toValue: !!isFocused || !!value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    !!label &&
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
          ? colors.border.purple500
          : colors.border.grey400,
        borderWidth: errorMessage || isFocused ? 1.5 : 1,
      });
  }, []);

  const labelStyles = {
    fontSize: animatedController.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 13],
    }),
    top: animatedController.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 6],
    }),
  };

  const handleFocusBlur = isFocused => {
    if (label) {
      if (!value) handleLabelAnimation(isFocused);

      if (!noBorder) handleStyles(isFocused);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          if (!inputRef?.current?.isFocused()) {
            inputRef?.current?.focus();
          }
        }}
      >
        <View
          alignItems="center"
          borderColor={errorMessage ? "border.danger" : "border.grey400"}
          borderRadius={8}
          borderWidth={noBorder ? 0 : 1}
          flexDirection="row"
          justifyContent="space-between"
          ref={containerRef}
          {...(!rest.inputProps?.multiline && { height: 58 })}
          overflow="hidden"
          {...containerProps}
        >
          {!!PrefixIcon && (
            <View pl={2}>
              <PrefixIcon />
            </View>
          )}
          <View flex={1} left={10}>
            {!!label && (
              <AnimatedLabel
                color={disabled ? "font.grey400" : "font.grey600"}
                position="absolute"
                style={labelStyles}
                zIndex={1}
              >
                {label}
              </AnimatedLabel>
            )}
            <TextInput
              autoCapitalize="none"
              autoFocus={autoFocus}
              color={disabled ? "font.grey500" : "font.primary"}
              editable={!disabled}
              fontSize={17}
              inputAccessoryViewID={label}
              mt={10}
              pb={3}
              pr={3}
              pt={1}
              ref={inputRef}
              returnKeyType={rest.inputProps?.multiline ? "default" : "done"}
              textAlignVertical={textAlignVertical}
              top={0}
              value={value}
              zIndex={2}
              onChangeText={onChangeText}
              onBlur={() => {
                onBlur();
                handleFocusBlur(false);
              }}
              onFocus={() => {
                handleFocusBlur(true);
              }}
              {...rest.inputProps}
            />
            {rest.inputProps?.multiline &&
              showInputAccessoryView &&
              Platform.OS === "ios" && (
                <InputAccessoryView nativeID={label}>
                  <Container
                    alignItems="center"
                    bg="background.white"
                    flexDirection="row"
                    justifyContent="flex-end"
                    p={2}
                    pr={20}
                    width={width}
                  >
                    <Button
                      height={30}
                      label="Done"
                      labelStyle={styles.doneButtonStyle}
                      left={10}
                      variant="text"
                      onPress={() => {
                        Keyboard.dismiss();
                      }}
                    />
                  </Container>
                </InputAccessoryView>
              )}
          </View>
          {!!SuffixIcon && (
            <View px={2}>
              <SuffixIcon />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
      {!!errorMessage && (
        <Typography color="font.danger" pt={2}>
          {errorMessage}
        </Typography>
      )}
    </>
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
  onChangeText: PropTypes.func.isRequired,
  /**
   * Func which will get trigged onBlur.
   */
  onBlur: PropTypes.func,
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
  /**
   * Takes a boolean value based on which border is hidden/shown.
   */
  noBorder: PropTypes.bool,
  /**
   * Used to pass custom styles to the wrapper component.
   */
  containerProps: PropTypes.object,
  /**
   * Used to align the position of text in input.
   */
  textAlignVertical: PropTypes.oneOf(["auto", "top", "bottom", "center"]),
  /**
   * Show Input AccessoryView on iOS
   */
  showInputAccessoryView: PropTypes.bool,
};

export const styles = StyleSheet.create({
  doneButtonStyle: {
    fontFamily: "sf700",
    color: theme.colors.font.base,
  },
});