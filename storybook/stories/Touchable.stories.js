import React from "react";
import { Touchable, Typography } from "@components";

const TouchableMetaData = {
  title: "Touchable",
  component: TouchableDemo,
  argTypes: {},
  args: {},
};

export default TouchableMetaData;

export const Touchables = () => {
  return (
    <>
      <Touchable
        bg="background.secondary"
        width="100px"
        height="30px"
        justifyContent="center"
        alignItems="center"
        rippleContainerBorderRadius={50}
      >
        <Typography fontSize="14px">Touchable</Typography>
      </Touchable>
      <Touchable
        bg="background.secondary"
        width="200px"
        height="30px"
        justifyContent="center"
        alignItems="center"
        rippleContainerBorderRadius={50}
        elevation={10}
        mt={10}
      >
        <Typography fontSize="14px">Touchable with elevation</Typography>
      </Touchable>
    </>
  );
};

export const TouchableDemo = args => {
  return <Touchable {...args} />;
};
