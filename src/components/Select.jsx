import React, { useState, useContext, useEffect } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import PropTypes from "prop-types";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import Icon from "react-native-remix-icon";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

import {
  Card,
  Container,
  Input,
  Touchable,
  Typography,
  Loader,
} from "@components";

const DropdownItem = ({
  label,
  isSelectedItem,
  defaultDropdownItemHeight,
  onPress,
  itemContainerStyle,
  selectedItemContainerStyle,
  itemLabelStyle,
  selectedItemLabelStyle,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Container
      bg={isSelectedItem ? "background.base" : "background.white"}
      height={defaultDropdownItemHeight}
      p={moderateScale(2)}
      {...itemContainerStyle}
      {...(isSelectedItem && selectedItemContainerStyle)}
    >
      <Typography
        color={isSelectedItem ? "font.white" : "font.grey"}
        fontFamily="sf400"
        fontSize="s"
        {...itemLabelStyle}
        {...(isSelectedItem && selectedItemLabelStyle)}
      >
        {label}
      </Typography>
    </Container>
  </TouchableWithoutFeedback>
);

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  isSelectedItem: PropTypes.bool,
  defaultDropdownItemHeight: PropTypes.number,
  onPress: PropTypes.func,
  itemContainerStyle: PropTypes.object,
  selectedItemContainerStyle: PropTypes.object,
  itemLabelStyle: PropTypes.object,
  selectedItemLabelStyle: PropTypes.object,
};

/**
 *
 * Select can be used to select an option from a list of options.
 *
 * <div class="screenshots">
 *   <img src="screenshots/select/select1.png" />
 *   <img src="screenshots/select/select2.png" />
 * </div>
 *
 * ## Usage
 *
 * ### Import and use Select component.
 *
 * ```js
 * import * as React, { useState } from 'react';
 * import { Select, Container } from '@bigbinary/neetoui-rn';
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
 *  const [selectedOption, setSelectedOption] = useState(null)
 *
 *  return (
 *    <Select
 *      label="Select"
 *      options={OPTIONS}
 *      value={selectedOption}
 *      onSelect={setSelectedOption}
 *    />
 *  );
 * }
 * ```
 */

