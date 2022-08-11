import React from "react";
import { Container, SegmentPicker, Typography } from "@components";
import PropTypes from "prop-types";
import { theme } from "@theme";

const CustomComponent = ({ route: { name } }) => {
  return (
    <Container>
      <Typography>{`This is "${name}" tab `}</Typography>
    </Container>
  );
};

const labelPositions = [
  { name: "left", Component: CustomComponent },
  { name: "right", Component: CustomComponent },
];

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
  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <SegmentPicker {...args} tabs={labelPositions} />
    </Container>
  );
};

export const SegmentPickers = () => {
  return (
    <Container flex={1}>
      <Container flex={1} my={3}>
        <SegmentPicker
          tabs={[
            { name: "On", Component: CustomComponent },
            { name: "Off", Component: CustomComponent },
          ]}
        />
      </Container>
      <Container flex={1} my={3}>
        <SegmentPicker
          tabs={[
            { name: "Tab1", Component: CustomComponent },
            { name: "Tab2", Component: CustomComponent },
            { name: "Tab3", Component: CustomComponent },
          ]}
        />
      </Container>
      <Container flex={1} my={3}>
        <SegmentPicker
          tabs={[
            { name: "On", Component: CustomComponent },
            { name: "Off", Component: CustomComponent },
          ]}
          inactiveSegmentStyle={{
            backgroundColor: theme.colors.background.purple100,
          }}
          activeSegmentStyle={{
            backgroundColor: theme.colors.background.purple500,
          }}
          activeTextStyle={{ color: theme.colors.font.white }}
          height={46}
        />
      </Container>
    </Container>
  );
};

CustomComponent.propTypes = {
  route: PropTypes.object,
};
