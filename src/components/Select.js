import React, { useState, useContext, useEffect } from "react";
import Icon from "react-native-remix-icon";
import PropTypes from "prop-types";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { ThemeContext } from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

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
      p={2}
      {...itemContainerStyle}
      {...(isSelectedItem && selectedItemContainerStyle)}
    >
      <Typography
        fontFamily="sf400"
        fontSize="s"
        color={isSelectedItem ? "font.white" : "font.grey"}
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
  const emptyOptionsPlaceholderHeight = 40;
  const emptySearchedOptionsHeight = 40;
  const searchInputHeight = 35;
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
  const selectedOptionLabel = labelExtractor(value || {});
  const selectedOptionValue = valueExtractor(value || {});

  const animatedStyles = useAnimatedStyle(() => {
    return {
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
    };
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDropdown, dropdownHeight]);

  return (
    <Container {...containerStyle}>
      <Typography
        fontFamily="sf400"
        mb={1}
        fontSize="s"
        color="font.base"
        {...labelStyle}
      >
        {label}
      </Typography>
      <TouchableWithoutFeedback
        disabled={isLoading}
        onPress={handleOpenDropdown}
      >
        <Container
          borderWidth={1}
          borderColor="border.grey400"
          p={2}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          {...inputContainerStyle}
          {...rest}
        >
          <Typography fontFamily="sf400" fontSize="s" color="font.grey">
            {selectedOptionLabel || placeholder}
          </Typography>
          {isLoading ? (
            <Loader color={theme.colors.background.base} />
          ) : (
            <Icon
              name={`arrow-${showDropdown ? "up" : "down"}-s-line`}
              size="20"
              color="grey"
            />
          )}
        </Container>
      </TouchableWithoutFeedback>
      {showDropdown && (
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
                    <Loader size="s" color={theme.colors.background.base} />
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
                      key={index}
                      label={optionLabel}
                      isSelectedItem={isSelectedItem}
                      defaultDropdownItemHeight={defaultDropdownItemHeight}
                      onPress={() => handleItemSelection(item, index)}
                      itemContainerStyle={itemContainerStyle}
                      selectedItemContainerStyle={selectedItemContainerStyle}
                      itemLabelStyle={itemLabelStyle}
                      selectedItemLabelStyle={selectedItemLabelStyle}
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
   * To customise dropdown item container styles for selected item.
   */
  selectedItemContainerStyle: PropTypes.object,
  /**
   * To customise dropdown item text styles for selected item.
   */
  selectedItemLabelStyle: PropTypes.object,
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
