import React from "react";
import { ActivityIndicator } from "react-native";

import { Button, Typography, Container } from "@components";
import { theme } from "@theme";

const variants = ["text", "inverse", "solid"];
const fontColors = Object.keys(theme.colors.font).map(color => `font.${color}`);
const backgroundColors = Object.keys(theme.colors.background).map(
  color => `background.${color}`
);

const ButtonMetaData = {
  title: "Buttons",
  component: Button,
  args: {
    label: "Button Component",
    variant: variants[1],
    backgroundColor: backgroundColors[1],
    color: fontColors[3],
    disabled: false,
    isLoading: false,
    loadingText: "Loading...",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    color: {
      options: fontColors,
      control: {
        type: "select",
      },
    },
    backgroundColor: {
      options: backgroundColors,
      control: {
        type: "select",
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
    loadingText: {
      control: {
        type: "text",
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
    <Container alignItems="center">
      <Button my={9} width={200} label="Default is solid" />
      <Button my={9} width={200} disabled label="Default Disabled" />
      <Button
        my={9}
        width={200}
        variant="solid"
        disabled
        label="Solid Button"
      />
      <Button
        my={9}
        width={200}
        variant="solid"
        disabled
        label="Solid Button Disabled"
      />
      <Button my={9} width={200} variant="inverse" label="Inverse Button" />
      <Button
        my={9}
        width={200}
        variant="inverse"
        disabled
        label="Invese Button Disabled"
      />
      <Button my={9} width={200} variant="text" label="Text Button" />
      <Button
        my={9}
        width={200}
        variant="text"
        disabled
        label="Text Button Disabled"
      />
      <Button
        my={9}
        width={200}
        variant="inverse"
        label="Like"
        RightIcon={() => {
          return <Typography>👍</Typography>;
        }}
      />
      <Button
        my={9}
        width={200}
        variant="inverse"
        label="Subscribe and Follow"
        RightIcon={() => <Typography>🔔</Typography>}
        LeftIcon={() => <Typography>📣</Typography>}
      />
      <Button
        my={9}
        width={200}
        variant="inverse"
        disabled
        label="Unsubscribe Disabled"
        RightIcon={() => <Typography>🔕</Typography>}
      />
      <Button
        my={9}
        width={200}
        bg="background.primary"
        color="font.danger"
        label="Logout"
      />
      <Button
        my={9}
        width={200}
        bg="background.primary"
        color="font.danger"
        fontSize="xl"
        label="Bigger Button"
      />
      <Button
        my={9}
        width={200}
        fontFamily="sf400"
        label="Regular SF Pro Text 400"
      />
      <Button
        my={9}
        width={200}
        variant="inverse"
        label="Icon in extreme right"
        RightIcon={() => {
          return (
            <Container flex={1} alignItems="flex-end">
              <Typography>🔔</Typography>
            </Container>
          );
        }}
      />

      <Button
        my={9}
        isLoading={true}
        Loader={() => <ActivityIndicator size="small" color="white" />}
        width={200}
        label="Solid Loading "
      />
      <Button
        my={9}
        isLoading={true}
        Loader={() => <ActivityIndicator size="small" color="white" />}
        width={200}
        loadingText=""
        label="Solid Loading "
      />
      <Button
        my={9}
        isLoading={true}
        Loader={() => <ActivityIndicator size="small" color="black" />}
        width={200}
        variant="inverse"
        label="Inverse Loading "
      />
      <Button
        my={9}
        isLoading={true}
        Loader={() => <ActivityIndicator size="small" color="black" />}
        width={200}
        variant="text"
        label="Text Loading"
      />
      <Button
        my={9}
        isLoading={true}
        Loader={() => <ActivityIndicator size="small" color="black" />}
        width={200}
        variant="text"
        loadingText="Ordering Pizza..."
        label="Text Loading"
        RightIcon={() => {
          return (
            <Container>
              <Typography>🍕</Typography>
            </Container>
          );
        }}
      />
    </Container>
  );
};
