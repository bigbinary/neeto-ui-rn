/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-remix-icon";
import styled, { ThemeContext } from "styled-components/native";
import {
  flexbox,
  space,
  typography,
  textStyle,
  color,
  layout,
  system,
  position,
} from "styled-system";

import { BottomSheet, CheckBox, Container, Alert } from "@components";

const Typography = styled.Text`
  ${textStyle}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${color}
  ${position}
  ${system({
    textDecoration: {
      property: "textDecoration",
      cssProperty: "textDecoration",
    },
    textTransform: { property: "textTransform", cssProperty: "textTransform" },
  })}
`;

const MultiSelectItem = ({
  label,
  onUnselect,
  multiSelectedItemContainerStyle,
  multiSelectedItemLabelStyle,
  disabled,
  confirmationAlertObj = {},
}) => {
  const theme = useContext(ThemeContext);
  const {
    alertTitle = "Delete tag",
    alertDescription = `Are you sure you want to delete tag: ${label}? This action cannot be undone.`,
    alertConfirmButtonLabel = "Proceed",
    showDeleteAlertConfirmation = true,
  } = confirmationAlertObj;

  const handleItemUnSelection = () => {
    showDeleteAlertConfirmation
      ? Alert.show({
          title: alertTitle,
          description: alertDescription,
          buttons: [
            {
              label: alertConfirmButtonLabel,
              variant: "danger",
              onPress: () => {
                onUnselect();
              },
            },
            {
              label: "Cancel",
              onPress: () => {},
            },
          ],
        })
      : onUnselect();
  };

  return (
    <Container
      bg="background.secondary"
      borderRadius={12}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={1}
      m={1}
      {...multiSelectedItemContainerStyle}
    >
      <Typography
        fontFamily="sf400"
        fontSize="s"
        mr={2}
        color="font.grey800"
        {...multiSelectedItemLabelStyle}
      >
        {label}
      </Typography>
      {!disabled && (
        <TouchableWithoutFeedback
          disabled={disabled}
          onPress={handleItemUnSelection}
        >
          <Icon
            name="ri-close-line"
            size="20"
            color={theme.colors.font.grey800}
          />
        </TouchableWithoutFeedback>
      )}
    </Container>
  );
};

MultiSelectItem.propTypes = {
  label: PropTypes.string,
  onUnselect: PropTypes.func,
  multiSelectedItemContainerStyle: PropTypes.object,
  multiSelectedItemLabelStyle: PropTypes.object,
  disabled: PropTypes.bool,
  confirmationAlertObj: PropTypes.object,
};

/**
 *
 * MultiSelect can be used to select multiple options from a list of options.
 *
 * <div class="screenshots">
 *   <img src="screenshots/multiSelect/multiSelect.png" />
 * </div>
 *
 * ## Usage
 *
 * ### Import and use MultiSelect component.
 *
 * ```js
 * import * as React, { useState } from 'react';
 * import { MultiSelect, Container } from '@bigbinary/neetoui-rn';
 *
 * const OPTIONS = [
 *  {
 *    label: "Option 1",
 *    value: "option_1"
 *  },
 *  {
 *    label: "Option 2",
 *    value: "option_2"
 *  },
 * ]
 *
 * export default function Main() {
 *  const [selectedOptions, setSelectedOptions] = useState([])
 *
 *  return (
 *    <MultiSelect
 *      label="Select"
 *      options={OPTIONS}
 *      value={selectedOptions}
 *      onSelect={setSelectedOptions}
 *    />
 *  );
 * }
 * ```
 */

