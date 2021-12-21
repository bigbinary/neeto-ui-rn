import React, { useState } from "react";
import { Button, Container, BottomSheet, Typography } from "@components";

const TypographyStories = {
  title: "Bottom Sheet",
  component: BottomSheet,
  args: {
    data: ["neeto-ui-rn", "aceinvoice-rn", "", "reactnative-hq"],
  },
  argTypes: {
    data: {
      separator: ",",
      control: { type: "array" },
    },
  },
  parameters: {
    layout: "padded",
  },
};
export default TypographyStories;

export const BottomSheetDemo = args => {
  const [bottomSheetVisibility, setBottomSheetVisibility] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Button
        label="Select Project"
        onPress={() => setBottomSheetVisibility(true)}
      />
      <BottomSheet
        maxHeight={200}
        isVisible={bottomSheetVisibility}
        hide={() => {
          setBottomSheetVisibility(false);
        }}
        onItemPress={index => {
          setSelectedItemIndex(index);
        }}
        title="PROJECT"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
      />
      {selectedItemIndex !== null && (
        <Typography
          py={50}
          alignText="center"
          fontSize="l"
          color="font.secondary"
          fontFamily="inter700"
        >
          {`Selected Item: ${args.data[selectedItemIndex]}`}
        </Typography>
      )}
    </Container>
  );
};
