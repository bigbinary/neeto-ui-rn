import React from "react";

import { Touchable, ListItem, Typography, Container } from "@components";

const ListItemMetaData = {
  title: "ListItems",
  component: ListItem,
  args: {
    label: "List Item Component",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    notes:
      "Checkout the supported control/actions in control and actions section respectively.",
  },
};

export default ListItemMetaData;

export const ListItemDemo = args => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <ListItem {...args} RightComponent={() => <Typography>Text</Typography>} />
  </Container>
);

export const ListItems = () => (
  <Container alignItems="center">
    <ListItem
      LeftComponent={() => <Typography mr={2}>📣</Typography>}
      RightComponent={() => <Typography>oliversmith@bigbinary.com</Typography>}
      label="Organization"
      my={1}
    />
    <ListItem
      RightComponent={() => <Typography>Text</Typography>}
      label="Hello"
      my={1}
    />
    <ListItem
      label="Sample Project"
      my={1}
      RightComponent={() => (
        <Touchable p={1}>
          <Typography color="font.base">Add</Typography>
        </Touchable>
      )}
    />
  </Container>
);
