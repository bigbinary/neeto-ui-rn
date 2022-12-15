import React, { useEffect, useRef, useState } from "react";
import { Dimensions, TouchableWithoutFeedback } from "react-native";

import PropTypes from "prop-types";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Icon from "react-native-remix-icon";
import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  typography,
  color,
} from "styled-system";

import { Container, Touchable, Typography } from "@components";
import { useDebounce } from "@hooks";
import { theme } from "@theme";

const TextInput = styled.TextInput`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
  ${typography}
  ${color}
`;

/**
 * SearchBars are used to search or filter items.
 *
 * <div class="screenshots">
 *   <img src="screenshots/searchbar/searchbar.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, SearchBar } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *      <SearchBar placeholder="Search" onChangeText={() => {}} />
 *    </Container>
 *  );
 * }
 * ```
 */

const { width: screenWidth } = Dimensions.get("window");
const buttonSize = moderateScale(screenWidth * 0.19);

export const SearchBar = ({
  placeholder = "Search",
  onChangeText = () => {},
  onCancel = () => {},
  debounceDelay = 1000,
  showCancelButton = true,
  containerProps,
  searchbarProps,
}) => {
  const inputRef = useRef();
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTextValue = useDebounce(
    searchText.trim(),
    Number(debounceDelay)
  );
  const buttonWidthController = useSharedValue(0);
  const buttonOpacityController = useSharedValue(0);

  useEffect(() => {
    onChangeText(debouncedSearchTextValue);
  }, [debouncedSearchTextValue, onChangeText]);

  const animateSearchInput = val => {
    buttonWidthController.value = withTiming(val, {
      easing: Easing.linear,
      duration: 200,
    });

    buttonOpacityController.value = withTiming(val, {
      easing: Easing.linear,
      duration: 100,
    });
  };

  const cancelButtonStyle = useAnimatedStyle(() => ({
    width: interpolate(buttonWidthController.value, [0, 1], [0, buttonSize]),
  }));

  const onCancelHandle = () => {
    animateSearchInput(0);
    setSearchText("");
    inputRef.current.blur();
    onCancel();
  };

  return (
    <Container alignItems="center" flexDirection="row">
      <TouchableWithoutFeedback
        onPress={() => {
          if (!inputRef?.current?.isFocused()) {
            inputRef?.current?.focus();
          }
        }}
      >
        <Container
          alignItems="center"
          borderColor={theme.colors.border.grey400}
          borderRadius={moderateScale(8)}
          borderWidth={moderateScale(1)}
          flex={1}
          flexDirection="row"
          height={moderateScale(42)}
          {...containerProps}
        >
          <Container px={moderateScale(8)}>
            <Icon
              color={theme.colors.font.grey600}
              name="ri-search-line"
              size={moderateScale(20)}
            />
          </Container>
          <TextInput
            autoCapitalize="none"
            color="font.primary"
            flex={1}
            fontSize={moderateScale(16)}
            padding={0}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.font.grey600}
            ref={inputRef}
            returnKeyType="search"
            value={searchText}
            onChangeText={setSearchText}
            onBlur={() => {
              if (!searchText) animateSearchInput(0);
            }}
            onFocus={() => {
              animateSearchInput(1);
            }}
            {...searchbarProps}
          />
        </Container>
      </TouchableWithoutFeedback>
      {showCancelButton && (
        <Animated.View
          style={{
            opacity: buttonOpacityController,
            alignItems: "flex-end",
            justifyContent: "center",
            ...cancelButtonStyle,
          }}
        >
          <Touchable
            flex={1}
            height={moderateScale(42)}
            justifyContent="center"
            px={moderateScale(8)}
            onPress={onCancelHandle}
          >
            <Typography fontFamily={theme.fonts.sf500} numberOfLines={1}>
              Cancel
            </Typography>
          </Touchable>
        </Animated.View>
      )}
    </Container>
  );
};

SearchBar.propTypes = {
  /**
   * Set the placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Method to fire when text is changed
   */
  onChangeText: PropTypes.func.isRequired,
  /**
   * Takes numeric value which is used to set the debounce delay
   */
  debounceDelay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Takes an object and accepts all the props accepted by TextInput component from React Native.
   */
  searchbarProps: PropTypes.object,
  /**
   * Method called when the cancel button is pressed.
   */
  onCancel: PropTypes.func,
  /**
   * option to hide the cancel button. Default is true
   */
  showCancelButton: PropTypes.bool,
  containerProps: PropTypes.object,
};
