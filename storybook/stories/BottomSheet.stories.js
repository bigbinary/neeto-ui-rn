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
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Button
        label="Select Project"
        onPress={() => setBottomSheetVisible(true)}
      />
      <BottomSheet
        isVisible={bottomSheetVisible}
        hide={() => {
          setBottomSheetVisible(false);
        }}
        onItemPress={({ item }) => {
          setSelectedItem(item);
        }}
        title="Select Multi Options"
        data={args.data}
        selectedItem={selectedItem}
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
      {selectedItem !== null && (
        <Typography
          py={50}
          alignText="center"
          fontSize="l"
          color="font.secondary"
          fontFamily="sf700"
        >
          Selected Item: {selectedItem}
        </Typography>
      )}
    </Container>
  );
};

export const BottomSheets = args => {
  const [bottomSheetOneVisible, setBottomSheetOneVisible] = useState(false);
  const [bottomSheetTwoVisible, setBottomSheetTwoVisible] = useState(false);
  const [bottomSheetThreeVisible, setBottomSheetThreeVisible] = useState(false);
  const [bottomSheetFourVisible, setBottomSheetFourVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
        onPress={() => setBottomSheetOneVisible(true)}
        m={2}
      />
      <Button
        label="Select Project with Radio buttons"
        onPress={() => setBottomSheetTwoVisible(true)}
        m={2}
      />
      <Button
        label="Select Project with checkboxes"
        onPress={() => setBottomSheetThreeVisible(true)}
        m={2}
      />
      <Button
        label="Bottom Sheet with only children component"
        onPress={() => setBottomSheetFourVisible(true)}
        m={2}
      />
      <BottomSheet
        maxHeight={500}
        isVisible={bottomSheetOneVisible}
        hide={() => {
          setBottomSheetOneVisible(false);
        }}
        onItemPress={({ item }) => {
          setSelectedItem(item);
        }}
        title="Select an Option"
        data={args.data}
        selectedItem={selectedItem}
        ContentRow={TextContent}
        canSearch
      />
      <BottomSheet
        isVisible={bottomSheetTwoVisible}
        hide={() => {
          setBottomSheetTwoVisible(false);
        }}
        onItemPress={({ item }) => {
          setSelectedItem(item);
        }}
        title="Select an Option"
        data={args.data}
        selectedItem={selectedItem}
        ContentRow={RadioContent}
        canSearch
      >
        <Typography> Cant find your option? </Typography>
      </BottomSheet>
      <BottomSheet
        maxHeight={500}
        isVisible={bottomSheetThreeVisible}
        hide={() => {
          setBottomSheetThreeVisible(false);
        }}
        onItemPress={handleCheckbox}
        title="Select Multi Options"
        data={args.data}
        selectedItem={selectedItem}
        ContentRow={CheckBoxContent}
        contentType="checkbox"
        canSearch
      />
      <BottomSheet
        isVisible={bottomSheetFourVisible}
        hide={() => {
          setBottomSheetFourVisible(false);
        }}
      >
        <Typography> Bottom Sheet with children only</Typography>
      </BottomSheet>
      {selectedItem !== null && (
        <Typography
          py={50}
          alignText="center"
          fontSize="l"
          color="font.secondary"
          fontFamily="sf700"
        >
          Selected Item: {selectedItem.value}
        </Typography>
      )}
    </Container>
  );
};
