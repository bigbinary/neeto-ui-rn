import React, { useState } from "react";
import { Container, Button } from "@components";
import { OptionsMenu } from "../../src/components/OptionsMenu";

const OptionsMenuStories = {
  title: "OptionsMenu",
};
export default OptionsMenuStories;

export const OptionsMenuDemo = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <OptionsMenu
        hide={() => setShowOptions(false)}
        isVisible={showOptions}
        onDelete={() => {}}
        onEdit={() => {}}
        options={[
          {
            title: "Edit 2",
            iconName: "edit-2-line",
            onPress: () => {},
          },
        ]}
        renderDefault={false}
      />
      <Button
        width={200}
        my={10}
        label="Show Options"
        onPress={() => {
          setShowOptions(true);
        }}
      />
    </Container>
  );
};
