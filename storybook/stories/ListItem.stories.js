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

export const ListItemDemo = args => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <ListItem {...args} value={() => <Typography>Text</Typography>} />
    </Container>
  );
};

export const ListItems = () => {
  return (
    <Container alignItems="center">
      <ListItem
        LeftComponent={() => <Typography mr={2}>📣</Typography>}
        label="Organization"
        RightComponent={() => <Typography>Bigbinary</Typography>}
      />
      <ListItem
        label="Hello"
        RightComponent={() => <Typography>Text</Typography>}
      />
      <ListItem
        label="Sample Project"
        RightComponent={() => (
          <Touchable p={1}>
            <Typography color="font.base">Add</Typography>
          </Touchable>
        )}
      />
    </Container>
  );
};
