import React from "react";
import { Container, Typography, FAB } from "@components";

const variants = ["solid", "inverse"];

const FABStories = {
  title: "FABs",
  component: FAB,
  args: {
    variant: variants[0],
    disabled: false,
  },
  argTypes: {
    variant: {
      options: variants,
      control: { type: "radios" },
    },
    disabled: {
      options: [true, false],
    },
    onPress: { action: "pressed the button" },
  },
  parameters: {
    notes: "Checkout the different props in controls section",
  },
};

export default FABStories;

export const FABSDemo = args => {
  return (
    <FAB
      Icon={() => {
        return <Typography>🔔</Typography>;
      }}
      {...args}
    />
  );
};

export const FABS = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flex={1} justifyContent="center">
        <Container flexDirection="row" alignItems="center">
          <FAB
            m={9}
            Icon={() => {
              return <Typography>🔔</Typography>;
            }}
          />
          <Typography>Default Button</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <FAB
            m={9}
            variant="inverse"
            Icon={() => {
              return <Typography>➕</Typography>;
            }}
          />
          <Typography>Inverse Button</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <FAB
            m={9}
            disabled
            Icon={() => {
              return <Typography>🔔</Typography>;
            }}
          />
          <Typography>Disabled Default Button</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <FAB
            m={9}
            variant="inverse"
            disabled
            Icon={() => {
              return <Typography>➕</Typography>;
            }}
          />
          <Typography>Disabled Inverse Button</Typography>
        </Container>

        <Container flexDirection="row" alignItems="center">
          <FAB
            m={9}
            Icon={() => {
              return <Typography>🔔</Typography>;
            }}
          />
          <Typography>Default Button with shadow style</Typography>
        </Container>
        <Container flexDirection="row" alignItems="center">
          <FAB
            m={9}
            bg="font.danger"
            Icon={() => {
              return <Typography>🔔</Typography>;
            }}
          />
          <Typography>Button with Background color</Typography>
        </Container>
      </Container>
    </Container>
  );
};
