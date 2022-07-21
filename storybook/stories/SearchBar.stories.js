import React, { useState } from "react";
import { Container, Typography, SearchBar } from "@components";
import { theme } from "@theme";

const keyBoardTypes = [
  "default",
  "email-address",
  "numeric",
  "ascii-capable",
  "decimal-pad",
  "number-pad",
  "phone-pad",
  "web-search",
];

const SearchBarMetaData = {
  title: "SearchBar",
  component: SearchBarDemo,
  argTypes: {
    keyboardType: {
      options: keyBoardTypes,
      control: {
        type: "select",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    debounceDelay: {
      control: { type: "number" },
    },
  },
  args: {
    placeholder: "Search",
    keyboardType: keyBoardTypes[0],
    debounceDelay: 1000,
  },
};

export default SearchBarMetaData;

export const Searchbar = () => {
  return (
    <>
      <Container mb={20}>
        <Typography py={2}>Default SearchBar</Typography>
        <SearchBar onChangeText={() => {}} />
      </Container>
      <Container mb={20}>
        <Typography py={2}>SearchBar With Custom placeholder</Typography>
        <SearchBar placeholder="Search here" onChangeText={() => {}} />
      </Container>
    </>
  );
};

export const SearchBarDemo = args => {
  const [searchedText, setSearchedText] = useState(0);

  return (
    <Container>
      <SearchBar {...args} onChangeText={setSearchedText} />
      <Typography py={2}>
        Searched expression is:
        <Typography fontFamily={theme.fonts.sf600}>{searchedText}</Typography>.
      </Typography>
      <Typography>
        Shown with a debounced delay of:
        <Typography fontFamily={theme.fonts.sf600}>
          {args.debounceDelay}
        </Typography>
      </Typography>
    </Container>
  );
};
