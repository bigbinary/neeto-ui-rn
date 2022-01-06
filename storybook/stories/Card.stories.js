import React from "react";
import { Card, Typography } from "@components";

const CardMetaData = {
  title: "Card",
  component: CardDemo,
  argTypes: {},
  args: {},
};

export default CardMetaData;

export const Cards = () => {
  return (
    <>
      <Card height="100px" width="100px" bg="background.danger" elevation={5}>
        <Typography fontSize="14px">Card</Typography>
      </Card>
      <Card height="100px" width="100px" bg="background.danger" mt={10}>
        <Typography fontSize="14px">Card</Typography>
      </Card>
      <Card
        height="100px"
        width="100px"
        bg="background.danger"
        elevation={20}
        mt={10}
      >
        <Typography fontSize="14px">Card</Typography>
      </Card>
    </>
  );
};

export const CardDemo = args => {
  return <Card {...args} />;
};
