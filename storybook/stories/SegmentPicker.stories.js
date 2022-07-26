import React, { useState } from "react";
import { Container, SegmentPicker } from "@components";
import { theme } from "@theme";

const labelPositions = ["left", "right"];

const SegmentPickerStories = {
  title: "SegmentPickers",
  component: SegmentPicker,
  args: {
    label: "Segment Picker Demo",
  },
  argTypes: {
    onValueChange: {
      action: "pressed the button",
    },
  },
  parameters: {
    notes: "Checkout the different props in controls section",
  },
};

export default SegmentPickerStories;

export const SegmentPickerDemo = args => {
  const [tabIndex, setTabIndex] = useState(1);
  const handleTabsChange = index => {
    setTabIndex(index);
  };

  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <SegmentPicker
        {...args}
        tabs={labelPositions}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
      />
    </Container>
  );
};

export const SegmentPickers = () => {
  const [tab1Index, setTab1Index] = useState(0);
  const [tab2Index, setTab2Index] = useState(1);
  const [tab3Index, setTab3Index] = useState(0);
  const [tab4Index, setTab4Index] = useState(1);

  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <Container my={3}>
        <SegmentPicker
          tabs={["On", "Off"]}
          currentIndex={tab1Index}
          onChange={setTab1Index}
        />
      </Container>
      <Container my={3}>
        <SegmentPicker
          tabs={["Label 1", "Label 2", "Label 3"]}
          currentIndex={tab2Index}
          onChange={setTab2Index}
        />
      </Container>
      <Container my={3}>
        <SegmentPicker
          tabs={["Label 1", "Label 2", "Label 3", "Label 4"]}
          currentIndex={tab3Index}
          onChange={setTab3Index}
        />
      </Container>
      <Container my={3}>
        <SegmentPicker
          tabs={["Shop", "Discover", "Brands"]}
          currentIndex={tab4Index}
          onChange={setTab4Index}
          inactiveSegmentStyle={{
            backgroundColor: theme.colors.background.purple100,
          }}
          activeSegmentStyle={{
            backgroundColor: theme.colors.background.purple500,
          }}
          activeTextStyle={{ color: theme.colors.font.white }}
          py={18}
        />
      </Container>
    </Container>
  );
};
