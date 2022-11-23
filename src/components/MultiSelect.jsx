import React, { useContext, useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import PropTypes from "prop-types";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
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

import { BottomSheet, CheckBox, Container, Alert, Loader } from "@components";

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
      alignItems="center"
      bg="background.secondary"
      borderRadius={12}
      flexDirection="row"
      justifyContent="space-between"
      m={1}
      px={2}
      py={1}
      {...multiSelectedItemContainerStyle}
    >
      <Typography
        color="font.grey800"
        fontFamily="sf400"
        fontSize="s"
        mr={2}
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
            color={theme.colors.font.grey800}
            name="ri-close-line"
            size="20"
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

const AnimatedLabel = Animated.createAnimatedComponent(Typography);

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
  dropdownContainerStyle,
  itemContainerStyle,
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
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownAnimatedHeight = useSharedValue(0);
  const animatedLabelValue = useSharedValue(0);

  const formatStr = str => str?.toLowerCase()?.trim();
  const filteredOptions = options
    .filter((item, index) => {
      const optionValue = valueExtractor(item, index);
      const isItemAlreadySelected = Boolean(
        value?.find(
          selectedItem => valueExtractor(selectedItem) === optionValue
        )
      );

      return !isItemAlreadySelected;
    })
    .filter((item, index) => {
      const optionLabel = labelExtractor(item, index);
      if (searchQuery.length === 0) return true;

      return formatStr(optionLabel).includes(formatStr(searchQuery));
    });

  const isOptionsEmpty = !options || options?.length === 0;
  const isSearchedOptionsEmpty =
    searchQuery.length > 0 && filteredOptions.length === 0;
  const emptyOptionsPlaceholderHeight = 40;
  const emptySearchedOptionsHeight = 40;
  const searchInputHeight = 35;
  const multipleOptionsSelected = value?.length > 0;
  const defaultDropdownItemHeight = itemContainerStyle?.height || 32;
  const dropdownHeight =
    dropdownContainerStyle?.height ||
    dropdownContainerStyle?.maxHeight ||
    defaultDropdownItemHeight * Math.min(filteredOptions?.length, 6) +
      (isSearchable ? searchInputHeight + 10 : 0) +
      (isOptionsEmpty && !(isSearchedOptionsEmpty && showCreateOption)
        ? emptyOptionsPlaceholderHeight
        : 0) +
      (isSearchedOptionsEmpty && showCreateOption
        ? emptySearchedOptionsHeight
        : 0);

  const getValue = (item, index) =>
    item?.value || valueExtractor(item, index) || item;

  const getLabel = (item, index) =>
    item?.label || labelExtractor(item, index) || item;

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
          checked={itemIndex !== -1}
          disabled={disabled}
          label={item?.label || labelExtractor(item, index) || item}
          onSelect={onPress}
        />
      </Container>
    );
  };

  const handleOpenDropdown = () => {
    Keyboard.dismiss();
    setSearchQuery("");
    if (!showDropdown) {
      setShowDropdown(true);
    }

    if (showDropdown) {
      dropdownAnimatedHeight.value = 0;
    }
  };

  const handleUnSelection = item => {
    const newValue = value.filter(
      selectedItem => valueExtractor(selectedItem) !== valueExtractor(item)
    );
    onSelect(newValue);
    deletedValue(item);
  };

  useEffect(() => {
    animatedLabelValue.value = withTiming(
      value.length || showDropdown ? 1 : 0,
      {
        duration: 250,
      }
    );
  }, [value, showDropdown]);

  useEffect(() => {
    if (showDropdown) {
      dropdownAnimatedHeight.value = dropdownHeight;
    }
  }, [showDropdown, dropdownHeight]);

  CheckBoxContent.propTypes = {
    onPress: PropTypes.func,
    item: PropTypes.object,
    index: PropTypes.number,
  };

  const animatedStyles = useAnimatedStyle(() => ({
    top: interpolate(animatedLabelValue.value, [0, 1], [7, -5]),
    fontSize: interpolate(animatedLabelValue.value, [0, 1], [17, 13]),
    color: "font.grey600",
  }));

  return (
    <Container {...containerStyle}>
      <TouchableWithoutFeedback
        disabled={isLoading}
        onPress={handleOpenDropdown}
      >
        <Container
          borderColor={showDropdown ? "border.base" : "border.grey400"}
          borderRadius={12}
          borderWidth={1}
          minHeight={58}
          p={2}
          pr={2}
          {...inputContainerStyle}
          {...rest}
        >
          <Container
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
          >
            <AnimatedLabel
              position="absolute"
              style={[animatedStyles, { marginLeft: 5, ...labelStyle }]}
              zIndex={1}
            >
              {label}
            </AnimatedLabel>
            {!multipleOptionsSelected && <Container />}
            {multipleOptionsSelected && (
              <Container
                flexDirection="row"
                flexWrap="wrap"
                maxWidth="85%"
                mt={3}
                onStartShouldSetResponder={() => true}
              >
                {value?.slice(0, maxItemSize).map((item, index) => (
                  <MultiSelectItem
                    confirmationAlertObj={confirmationAlertObj}
                    disabled={disabled}
                    key={index}
                    label={getLabel(item)}
                    multiSelectedItemLabelStyle={multiSelectedItemLabelStyle}
                    multiSelectedItemContainerStyle={
                      multiSelectedItemContainerStyle
                    }
                    onUnselect={() => handleUnSelection(item)}
                  />
                ))}
                {value?.length > maxItemSize &&
                  (!MoreItemComponent ? (
                    <Container
                      alignItems="center"
                      bg="background.secondary"
                      borderRadius={12}
                      flexDirection="row"
                      justifyContent="space-between"
                      m={1}
                      px={2}
                      py={1}
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
            <Container mt={10}>
              {isLoading ? (
                <Loader color={theme.colors.background.base} />
              ) : (
                <Icon
                  color="grey"
                  name={`arrow-${showDropdown ? "up" : "down"}-s-line`}
                  size="20"
                />
              )}
            </Container>
          </Container>
        </Container>
      </TouchableWithoutFeedback>
      <BottomSheet
        ContentRow={CheckBoxContent}
        CreateItemComponent={CreateItemComponent}
        NoResultsComponent={NoResultsComponent}
        canSearch={isSearchable}
        contentType="checkbox"
        createSearchedOptionContainerStyle={createSearchedOptionContainerStyle}
        createSearchedOptionLabelStyle={createSearchedOptionLabelStyle}
        data={options}
        disabled={disabled}
        hide={() => setShowDropdown(false)}
        isVisible={showDropdown}
        labelExtractor={labelExtractor}
        noResultsLabel={noResultsLabel}
        noResultsLabelContainerStyle={noResultsLabelContainerStyle}
        noResultsLabelStyle={noResultsLabelStyle}
        searchBarProps={searchBarProps}
        showCreateOption={showCreateOption}
        showCreateOptionLoader={showCreateOptionLoader}
        title={label}
        valueExtractor={valueExtractor}
        onBackdropPress={onBackdropPress}
        onDonePress={onDonePress}
        onPressCreateOption={onPressCreateOption}
        onItemPress={({ item }) => {
          handleCheckbox(item);
          selectedValue(item);
        }}
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
   * To customise dropdown container styles.
   */
  dropdownContainerStyle: PropTypes.object,
  /**
   * To customise dropdown item container styles.
   */
  itemContainerStyle: PropTypes.object,
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