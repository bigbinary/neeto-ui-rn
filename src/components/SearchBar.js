import React, { useEffect, useRef, useState } from "react";
import { TextInput, Animated, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

import { Container, Button } from "@components";
import { useDebounce } from "@hooks";
import { theme } from "@theme";

/**
 * SearchBars are used to search or filter items.
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
    debounceDelay = 1000,
    ...rest
  } = props;
  const inputRef = useRef();
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTextValue = useDebounce(
    searchText,
    Number(debounceDelay)
  );
  const searchAnimationController = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    onChangeText(debouncedSearchTextValue);
  }, [debouncedSearchTextValue, onChangeText]);

  const animateSearchInput = val => {
    Animated.timing(searchAnimationController, {
      toValue: val,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };

  const searchInputWidth = searchAnimationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "85%"],
  });

  const onCancelHandle = () => {
    animateSearchInput(0);
    setSearchText("");
    inputRef.current.blur();
  };

  return (
    <Container flexDirection="row" alignItems="center">
      <Animated.View
        style={{
          ...styles.inputContainerStyles,
          width: searchInputWidth,
        }}
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
          {...rest.searchbarProps}
        />
      </Animated.View>
      <Animated.View
        style={{
          opacity: searchAnimationController,
        }}
      >
        <Button variant="text" label="Cancel" onPress={onCancelHandle} />
      </Animated.View>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputContainerStyles: {
    height: 42,
    borderWidth: 1,
    borderColor: theme.colors.border.grey400,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});

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
};
