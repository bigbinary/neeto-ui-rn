import React from "react";

import { Container, Typography, FAB } from "@components";

const variants = ["solid", "inverse"];

const FABStories = {
  title: "FABs",
  component: FAB,
  args: {
    variant: variants[0],
    disabled: false,
    bg: "",
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

export const FABSDemo = args => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <FAB
      Icon={() => <Typography>🔔</Typography>}
      onPress={() => alert("FAB clicked")}
      {...args}
    />
  </Container>
);

// eslint-disable-next-line @bigbinary/neeto/no-dangling-constants
export const FABS = () => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <Container flex={1} justifyContent="center">
      <Container alignItems="center" flexDirection="row">
        <FAB
          Icon={() => <Typography>🔔</Typography>}
          m={9}
          onPress={() => alert("FAB clicked")}
        />
        <Typography>Default Button</Typography>
      </Container>
      <Container alignItems="center" flexDirection="row">
        <FAB
          Icon={() => <Typography>➕</Typography>}
          m={9}
          variant="inverse"
          onPress={() => alert("FAB clicked")}
        />
        <Typography>Inverse Button</Typography>
      </Container>
      <Container alignItems="center" flexDirection="row">
        <FAB
          disabled
          Icon={() => <Typography>🔔</Typography>}
          m={9}
          onPress={() => alert("FAB clicked")}
        />
        <Typography>Disabled Default Button</Typography>
      </Container>
      <Container alignItems="center" flexDirection="row">
        <FAB
          disabled
          Icon={() => <Typography>➕</Typography>}
          m={9}
          variant="inverse"
          onPress={() => alert("FAB clicked")}
        />
        <Typography>Disabled Inverse Button</Typography>
      </Container>
      <Container alignItems="center" flexDirection="row">
        <FAB
          Icon={() => <Typography>🔔</Typography>}
          m={9}
          onPress={() => alert("FAB clicked")}
        />
        <Typography>Default Button with shadow style</Typography>
      </Container>
      <Container alignItems="center" flexDirection="row">
        <FAB
          Icon={() => <Typography>🔔</Typography>}
          bg="font.danger"
          m={9}
          onPress={() => alert("FAB clicked")}
        />
        <Typography>Button with Background color</Typography>
      </Container>
    </Container>
  </Container>
);
