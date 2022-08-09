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

  const handleCheckbox = index => {
    const oldData = [...value];
    const item = options[index];
    const itemIndex = value.indexOf(item);
    if (itemIndex === -1) {
      oldData.push(item);
    } else {
      oldData.splice(itemIndex, 1);
    }
    onSelect(oldData);
  };

  const CheckBoxContent = ({ label, onPress, id }) => {
    const current = options[id]?.value || valueExtractor(options[id], id);
    const selected = value.some(
      (item, i) => (item?.value || valueExtractor(item, i)) === current
    );
    return (
      !!label && (
        <Container py={12}>
          <CheckBox
            checked={selected}
            onSelect={onPress}
            // checkboxContainerProp={containerStyle}
            label={label}
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
    label: PropTypes.string,
    onPress: PropTypes.func,
    id: PropTypes.number,
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
          maxHeight={120}
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
        onItemPress={index => {
          handleCheckbox(index);
        }}
        ContentRow={CheckBoxContent}
        contentType="checkbox"
        data={options.map(
          (item, index) => item.label || labelExtractor(item, index)
        )}
        canSearch={isSearchable}
        isVisible={showDropdown}
        hide={() => setShowDropdown(false)}
      />
      {/* <Container overflow="hidden">
          <Animated.View style={animatedStyles}>
            <Card
              bg="background.white"
              borderWidth={1}
              borderColor="border.grey400"
              maxHeight={dropdownHeight}
              {...dropdownContainerStyle}
            >
              {isSearchable && (
                <Container p={1} {...searchInputContainerStyle}>
                  <Input
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    fontSize="s"
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyles={{
                      height: searchInputHeight,
                      justifyContent: "center",
                    }}
                    {...searchInputStyle}
                  />
                </Container>
              )}
              {isOptionsEmpty && !(isSearchedOptionsEmpty && showCreateOption) && (
                <Container
                  height={emptyOptionsPlaceholderHeight}
                  justifyContent="center"
                  alignItems="center"
                  {...emptyOptionsContainerStyle}
                >
                  <Typography
                    fontFamily="sf400"
                    fontSize="s"
                    color="font.grey"
                    {...emptyOptionsLabelStyle}
                  >
                    {emptyOptionsPlaceholder || "No Options"}
                  </Typography>
                </Container>
              )}

              {isSearchedOptionsEmpty && showCreateOption && (
                <Touchable
                  height={emptySearchedOptionsHeight}
                  justifyContent="center"
                  alignItems="center"
                  onPress={() => onPressCreateOption(searchQuery)}
                  {...createSearchedOptionContainerStyle}
                >
                  {showCreateOptionLoader ? (
                    <ActivityIndicator
                      size="small"
                      color={theme.colors.background.base}
                    />
                  ) : (
                    <Typography
                      fontFamily="sf400"
                      fontSize="s"
                      color="font.grey"
                      {...createSearchedOptionLabelStyle}
                    >
                      {createOptionLabel || `Create ${searchQuery} option`}
                    </Typography>
                  )}
                </Touchable>
              )}
              {/* Animation not working without this hidden input */}
      {/* <Container height={0}>
                <Input />
              </Container>
              <ScrollView>
                {filteredOptions.map((item, index) => {
                  const optionLabel = labelExtractor(item, index);
                  return (
                    <DropdownItem
                      key={index}
                      label={optionLabel}
                      onPress={() => handleSelection(item)}
                      itemContainerStyle={itemContainerStyle}
                      defaultDropdownItemHeight={defaultDropdownItemHeight}
                      itemLabelStyle={itemLabelStyle}
                    />
                  );
                })}
              </ScrollView>
            </Card>
          </Animated.View>
        </Container>
      </BottomSheet> */}
      {/* {showDropdown && (
        <Container overflow="hidden">
          <Animated.View style={animatedStyles}>
            <Card
              bg="background.white"
              borderWidth={1}
              borderColor="border.grey400"
              maxHeight={dropdownHeight}
              {...dropdownContainerStyle}
            >
              {isSearchable && (
                <Container p={1} {...searchInputContainerStyle}>
                  <Input
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    fontSize="s"
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyles={{
                      height: searchInputHeight,
                      justifyContent: "center",
                    }}
                    {...searchInputStyle}
                  />
                </Container>
              )}
              {isOptionsEmpty && !(isSearchedOptionsEmpty && showCreateOption) && (
                <Container
                  height={emptyOptionsPlaceholderHeight}
                  justifyContent="center"
                  alignItems="center"
                  {...emptyOptionsContainerStyle}
                >
                  <Typography
                    fontFamily="sf400"
                    fontSize="s"
                    color="font.grey"
                    {...emptyOptionsLabelStyle}
                  >
                    {emptyOptionsPlaceholder || "No Options"}
                  </Typography>
                </Container>
              )}

              {isSearchedOptionsEmpty && showCreateOption && (
                <Touchable
                  height={emptySearchedOptionsHeight}
                  justifyContent="center"
                  alignItems="center"
                  onPress={() => onPressCreateOption(searchQuery)}
                  {...createSearchedOptionContainerStyle}
                >
                  {showCreateOptionLoader ? (
                    <ActivityIndicator
                      size="small"
                      color={theme.colors.background.base}
                    />
                  ) : (
                    <Typography
                      fontFamily="sf400"
                      fontSize="s"
                      color="font.grey"
                      {...createSearchedOptionLabelStyle}
                    >
                      {createOptionLabel || `Create ${searchQuery} option`}
                    </Typography>
                  )}
                </Touchable>
              )} */}
      {/* Animation not working without this hidden input */}
      {/* <Container height={0}>
                <Input />
              </Container>
              <ScrollView>
                {filteredOptions.map((item, index) => {
                  const optionLabel = labelExtractor(item, index);
                  return (
                    <DropdownItem
                      key={index}
                      label={optionLabel}
                      onPress={() => handleSelection(item)}
                      itemContainerStyle={itemContainerStyle}
                      defaultDropdownItemHeight={defaultDropdownItemHeight}
                      itemLabelStyle={itemLabelStyle}
                    />
                  );
                })}
              </ScrollView>
            </Card>
          </Animated.View>
        </Container>
      )} */}
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
  ).isRequired,
  /**
   * The text to be displayed if no option is selected.
   */
  placeholder: PropTypes.string,
  /**
   * The text to be displayed if no options are provided.
   */
  emptyOptionsPlaceholder: PropTypes.string,
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
};

MultiSelect.defaultProps = {
  label: null,
  placeholder: "Select Option",
  emptyOptionsPlaceholder: null,
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
};
