import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  typography,
  color,
} from "styled-system";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

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

export const SearchBar = props => {
  const {
    placeholder = "Search",
    onChangeText = () => {},
    onCancel = () => {},
    debounceDelay = 1000,
    showCancelButton = true,
    ...rest
  } = props;
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
    <Container flexDirection="row" alignItems="center">
      <Container
        height={42}
        flex={1}
        borderWidth={1}
        borderColor={theme.colors.border.grey400}
        borderRadius={8}
        flexDirection="row"
        alignItems="center"
        {...rest.containerProps}
      >
        <Container px={10}>
          <Icon
            name="ri-search-line"
            size={20}
            color={theme.colors.font.grey600}
          />
        </Container>
        <TextInput
          ref={inputRef}
          value={searchText}
          onChangeText={setSearchText}
          onFocus={() => {
            animateSearchInput(1);
          }}
          onBlur={() => {
            if (!searchText) animateSearchInput(0);
          }}
          placeholder={placeholder}
          fontSize={16}
          flex={1}
          placeholderTextColor={theme.colors.font.grey600}
          color="font.primary"
          autoCapitalize="none"
          returnKeyType="search"
          {...rest.searchbarProps}
        />
      </Container>
      {showCancelButton && (
        <Animated.View
          style={{
            opacity: buttonOpacityController,
            width: cancelButtonWidth,
            alignItems: "flex-end",
          }}
        >
          <Button
            variant="text"
            label="Cancel"
            onPress={onCancelHandle}
            labelStyle={{ mx: 0 }}
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
};
