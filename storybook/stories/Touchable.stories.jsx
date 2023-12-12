import React from "react";

import { Touchable, Typography } from "@components";

const TouchableMetaData = {
  title: "Touchable",
  component: TouchableDemo,
  argTypes: {},
  args: {},
};

export default TouchableMetaData;

export const Touchables = () => (
  <>
    <Touchable
      alignItems="center"
      bg="background.secondary"
      height="30px"
      justifyContent="center"
      rippleConfig={{ containerBorderRadius: 50 }}
      width="100px"
    >
      <Typography fontSize="14px">Touchable</Typography>
    </Touchable>
    <Touchable
      alignItems="center"
      bg="background.secondary"
      elevation={10}
      height="30px"
      justifyContent="center"
      mt={10}
      rippleConfig={{ containerBorderRadius: 50 }}
      width="200px"
    >
      <Typography fontSize="14px">Touchable with elevation</Typography>
    </Touchable>
  </>
);

export const TouchableDemo = args => <Touchable alignItems="center"
  bg="background.secondary"
  height="30px"
  justifyContent="center"
  rippleConfig={{ containerBorderRadius: 50 }}
  width="100px" {...args} ><Typography fontSize="14px">Touchable</Typography>
</Touchable>;
