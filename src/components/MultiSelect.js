import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import Icon from "react-native-remix-icon";
import { ThemeContext } from "styled-components/native";

import {
  BottomSheet,
  CheckBox,
  Container,
  Touchable,
  Typography,
} from "@components";

const MultiSelectItem = ({
  label,
  onUnselect,
  multiSelectedItemContainerStyle,
  multiSelectedItemLabelStyle,
}) => (
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
    <TouchableWithoutFeedback onPress={onUnselect}>
      <Icon name="ri-close-line" size="20" color="grey800" />
    </TouchableWithoutFeedback>
  </Container>
);

MultiSelectItem.propTypes = {
  label: PropTypes.string,
  onUnselect: PropTypes.func,
  multiSelectedItemContainerStyle: PropTypes.object,
  multiSelectedItemLabelStyle: PropTypes.object,
};

const DropdownItem = ({
  label,
  onPress,
  defaultDropdownItemHeight,
  itemContainerStyle,
  itemLabelStyle,
}) => {
  return (
    <Touchable bg="background.white" onPress={onPress}>
      <Container
        height={defaultDropdownItemHeight}
        p={2}
        {...itemContainerStyle}
      >
        <Typography
          fontFamily="sf400"
          fontSize="s"
          color="font.grey"
          {...itemLabelStyle}
        >
          {label}
        </Typography>
      </Container>
    </Touchable>
  );
};

DropdownItem.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  defaultDropdownItemHeight: PropTypes.number,
  itemContainerStyle: PropTypes.object,
  itemLabelStyle: PropTypes.object,
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
  placeholder,
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
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownAnimatedHeight = useSharedValue(0);

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

  const getValue = (item, index) => {
    return item?.value || valueExtractor(item, index);
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
      !!item?.label && (
        <Container py={12}>
          <CheckBox
            checked={itemIndex !== -1}
            onSelect={onPress}
            // checkboxContainerProp={containerStyle}
            label={item?.label || labelExtractor(item, index)}
          />
        </Container>
      )
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

  const handleUnselection = item => {
    const newValue = value.filter(
      selectedItem => valueExtractor(selectedItem) !== valueExtractor(item)
    );
    onSelect(newValue);
    deletedValue(item);
  };

  useEffect(() => {
    if (showDropdown) {
      dropdownAnimatedHeight.value = dropdownHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDropdown, dropdownHeight]);

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
          p={multipleOptionsSelected ? 1 : 2}
          pr={2}
          {...inputContainerStyle}
          {...rest}
        >
          <Typography
            fontFamily="sf400"
            mb={1}
            fontSize="xs"
            color="font.grey600"
            ml={1}
            {...labelStyle}
          >
            {label}
          </Typography>
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {!multipleOptionsSelected && (
              <Typography fontFamily="sf400" fontSize="s" color="font.grey">
                {!multipleOptionsSelected && placeholder}
              </Typography>
            )}
            {multipleOptionsSelected && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Container
                  flexWrap="wrap"
                  flexDirection="row"
                  maxWidth="85%"
                  onStartShouldSetResponder={() => true}
                >
                  {value?.map((item, index) => {
                    const optionLabel = labelExtractor(item, index);
                    return (
                      <MultiSelectItem
                        key={index}
                        label={optionLabel}
                        onUnselect={() => handleUnselection(item)}
                        multiSelectedItemContainerStyle={
                          multiSelectedItemContainerStyle
                        }
                        multiSelectedItemLabelStyle={
                          multiSelectedItemLabelStyle
                        }
                      />
                    );
                  })}
                </Container>
              </ScrollView>
            )}
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
      </TouchableWithoutFeedback>

      <BottomSheet
        title={label}
        onItemPress={({ item }) => {
          handleCheckbox(item);
          selectedValue(item);
        }}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  /**
   * The text to be displayed if no option is selected.
   */
  placeholder: PropTypes.string,
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
   * Custom label for creating searched option not present in the options list
   */
  createOptionLabel: PropTypes.string,
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
   * To customise dropdown item text styles.
   */
  itemLabelStyle: PropTypes.object,
  /**
   * To customise item container styles for multi selected items.
   */
  multiSelectedItemContainerStyle: PropTypes.object,
  /**
   * To customise item text styles for multi selected item.
   */
  multiSelectedItemLabelStyle: PropTypes.object,
  /**
   * To customise search input containerr style.
   */
  searchInputContainerStyle: PropTypes.object,
  /**
   * To customise search input style.
   */
  searchInputStyle: PropTypes.object,
  /**
   * To customise empty options placeholder container style.
   */
  emptyOptionsContainerStyle: PropTypes.object,
  /**
   * To customise empty options placeholder text style.
   */
  emptyOptionsLabelStyle: PropTypes.object,
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
};

MultiSelect.defaultProps = {
  label: null,
  placeholder: "Select Option",
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
  createOptionLabel: null,
  onPressCreateOption: () => {},
  onDonePress: () => {},
};
