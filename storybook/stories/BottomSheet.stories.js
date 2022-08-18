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
    data: [
      { label: "neetoInvoice-RN", value: "neetoInvoice-RN" },
      { label: "neetoPlanner-RN", value: "neetoPlanner-RN" },
      { label: "neetoStore-RN", value: "neetoStore-RN" },
      { label: "neetoStoreBusiness-RN", value: "neetoStoreBusiness-RN" },
      { label: "neetoDesk-RN", value: "neetoDesk-RN" },
      { label: "neetoQuiz-RN", value: "neetoQuiz-RN" },
      { label: "neetoChat-RN", value: "neetoChat-RN" },
      { label: "neetoForm-RN", value: "neetoForm-RN" },
      { label: "neetoCal-RN", value: "neetoCal-RN" },
      { label: "Bigbinary HQ", value: "Bigbinary HQ" },
    ],
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
        isVisible={bottomSheetVisible}
        hide={() => {
          setbottomSheetVisible(false);
        }}
        onItemPress={({ index }) => {
          setSelectedItemIndex(index);
        }}
        title="Select Multi Options"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
        ContentRow={({ item: { label }, onPress, isSelected }) => {
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
  const [bottomSheetFourVisible, setbottomSheetFourVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckbox = ({ item: { value } }) => {
    const oldData = [...selectedValues];
    const itemIndex = selectedValues.indexOf(value);
    if (itemIndex === -1) {
      oldData.push(value);
    } else {
      oldData.splice(itemIndex, 1);
    }
    setSelectedValues(oldData);
  };

  // Text Content
  const TextContent = ({ item: { label }, bg, onPress, isSelected }) => {
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
  const RadioContent = ({ item: { label }, onPress, isSelected }) => {
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

  const CheckBoxContent = ({ item: { label, value }, onPress }) => {
    return (
      !!label && (
        <Container py={12}>
          <CheckBox
            checked={selectedValues.indexOf(value) !== -1}
            onSelect={onPress}
            // checkboxContainerProp={containerStyle}
            label={label}
          />
        </Container>
      )
    );
  };

  TextContent.propTypes = {
    item: PropTypes.object,
    bg: PropTypes.string,
    onPress: PropTypes.func,
    isSelected: PropTypes.bool,
  };

  RadioContent.propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func,
    isSelected: PropTypes.bool,
  };

  CheckBoxContent.propTypes = {
    item: PropTypes.object,
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
      <Button
        label="Bottom Sheet with only children component"
        onPress={() => setbottomSheetFourVisible(true)}
        m={2}
      />
      <BottomSheet
        maxHeight={500}
        isVisible={bottomSheetOneVisible}
        hide={() => {
          setbottomSheetOneVisible(false);
        }}
        onItemPress={({ index }) => {
          setSelectedItemIndex(index);
        }}
        title="Select an Option"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
        ContentRow={TextContent}
        canSearch
      />
      <BottomSheet
        isVisible={bottomSheetTwoVisible}
        hide={() => {
          setbottomSheetTwoVisible(false);
        }}
        onItemPress={({ index }) => {
          setSelectedItemIndex(index);
        }}
        title="Select an Option"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
        ContentRow={RadioContent}
      >
        <Typography> Cant find your option? </Typography>
      </BottomSheet>
      <BottomSheet
        maxHeight={500}
        isVisible={bottomSheetThreeVisible}
        hide={() => {
          setbottomSheetThreeVisible(false);
        }}
        onItemPress={handleCheckbox}
        title="Select Multi Options"
        data={args.data}
        selectedItemIndex={selectedItemIndex}
        ContentRow={CheckBoxContent}
        contentType="checkbox"
        canSearch
      />
      <BottomSheet
        isVisible={bottomSheetFourVisible}
        hide={() => {
          setbottomSheetFourVisible(false);
        }}
      >
        <Typography> Bottom Sheet with children only</Typography>
      </BottomSheet>
      {selectedItemIndex !== null && (
        <Typography
          py={50}
          alignText="center"
          fontSize="l"
          color="font.secondary"
          fontFamily="sf700"
        >
          Selected Item: {args.data[selectedItemIndex].value}
        </Typography>
      )}
    </Container>
  );
};