export const MultiSelect = ({
  options,
  label,
  value,
  labelExtractor,
  valueExtractor,
  onSelect,
  deletedValue,
  isLoading,
  isSearchable,
  showCreateOption,
  labelStyle,
  containerStyle,
  inputContainerStyle,
  multiSelectedItemContainerStyle,
  multiSelectedItemLabelStyle,
  selectedValue,
  CreateItemComponent,
  showCreateOptionLoader,
  createSearchedOptionLabelStyle,
  onPressCreateOption,
  createSearchedOptionContainerStyle,
  onDonePress,
  disabled,
  noResultsLabelContainerStyle,
  noResultsLabelStyle,
  noResultsLabel,
  NoResultsComponent,
  maxItemSize,
  moreItemLabelContainerStyle,
  moreItemLabelStyle,
  MoreItemComponent,
  onBackdropPress,
  searchBarProps,
  confirmationAlertObj,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const multipleOptionsSelected = value?.length > 0;

  const getValue = (item, index) => {
    return item?.value || valueExtractor(item, index) || item;
  };

  const getLabel = (item, index) => {
    return item?.label || labelExtractor(item, index) || item;
  };

  const handleCheckbox = item => {
    const oldData = [...value];
    const index = value.findIndex(
      (data, index) => getValue(data, index) === getValue(item)
    );

    if (index === -1) {
      oldData.push(item);
    } else {
      oldData.splice(index, 1);
    }
    onSelect(oldData);
  };

  const CheckBoxContent = ({ onPress, item, index }) => {
    const itemIndex = value.findIndex(
      (data, i) => getValue(data, i) === getValue(item, index)
    );

    return (
      <Container py={12}>
        <CheckBox
          disabled={disabled}
          checked={itemIndex !== -1}
          onSelect={onPress}
          label={item?.label || labelExtractor(item, index) || item}
        />
      </Container>
    );
  };

  const handleOpenDropdown = () => {
    Keyboard.dismiss();
    if (!showDropdown) {
      setShowDropdown(true);
    }
  };

  const handleUnSelection = item => {
    const newValue = value.filter(
      selectedItem => valueExtractor(selectedItem) !== valueExtractor(item)
    );
    onSelect(newValue);
    deletedValue(item);
  };

  CheckBoxContent.propTypes = {
    onPress: PropTypes.func,
    item: PropTypes.object,
    index: PropTypes.number,
  };

  return (
    <Container {...containerStyle}>
      <TouchableWithoutFeedback
        disabled={isLoading}
        onPress={handleOpenDropdown}
      >
        <Container
          borderRadius={12}
          borderWidth={1}
          borderColor={showDropdown ? "border.base" : "border.grey400"}
          p={2}
          pr={2}
          minHeight={58}
          justifyContent="center"
          {...inputContainerStyle}
          {...rest}
        >
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              position="absolute"
              zIndex={1}
              top={multipleOptionsSelected ? "-6" : "0%"}
              ml={1}
              color="font.grey600"
              fontSize={multipleOptionsSelected ? "xs" : "xl"}
              {...labelStyle}
            >
              {label}
            </Typography>
            {!multipleOptionsSelected && <Container />}
            {multipleOptionsSelected && (
              <Container
                flexWrap="wrap"
                flexDirection="row"
                maxWidth="85%"
                onStartShouldSetResponder={() => true}
                mt={3}
              >
                {value?.slice(0, maxItemSize).map((item, index) => {
                  return (
                    <MultiSelectItem
                      key={index}
                      label={getLabel(item)}
                      onUnselect={() => handleUnSelection(item)}
                      multiSelectedItemContainerStyle={
                        multiSelectedItemContainerStyle
                      }
                      multiSelectedItemLabelStyle={multiSelectedItemLabelStyle}
                      disabled={disabled}
                      confirmationAlertObj={confirmationAlertObj}
                    />
                  );
                })}
                {value?.length > maxItemSize &&
                  (!MoreItemComponent ? (
                    <Container
                      bg="background.secondary"
                      borderRadius={12}
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      px={2}
                      py={1}
                      m={1}
                      {...moreItemLabelContainerStyle}
                    >
                      <Typography {...moreItemLabelStyle}>
                        +{value?.length - maxItemSize} More
                      </Typography>
                    </Container>
                  ) : (
                    <MoreItemComponent />
                  ))}
              </Container>
            )}
            <Container>
              {isLoading ? (
                <ActivityIndicator
                  size="small"
                  color={theme.colors.background.base}
                />
              ) : (
                <Icon
                  name={`arrow-${showDropdown ? "up" : "down"}-s-line`}
                  size="20"
                  color="grey"
                />
              )}
            </Container>
          </Container>
        </Container>
      </TouchableWithoutFeedback>

      <BottomSheet
        title={label}
        onItemPress={({ item }) => {
          handleCheckbox(item);
          selectedValue(item);
        }}
        disabled={disabled}
        onDonePress={onDonePress}
        isVisible={showDropdown}
        hide={() => setShowDropdown(false)}
        canSearch={isSearchable}
        data={options}
        contentType="checkbox"
        ContentRow={CheckBoxContent}
        showCreateOption={showCreateOption}
        CreateItemComponent={CreateItemComponent}
        showCreateOptionLoader={showCreateOptionLoader}
        createSearchedOptionLabelStyle={createSearchedOptionLabelStyle}
        onPressCreateOption={onPressCreateOption}
        createSearchedOptionContainerStyle={createSearchedOptionContainerStyle}
        noResultsLabelContainerStyle={noResultsLabelContainerStyle}
        noResultsLabelStyle={noResultsLabelStyle}
        noResultsLabel={noResultsLabel}
        NoResultsComponent={NoResultsComponent}
        valueExtractor={valueExtractor}
        labelExtractor={labelExtractor}
        onBackdropPress={onBackdropPress}
        searchBarProps={searchBarProps}
      />
    </Container>
  );
};

MultiSelect.propTypes = {
  /**
   * The text to use for the floating label.
   */
  label: PropTypes.string,
  /**
   * options to populate the options dropdown.
   */
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  /**
   * Use custom key as label.
   */
  labelExtractor: PropTypes.func,
  /**
   * Use custom key as value.
   */
  valueExtractor: PropTypes.func,
  /**
   * The selected value to show for the Select input.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Callback function when an option is selected, receives an array of object of options selected.
   */
  onSelect: PropTypes.func,
  /**
   * Callback function when an option is selected, receives the selected option object.
   */
  selectedValue: PropTypes.func,
  /**
   * Callback function when an option is selected, receives the deleted option object.
   */
  deletedValue: PropTypes.func,
  /**
   * Used to show if the dropdown is loading state, while loading Select input will be disabled.
   */
  isLoading: PropTypes.bool,
  /**
   * Toggle Search bar within the options dropdown to search through the options.
   */
  isSearchable: PropTypes.bool,
  /**
   * Callback that will be called on Done button press
   */
  onDonePress: PropTypes.func,
  /**
   * Show option to create the searched label if not present in the options list
   */
  showCreateOption: PropTypes.bool,
  /**
   * Show loader while creating a searched option not present in the options list
   */
  showCreateOptionLoader: PropTypes.bool,
  /**
   * Callback when create searched option is pressed
   */
  onPressCreateOption: PropTypes.func,
  /**
   * To customise floating label styles.
   */
  labelStyle: PropTypes.object,
  /**
   * To customise outermost container style.
   */
  containerStyle: PropTypes.object,
  /**
   * To customise Select input container styles.
   */
  inputContainerStyle: PropTypes.object,
  /**
   * To customise item container styles for multi selected items.
   */
  multiSelectedItemContainerStyle: PropTypes.object,
  /**
   * To customise item text styles for multi selected item.
   */
  multiSelectedItemLabelStyle: PropTypes.object,
  /**
   * To customise confirmation alert popup.
   */
  confirmationAlertObj: PropTypes.object,
  /**
   * To customise empty options placeholder container style.
   */
  createSearchedOptionContainerStyle: PropTypes.object,
  /**
   * To customise empty options placeholder text style.
   */
  createSearchedOptionLabelStyle: PropTypes.object,
  /**
   * Component that renders when searched item doesn't exists
   */
  CreateItemComponent: PropTypes.node,
  /**
   * Flag will disable the selection of the item
   */
  disabled: PropTypes.bool,
  /**
   * To customize no results container style
   */
  noResultsLabelContainerStyle: PropTypes.object,
  /**
   * To customize no results label style
   */
  noResultsLabelStyle: PropTypes.object,
  /**
   * To customize no results label
   */
  noResultsLabel: PropTypes.string,
  /**
   * To customize no results component
   */
  NoResultsComponent: PropTypes.node,
  /**
   * Maximum number of items to render in the list
   */
  maxItemSize: PropTypes.number,
  /**
   * Container style for the more item label
   */
  moreItemLabelContainerStyle: PropTypes.object,
  /**
   * More item label style
   */
  moreItemLabelStyle: PropTypes.object,
  /**
   * Custom component to render more item message
   */
  MoreItemComponent: PropTypes.node,
  /**
   * Function to customize back drop press
   */
  onBackdropPress: PropTypes.func,
  /**
   * Object to update the searchbar component
   */
  searchBarProps: PropTypes.object,
};

MultiSelect.defaultProps = {
  label: null,
  labelExtractor: option => option?.label,
  valueExtractor: option => option?.value,
  value: null,
  onSelect: () => {},
  selectedValue: () => {},
  deletedValue: () => {},
  isLoading: false,
  isSearchable: false,
  showCreateOption: false,
  showCreateOptionLoader: false,
  onPressCreateOption: () => {},
  onDonePress: () => {},
  maxItemSize: 5,
  onBackdropPress: () => {},
  searchBarProps: {},
  confirmationAlertObj: {},
};
