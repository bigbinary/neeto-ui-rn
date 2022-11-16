import React from "react";

import { Card, Typography } from "@components";

const CardMetaData = {
  title: "Card",
  component: CardDemo,
  argTypes: {},
  args: {},
};

export default CardMetaData;

export const Cards = () => (
  <>
    <Card bg="background.danger" elevation={5} height="100px" width="100px">
      <Typography fontSize="14px">Card</Typography>
    </Card>
    <Card bg="background.danger" height="100px" mt={10} width="100px">
      <Typography fontSize="14px">Card</Typography>
    </Card>
    <Card
      bg="background.danger"
      elevation={20}
      height="100px"
      mt={10}
      width="100px"
    >
      <Typography fontSize="14px">Card</Typography>
    </Card>
  </>
);

export const CardDemo = args => <Card {...args} />;
