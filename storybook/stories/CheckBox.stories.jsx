import React, { useContext, useState } from "react";

import { Container, CheckBox } from "@components";
import useSystemTheme from 'react-use-system-theme';
import { ThemeContext } from "styled-components/native";

const CheckBoxStories = {
  title: "Checkbox",
  component: CheckBox,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    checked: {
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
    checked: false,
    label: "Checkbox demo",
  },
};

export default CheckBoxStories;

export const CheckBoxDemo = args => {
  const { checked, disabled, label } = args;
  const systemTheme = useSystemTheme();
  const theme = useContext(ThemeContext)
  
  return (
    <Container alignItems="center" flex={1} justifyContent="center">
      <CheckBox
        checked={checked}
        disabled={disabled}
        label={label}
        onSelect={() => { }}
        checkIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
      />
    </Container>
  );
};

export const CheckBoxComponent = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const systemTheme = useSystemTheme();
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <CheckBox
        checked={checked1}
        labelStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
        label={`Checkbox marked as ${!checked1 ? "un" : ""}checked`}
        mt={2}
        onSelect={() => setChecked1(prev => !prev)}
        checkIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
      />
      <CheckBox
        checked={checked2}
        systemTheme={systemTheme}
        label={`Checkbox marked as ${!checked2 ? "un" : ""}checked`}
        mt={3}
        onSelect={() => setChecked2(prev => !prev)}
        checkIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
      />
      <CheckBox disabled label="Disabled checkbox" mt={3} checkIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey600 }}/>
      <CheckBox
        checked
        systemTheme={systemTheme}
        disabled
        label="Disabled checkbox marked as checked"
        mt={3}
        checkIconStyle={systemTheme === "dark" && { color: theme.colors.font.grey400 }}
      />
    </Container>
  );
};