export const Select = ({
  options,
  label,
  value,
  placeholder,
  emptyOptionsPlaceholder,
  labelExtractor,
  valueExtractor,
  onSelect,
  isLoading,
  isSearchable,
  showCreateOption,
  showCreateOptionLoader,
  createOptionLabel,
  onPressCreateOption,
  labelStyle,
  containerStyle,
  inputContainerStyle,
  dropdownContainerStyle,
  itemContainerStyle,
  itemLabelStyle,
  selectedItemContainerStyle,
  selectedItemLabelStyle,
  searchInputContainerStyle,
  searchInputStyle,
  emptyOptionsContainerStyle,
  emptyOptionsLabelStyle,
  createSearchedOptionContainerStyle,
  createSearchedOptionLabelStyle,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownAnimatedHeight = useSharedValue(0);

  const formatStr = str => str?.toLowerCase()?.trim();
  const filteredOptions = options.filter((item, index) => {
    const label = labelExtractor(item, index);
    if (searchQuery?.length === 0) return true;

    return formatStr(label).includes(formatStr(searchQuery));
  });

  const isOptionsEmpty = !options || options?.length === 0;
  const isSearchedOptionsEmpty =
    searchQuery.length > 0 && filteredOptions.length === 0;
  const emptyOptionsPlaceholderHeight = moderateScale(40);
  const emptySearchedOptionsHeight = moderateScale(40);
  const searchInputHeight = moderateScale(35);
  const defaultDropdownItemHeight =
    itemContainerStyle?.height || moderateScale(32);

  const dropdownHeight =
    dropdownContainerStyle?.height ||
    dropdownContainerStyle?.maxHeight ||
    defaultDropdownItemHeight *
      Math.min(filteredOptions?.length, moderateScale(6)) +
      (isSearchable ? searchInputHeight + moderateScale(10) : 0) +
      (isOptionsEmpty && !(isSearchedOptionsEmpty && showCreateOption)
        ? emptyOptionsPlaceholderHeight
        : 0) +
      (isSearchedOptionsEmpty && showCreateOption
        ? emptySearchedOptionsHeight
        : 0);
  const selectedOptionLabel = labelExtractor(value || {});
  const selectedOptionValue = valueExtractor(value || {});

  const animatedStyles = useAnimatedStyle(
    () => ({
      height: withTiming(
        dropdownAnimatedHeight.value,
        {
          duration: 100,
          easing: Easing.ease,
        },
        () => {
          if (dropdownAnimatedHeight.value === 0) {
            runOnJS(setShowDropdown)(false);
          }
        }
      ),
    }),
    []
  );

  const toggleAnimation = () => {
    dropdownAnimatedHeight.value =
      dropdownAnimatedHeight.value === 0 ? dropdownHeight : 0;
  };

  const handleOpenDropdown = () => {
    Keyboard.dismiss();
    setSearchQuery("");
    if (!showDropdown) {
      setShowDropdown(true);
    }

    if (showDropdown) {
      toggleAnimation();
    }
  };

  const handleItemSelection = (item, index) => {
    toggleAnimation();
    onSelect(item, index);
  };

  useEffect(() => {
    if (showDropdown) {
      dropdownAnimatedHeight.value = dropdownHeight;
    }
  }, [showDropdown, dropdownHeight]);

  return (
    <Container {...containerStyle}>
      <Typography
        color="font.base"
        fontFamily="sf400"
        fontSize="s"
        mb={moderateScale(1)}
        {...labelStyle}
      >
        {label}
      </Typography>
      <TouchableWithoutFeedback
        disabled={isLoading}
        onPress={handleOpenDropdown}
      >
        <Container
          alignItems="center"
          borderColor="border.grey400"
          borderWidth={moderateScale(1)}
          flexDirection="row"
          justifyContent="space-between"
          p={moderateScale(2)}
          {...inputContainerStyle}
          {...rest}
        >
          <Typography color="font.grey" fontFamily="sf400" fontSize="s">
            {selectedOptionLabel || placeholder}
          </Typography>
          {isLoading ? (
            <Loader color={theme.colors.background.base} />
          ) : (
            <Icon
              color="grey"
              name={`arrow-${showDropdown ? "up" : "down"}-s-line`}
              size={moderateScale(20)}
            />
          )}
        </Container>
      </TouchableWithoutFeedback>
      {showDropdown && (
        <Container overflow="hidden">
          <Animated.View style={animatedStyles}>
            <Card
              bg="background.white"
              borderColor="border.grey400"
              borderWidth={moderateScale(1)}
              maxHeight={dropdownHeight}
              {...dropdownContainerStyle}
            >
              {isSearchable && (
                <Container p={moderateScale(1)} {...searchInputContainerStyle}>
                  <Input
                    fontSize="s"
                    placeholder="Search"
                    containerStyles={{
                      height: searchInputHeight,
                      justifyContent: "center",
                    }}
                    onChangeText={setSearchQuery}
                    {...searchInputStyle}
                  />
                </Container>
              )}
              {isOptionsEmpty && !(isSearchedOptionsEmpty && showCreateOption) && (
                <Container
                  alignItems="center"
                  height={emptyOptionsPlaceholderHeight}
                  justifyContent="center"
                  {...emptyOptionsContainerStyle}
                >
                  <Typography
                    color="font.grey"
                    fontFamily="sf400"
                    fontSize="s"
                    {...emptyOptionsLabelStyle}
                  >
                    {emptyOptionsPlaceholder || "No Options"}
                  </Typography>
                </Container>
              )}
              {isSearchedOptionsEmpty && showCreateOption && (
                <Touchable
                  alignItems="center"
                  height={emptySearchedOptionsHeight}
                  justifyContent="center"
                  onPress={() => onPressCreateOption(searchQuery)}
                  {...createSearchedOptionContainerStyle}
                >
                  {showCreateOptionLoader ? (
                    <Loader color={theme.colors.background.base} size="s" />
                  ) : (
                    <Typography
                      color="font.grey"
                      fontFamily="sf400"
                      fontSize="s"
                      {...createSearchedOptionLabelStyle}
                    >
                      {createOptionLabel || `Create ${searchQuery} option`}
                    </Typography>
                  )}
                </Touchable>
              )}
              {/* Animation not working without this hidden input */}
              <Container height={0}>
                <Input />
              </Container>
              <ScrollView>
                {filteredOptions.map((item, index) => {
                  const optionLabel = labelExtractor(item, index);
                  const optionValue = valueExtractor(item, index);
                  const isSelectedItem =
                    selectedOptionValue && selectedOptionValue === optionValue;

                  return (
                    <DropdownItem
                      defaultDropdownItemHeight={defaultDropdownItemHeight}
                      isSelectedItem={isSelectedItem}
                      itemContainerStyle={itemContainerStyle}
                      itemLabelStyle={itemLabelStyle}
                      key={index}
                      label={optionLabel}
                      selectedItemContainerStyle={selectedItemContainerStyle}
                      selectedItemLabelStyle={selectedItemLabelStyle}
                      onPress={() => handleItemSelection(item, index)}
                    />
                  );
                })}
              </ScrollView>
            </Card>
          </Animated.View>
        </Container>
      )}
    </Container>
  );
};

Select.propTypes = {
  /**
   * The text to use for the floating label.
   */
  label: PropTypes.string,
  /**
   * Data to populate the options dropdown.
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
  value: PropTypes.object,
  /**
   * Callback function when an option is selected, receives the select option object.
   */
  onSelect: PropTypes.func,
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
   * To customize floating label styles.
   */
  labelStyle: PropTypes.object,
  /**
   * To customize outermost container style.
   */
  containerStyle: PropTypes.object,
  /**
   * To customize Select input container styles.
   */
  inputContainerStyle: PropTypes.object,
  /**
   * To customize dropdown container styles.
   */
  dropdownContainerStyle: PropTypes.object,
  /**
   * To customize dropdown item container styles.
   */
  itemContainerStyle: PropTypes.object,
  /**
   * To customize dropdown item text styles.
   */
  itemLabelStyle: PropTypes.object,
  /**
   * To customize dropdown item container styles for selected item.
   */
  selectedItemContainerStyle: PropTypes.object,
  /**
   * To customize dropdown item text styles for selected item.
   */
  selectedItemLabelStyle: PropTypes.object,
  /**
   * To customize search input containerr style.
   */
  searchInputContainerStyle: PropTypes.object,
  /**
   * To customize search input style.
   */
  searchInputStyle: PropTypes.object,
  /**
   * To customize empty options placeholder container style.
   */
  emptyOptionsContainerStyle: PropTypes.object,
  /**
   * To customize empty options placeholder text style.
   */
  emptyOptionsLabelStyle: PropTypes.object,
  /**
   * To customize empty options placeholder container style.
   */
  createSearchedOptionContainerStyle: PropTypes.object,
  /**
   * To customize empty options placeholder text style.
   */
  createSearchedOptionLabelStyle: PropTypes.object,
};

Select.defaultProps = {
  label: null,
  placeholder: "Select Option",
  emptyOptionsPlaceholder: null,
  labelExtractor: option => option?.label,
  valueExtractor: option => option?.value,
  value: null,
  onSelect: () => {},
  isLoading: false,
  isSearchable: false,
  showCreateOption: false,
  showCreateOptionLoader: false,
  createOptionLabel: null,
  onPressCreateOption: () => {},
};
