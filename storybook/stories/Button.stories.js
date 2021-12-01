import React from "react";
import { Button, Typography } from "@components";

const ButtonMetaData = {
  title: "Buttons",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {},
};

export default ButtonMetaData;

export const Buttons = () => {
  return (
    <>
      <Button my={9} label="Default is solid" />
      <Button my={9} disabled label="Default Disbaled" />
      <Button my={9} variant="solid" disbaled label="Solid Button" />
      <Button my={9} variant="solid" disabled label="Solid Button Disabled" />
      <Button my={9} variant="inverse" label="Inverse Button" />
      <Button
        my={9}
        variant="inverse"
        disabled
        label="Invese Button Disabled"
      />
      <Button my={9} variant="text" label="Text Button" />
      <Button my={9} variant="text" disabled label="Text Button Disabled" />
      <Button
        my={9}
        variant="inverse"
        label="Like"
        RightIcon={() => {
          return <Typography>👍</Typography>;
        }}
      />
      <Button
        my={9}
        variant="inverse"
        label="Subscribe and Follow"
        RightIcon={() => {
          return <Typography>🔔</Typography>;
        }}
        LeftIcon={() => {
          return <Typography>📣</Typography>;
        }}
      />
      <Button
        my={9}
        variant="inverse"
        disabled
        label="Unsubscribe Disabled"
        RightIcon={() => {
          return <Typography>🔕</Typography>;
        }}
      />
    </>
  );
};
