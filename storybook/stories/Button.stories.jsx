import React from "react";

import { Plus } from "@bigbinary/neeto-icons-rn";

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

export const ButtonDemo = args => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <Button {...args} />
  </Container>
);

export const Buttons = () => (
  <Container alignItems="center" flex={1}>
    <Button label="Default Button is solid" my={9} />
    <Button
      isLoading
      label="Default Loading Button"
      loadingText="Loading..."
      my={9}
    />
    <Button isLoading label="Default Loading Button" my={9} />
    <Button disabled label="Default Disabled Button" my={9} />
    <Button label="Danger Button" my={9} variant="danger" />
    <Button disabled label="Danger Disabled Button" my={9} variant="danger" />
    <Button label="Secondary Button" my={9} variant="secondary" />
    <Button
      disabled
      label="Secondary Disabled Button"
      my={9}
      variant="secondary"
    />
    <Button label="Danger Inverse Button" my={9} variant="danger-inverse" />
    <Button
      isLoading
      label="Danger Inverse Button"
      loadingText="Loading..."
      my={9}
      variant="danger-inverse"
    />
    <Button label="Danger Plain Button" my={9} variant="danger-text" />
    <Button
      LeftIcon={() => <Plus color="white" size={16} />}
      label="Left Icon Button"
      my={9}
    />
    <Button
      RightIcon={() => <Plus color="white" size={16} />}
      label="Right Icon Button"
      my={9}
    />
    <Button label="Text Button" my={9} variant="text" />
    <Button disabled label="Text Button" my={9} variant="text" />
    <Button
      label="Left Icon Text Button"
      my={9}
      variant="text"
      LeftIcon={() => (
        <Plus color={theme.fonts.primary} name="ri-add-line" size={16} />
      )}
    />
    <Button
      label="Right Icon Text Button"
      my={9}
      variant="text"
      RightIcon={() => <Plus color={theme.fonts.primary} size={16} />}
    />
    <Button
      isLoading
      label="Right Icon Text Button"
      loadingText="Loading with text variant..."
      my={9}
      variant="text"
      RightIcon={() => <Plus color={theme.fonts.primary} size={16} />}
    />
  </Container>
);
