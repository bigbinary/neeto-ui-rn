import React, { useContext, useState } from "react";

import { Container, RadioButton } from "@components";
import useSystemTheme from 'react-use-system-theme';
import { ThemeContext } from "styled-components/native";

const RadioButtonStories = {
  title: "RadioButton",
  component: RadioButton,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    selected: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    disabled: false,
    selected: false,
    label: "Radio button demo",
  },
};

export default RadioButtonStories;

export const RadioButtonDemo = args => {
  const { selected, disabled, label } = args;
  const systemTheme = useSystemTheme();
  const theme = useContext(ThemeContext);

  return (
    <Container alignItems="center" flex={1} justifyContent="center">
      <RadioButton
        disabled={disabled}
        label={label}
        selected={selected}
        onSelect={() => { }}
        labelStyle={systemTheme === "dark" && { color: theme.colors.font.grey600 }}
        selectIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}

      />
    </Container>
  );
};

export const RadioButtonComponent = () => {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);
  const systemTheme = useSystemTheme();
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <RadioButton
        label={`Radio button marked as ${!selected1 ? "un" : ""}selected`}
        mt={2}
        selected={selected1}
        onSelect={() => setSelected1(prev => !prev)}
        labelStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
        selectIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
      />
      <RadioButton
        label={`Radio button marked as ${!selected2 ? "un" : ""}selected`}
        mt={3}
        selected={selected2}
        onSelect={() => setSelected2(prev => !prev)}
        labelStyle={systemTheme === "dark" && { color: theme.colors.font.grey600 }}
        selectIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
      />
      <RadioButton disabled label="Disabled radio button" mt={3} selectIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey600 }}
        labelStyle={systemTheme === "dark" && { color: theme.colors.font.grey600 }} />
      <RadioButton
        disabled
        selected
        label="Disabled and selected radio button"
        mt={3}
        selectIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
      />
    </Container>
  );
};
