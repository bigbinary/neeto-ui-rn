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
import {
  Animated,
  InputAccessoryView,
  Keyboard,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import PropTypes from "prop-types";
import { Button, Container } from "@components";
import { theme } from "../../src/theme";

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

const AnimatedLabel = Animated.createAnimatedComponent(Typography);

export const Input = props => {
  const {
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
    textAlignVertical = "top",
    ...rest
  } = props;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFocus]);

  useEffect(() => {
    if (value) {
      if (animatedController._value === 0) {
        handleLabelAnimation(true);
      }
    } else {
      handleLabelAnimation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <View>
      <View
        ref={containerRef}
        borderRadius={8}
        borderWidth={noBorder ? 0 : 1}
        borderColor={errorMessage ? "border.danger" : "border.grey400"}
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        {...(!rest.inputProps?.multiline && { height: 58 })}
        overflow="hidden"
        {...rest.containerProps}
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
              zIndex={1}
              style={labelStyles}
            >
              {label}
            </AnimatedLabel>
          )}
          <TextInput
            ref={inputRef}
            value={value}
            returnKeyType={rest.inputProps?.multiline ? "default" : "done"}
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            editable={!disabled}
            onFocus={() => {
              handleFocusBlur(true);
            }}
            onBlur={() => {
              onBlur();
              handleFocusBlur(false);
            }}
            inputAccessoryViewID={label}
            color={disabled ? "font.grey500" : "font.primary"}
            fontSize={17}
            pr={3}
            top={0}
            zIndex={2}
            autoCapitalize="none"
            mt={10}
            pb={3}
            pt={1}
            textAlignVertical={textAlignVertical}
            {...rest.inputProps}
          />
          {rest.inputProps?.multiline && Platform.OS === "ios" && (
            <InputAccessoryView nativeID={label}>
              <Container
                bg="background.white"
                flexDirection="row"
                p={2}
                width={width}
                justifyContent="flex-end"
                alignItems="center"
                pr={20}
              >
                <Button
                  height={30}
                  left={10}
                  labelStyle={styles.doneButtonStyle}
                  variant="text"
                  onPress={() => {
                    Keyboard.dismiss();
                  }}
                  label="Done"
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
};

export const styles = StyleSheet.create({
  doneButtonStyle: {
    fontFamily: "sf700",
    color: theme.colors.font.base,
  },
});
