import React from "react";
import { Container, Chip, Typography } from "@components";
import { theme } from "@theme";

const variants = ["outlined", "solid"];
const labelColors = Object.keys(theme.colors.font).map(
  color => `font.${color}`
);
const iconBackground = Object.keys(theme.colors.background).map(
  color => `font.${color}`
);

const ChipStories = {
  title: "Chip",
  component: Chip,
  args: {
    variant: variants[0],
    label: "Chip Component",
    isDisabled: false,
    labelColor: labelColors[0],
    closeIconBackground: iconBackground[1],
    closeIconColor: "white",
    closeIconSize: 14,
    containerStyle: {
      padding: 10,
      backgroundColor: theme.colors.background.grey100,
    },
    closeIconContainerStyle: {
      backgroundColor: theme.colors.background.base,
    },
  },
  argTypes: {
    variant: {
      options: variants,
      control: {
        type: "select",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    onClose: {
      onClick: { action: "Close icon clicked" },
    },
    onChipPress: {
      onClick: { action: "Chip pressed" },
    },
    containerStyle: {
      control: {
        type: "object",
      },
    },
    labelColor: {
      options: labelColors,
      control: { type: "select" },
    },
    closeIconBackground: {
      options: iconBackground,
      control: {
        type: "select",
      },
    },
    closeIconColor: {
      control: {
        type: "text",
      },
    },
    closeIconSize: {
      control: {
        type: "number",
      },
    },
  },
  parameters: {
    notes:
      "Checkout the supported controls/actions in controls and actions section respectively.",
  },
};

export default ChipStories;

export const ChipDemo = args => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Chip {...args} />
    </Container>
  );
};

export const Chips = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container my={1}>
        <Chip
          label="Solid chip with icon"
          LeftIcon={() => <Typography>📣</Typography>}
          variant="solid"
          onClose={() => {
            alert("On Close clicked");
          }}
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Outlined chip with icon"
          LeftIcon={() => <Typography>📣</Typography>}
          variant="outlined"
          onClose={() => {
            alert("On Close clicked");
          }}
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Solid chip disabled"
          LeftIcon={() => <Typography>📣</Typography>}
          variant="solid"
          onClose={() => {
            alert("On Close clicked");
          }}
          isDisabled
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Outlined chip disabled"
          LeftIcon={() => <Typography>📣</Typography>}
          variant="outlined"
          onChipPress={() => {
            alert("Chip pressed");
          }}
          onClose={() => {
            alert("On Close clicked");
          }}
          isDisabled
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Outlined chip"
          variant="outlined"
          onClose={() => {
            alert("On Close clicked");
          }}
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Solid chip"
          variant="solid"
          onClose={() => {
            alert("On Close clicked");
          }}
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Default Chip"
          onChipPress={() => {
            alert("Chip pressed");
          }}
          variant="solid"
        />
      </Container>
    </Container>
  );
};
