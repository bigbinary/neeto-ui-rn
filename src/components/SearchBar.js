import React, { useEffect, useRef, useState } from "react";
import { TextInput, Animated, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

import { Container, Button } from "@components";
import { useDebounce } from "@hooks";
import { theme } from "@theme";

export const SearchBar = props => {
  const { placeholder = "Search", onChangeHandle = () => {}, ...rest } = props;
  const inputRef = useRef();
  const debouncedSearchTextValue = useDebounce(searchText, 1000);
  const [searchText, setSearchText] = useState("");
  const searchAnimationController = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    onChangeHandle(debouncedSearchTextValue);
  }, [debouncedSearchTextValue, onChangeHandle]);

  const Animate = val => {
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
    Animate(0);
    inputRef.current.blur();
  };

  return (
    <Container flexDirection="row" alignItems="center" flex={1}>
      <Animated.View
        style={{
          ...styles.inputContainerStyles,
          width: searchInputWidth,
        }}
      >
        <Container pr={10}>
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
            Animate(1);
          }}
          onBlur={() => {
            if (!searchText) Animate(0);
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

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inputContainerStyles: {
    padding: 12,
    borderWidth: 1,
    borderColor: theme.colors.border.grey400,
    borderRadius: 8,
    flexDirection: "row",
  },
});
