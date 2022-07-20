import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { ThemeContext } from "styled-components/native";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

import { Container, Button } from "@components";
import { useDebounce } from "@hooks";

export const SearchBar = props => {
  const { placeholder = "Search", onChangeHandle = () => {}, ...rest } = props;
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTextValue = useDebounce(searchText, 1000);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    onChangeHandle(debouncedSearchTextValue);
  }, [debouncedSearchTextValue, onChangeHandle]);

  return (
    <Container flexDirection="row" alignItems="center">
      <Container
        p={12}
        borderWidth={1}
        borderColor="border.grey400"
        borderRadius={8}
        flexDirection="row"
        flexGrow={1}
      >
        <Container pr={10}>
          <Icon
            name="ri-search-line"
            size={20}
            color={theme.colors.font.primary}
          />
        </Container>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder={placeholder}
          fontSize={16}
          placeholderTextColor={theme.colors.font.grey600}
          color="font.primary"
          {...rest.searchbarProps}
        />
      </Container>
      <Button variant="text" label="Cancel" onPress />
    </Container>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
};
