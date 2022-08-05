import React from "react";
import Icon from "react-native-remix-icon";

import { Button, Container } from "@components";
import { theme } from "@theme";

const variants = ["text", "solid", "danger", "danger-inverse", "danger-text"];

const ButtonMetaData = {
  title: "Buttons",
  component: Button,
  args: {
    label: "Button Component",
    variant: variants[1],
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    variant: {
      options: variants,
      control: {
        type: "select",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    onPress: { action: "pressed the button" },
  },
  parameters: {
    notes:
      "Checkout the supported control/actions in control and actions section respectively.",
  },
};

export default ButtonMetaData;

export const ButtonDemo = args => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Button {...args} />
    </Container>
  );
};

export const Buttons = () => {
  return (
    <Container alignItems="center" flex={1}>
      <Button my={9} label="Default Button is solid" />
      <Button
        my={9}
        isLoading={true}
        loadingText="Loading..."
        label="Default Loading Button"
      />
      <Button my={9} isLoading={true} label="Default Loading Button" />
      <Button my={9} disabled label="Default Disabled Button" />
      <Button my={9} variant="danger" label="Danger Button" />
      <Button my={9} disabled variant="danger" label="Danger Disabled Button" />
      <Button my={9} variant="danger-inverse" label="Danger Inverse Button" />
      <Button
        my={9}
        isLoading={true}
        loadingText="Loading..."
        variant="danger-inverse"
        label="Danger Inverse Button"
      />
      <Button my={9} variant="danger-text" label="Danger Plain Button" />
      <Button
        my={9}
        LeftIcon={() => <Icon name="ri-add-line" color="white" size={16} />}
        label="Left Icon Button"
      />
      <Button
        my={9}
        RightIcon={() => <Icon name="ri-add-line" color="white" size={16} />}
        label="Right Icon Button"
      />
      <Button my={9} variant="text" label="Text Button" />
      <Button
        my={9}
        variant="text"
        LeftIcon={() => (
          <Icon name="ri-add-line" color={theme.fonts.primary} size={16} />
        )}
        label="Left Icon Text Button"
      />
      <Button
        my={9}
        variant="text"
        RightIcon={() => (
          <Icon name="ri-add-line" color={theme.fonts.primary} size={16} />
        )}
        label="Right Icon Text Button"
      />
    </Container>
  );
};
