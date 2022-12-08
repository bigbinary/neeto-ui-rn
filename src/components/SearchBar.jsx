import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

import PropTypes from "prop-types";
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

import { Container, Button } from "@components";
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
  const buttonWidthController = useRef(new Animated.Value(0)).current;
  const buttonOpacityController = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    onChangeText(debouncedSearchTextValue);
  }, [debouncedSearchTextValue, onChangeText]);

  const animateSearchInput = val => {
    Animated.sequence([
      Animated.timing(buttonOpacityController, {
        toValue: val,
        duration: 350,
        useNativeDriver: false,
      }),
      Animated.timing(buttonWidthController, {
        toValue: val,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const cancelButtonWidth = buttonWidthController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 60],
  });

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
          <Container px={moderateScale(10)}>
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
            width: cancelButtonWidth,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Button
            height={moderateScale(20)}
            label="Cancel"
            labelStyle={{ mx: 0 }}
            variant="text"
            onPress={onCancelHandle}
          />
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
