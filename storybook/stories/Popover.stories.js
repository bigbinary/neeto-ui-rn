import React, { useContext } from "react";
import { Text } from "react-native";
import Icon from "react-native-remix-icon";
import { ThemeContext } from "styled-components/native";

import { Container, Button, Popover } from "@components";

const PopoverStories = {
  title: "PopOver",
  component: Popover,
};

export default PopoverStories;

export const Popovers = () => {
  const theme = useContext(ThemeContext);

  const data = [
    {
      label: "Search Product",
      Icon: () => {
        return (
          <Icon
            name="ri-search-line"
            size={20}
            color={theme.colors.background.grey800}
          />
        );
      },
      onPress: () => {
        alert("Clicked here");
      },
    },
    {
      label: "Create Product",
      Icon: () => {
        return (
          <Icon
            name="ri-search-line"
            size={20}
            color={theme.colors.background.grey800}
          />
        );
      },
      onPress: () => {
        alert("Clicked here");
      },
    },
  ];
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container p={2}>
        <Popover data={data} from={<Button label="With Data" />} />
      </Container>

      <Container p={2}>
        <Popover from={<Button label="With Custom Popup Content" />}>
          <Container bg="background.white" flex={1}>
            <Text>This is the contents of the popover</Text>
          </Container>
        </Popover>
      </Container>

      <Container p={2}>
        <Popover
          data={data}
          from={<Button label="With Custom Popup Content and data" />}
        >
          <Container bg="background.white" flex={1}>
            <Text>This is the contents of the popover</Text>
          </Container>
        </Popover>
      </Container>
    </Container>
  );
};
