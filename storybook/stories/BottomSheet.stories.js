import React, { useState } from "react";
import {
  Button,
  Container,
  BottomSheet,
  Typography,
  Touchable,
  RadioButton,
  CheckBox,
} from "@components";
import PropTypes from "prop-types";

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
  const [bottomSheetVisible, setbottomSheetVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Button
        label="Select Project"
        onPress={() => setbottomSheetVisible(true)}
      />
      <BottomSheet
        maxHeight={224}
        isVisible={bottomSheetVisible}
        hide={() => {
          setbottomSheetVisible(false);
        }}
        onItemPress={index => {
          setSelectedItemIndex(index);
        }}
        title="Select Multi Options"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
        ContentRow={({ label, onPress, isSelected }) => {
          return (
            !!label && (
              <Container py={12}>
                <RadioButton
                  selected={isSelected}
                  onSelect={onPress}
                  label={label}
                  labelPosition="right"
                />
              </Container>
            )
          );
        }}
      />
      {selectedItemIndex !== null && (
        <Typography
          py={50}
          alignText="center"
          fontSize="l"
          color="font.secondary"
          fontFamily="sf700"
        >
          Selected Item: {args.data[selectedItemIndex]}
        </Typography>
      )}
    </Container>
  );
};

export const BottomSheets = args => {
  const [bottomSheetOneVisible, setbottomSheetOneVisible] = useState(false);
  const [bottomSheetTwoVisible, setbottomSheetTwoVisible] = useState(false);
  const [bottomSheetThreeVisible, setbottomSheetThreeVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckbox = index => {
    const oldData = [...selectedValues];
    const itemIndex = selectedValues.indexOf(index);
    if (itemIndex === -1) {
      oldData.push(index);
    } else {
      oldData.splice(itemIndex, 1);
    }
    setSelectedValues(oldData);
  };

  // Text Content
  const TextContent = ({ label, bg, onPress, isSelected }) => {
    return (
      !!label && (
        <>
          <Touchable bg={bg} py={12} borderRadius={20} onPress={onPress}>
            <Typography
              fontSize="l"
              fontFamily={isSelected ? "sf700" : "sf400"}
              color={isSelected ? "font.grey800" : "font.grey700"}
            >
              {label}
            </Typography>
          </Touchable>
        </>
      )
    );
  };

  // Radio Button
  const RadioContent = ({ label, onPress, isSelected }) => {
    return (
      !!label && (
        <Container py={12}>
          <RadioButton
            selected={isSelected}
            onSelect={onPress}
            label={label}
            labelPosition="right"
          />
        </Container>
      )
    );
  };

  const CheckBoxContent = ({ label, onPress, id }) => {
    return (
      !!label && (
        <Container py={12}>
          <CheckBox
            selected={selectedValues.indexOf(id) !== -1}
            onSelect={onPress}
            // checkboxContainerProp={containerStyle}
            label={label}
          />
        </Container>
      )
    );
  };

  TextContent.propTypes = {
    label: PropTypes.string,
    bg: PropTypes.string,
    onPress: PropTypes.func,
    isSelected: PropTypes.bool,
  };

  RadioContent.propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    isSelected: PropTypes.bool,
  };

  CheckBoxContent.propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    id: PropTypes.number,
  };

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Button
        label="Select Project with Labels"
        onPress={() => setbottomSheetOneVisible(true)}
        m={2}
      />
      <Button
        label="Select Project with Radio buttons"
        onPress={() => setbottomSheetTwoVisible(true)}
        m={2}
      />
      <Button
        label="Select Project with checkboxes"
        onPress={() => setbottomSheetThreeVisible(true)}
        m={2}
      />
      <BottomSheet
        maxHeight={500}
        isVisible={bottomSheetOneVisible}
        hide={() => {
          setbottomSheetOneVisible(false);
        }}
        onItemPress={index => {
          setSelectedItemIndex(index);
        }}
        title="Select an Option"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
        ContentRow={TextContent}
        canSearch
      />
      <BottomSheet
        maxHeight={224}
        isVisible={bottomSheetTwoVisible}
        hide={() => {
          setbottomSheetTwoVisible(false);
        }}
        onItemPress={index => {
          setSelectedItemIndex(index);
        }}
        title="Select an Option"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
        ContentRow={RadioContent}
      />
      <BottomSheet
        maxHeight={224}
        isVisible={bottomSheetThreeVisible}
        hide={() => {
          setbottomSheetThreeVisible(false);
        }}
        onItemPress={index => {
          handleCheckbox(index);
        }}
        title="Select Multi Options"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
        ContentRow={CheckBoxContent}
        contentType="checkbox"
      />
      {selectedItemIndex !== null && (
        <Typography
          py={50}
          alignText="center"
          fontSize="l"
          color="font.secondary"
          fontFamily="sf700"
        >
          Selected Item: {args.data[selectedItemIndex]}
        </Typography>
      )}
    </Container>
  );
};
