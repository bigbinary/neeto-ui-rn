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
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ThemeContext } from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

import { Container, Input, Touchable, Typography, Card } from "@components";

const MultiSelectItem = ({
  label,
  onUnselect,
  multiSelectedItemContainerStyle,
  multiSelectedItemTextStyle,
}) => (
  <Container
    borderWidth={1}
    borderColor="border.base"
    bg="background.grey100"
    borderRadius={2}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    p={1}
    m={1}
    {...multiSelectedItemContainerStyle}
  >
    <Typography
      fontFamily="inter400"
      fontSize="s"
      mr={2}
      maxWidth="90%"
      {...multiSelectedItemTextStyle}
    >
      {label}
    </Typography>
    <TouchableWithoutFeedback onPress={onUnselect}>
      <Icon name="ri-close-line" size="20" color="grey" />
    </TouchableWithoutFeedback>
  </Container>
);

MultiSelectItem.propTypes = {
  label: PropTypes.string,
  onUnselect: PropTypes.func,
  multiSelectedItemContainerStyle: PropTypes.object,
  multiSelectedItemTextStyle: PropTypes.object,
};

const DropdownItem = ({
  label,
  onPress,
  defaultDropdownItemHeight,
  itemContainerStyle,
  itemTextStyle,
}) => {
  return (
    <Touchable bg="background.white" onPress={onPress}>
      <Container
        height={defaultDropdownItemHeight}
        p={2}
        {...itemContainerStyle}
      >
        <Typography
          fontFamily="inter400"
          fontSize="s"
          color="font.grey"
          {...itemTextStyle}
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
  itemTextStyle: PropTypes.object,
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
  emptyOptionsPlaceholder,
  labelExtractor,
  valueExtractor,
  onSelect,
  selectedValue,
  deletedValue,
  isLoading,
  isSearchable,
  labelStyle,
  containerStyle,
  inputContainerStyle,
  dropdownContainerStyle,
  itemContainerStyle,
  itemTextStyle,
  multiSelectedItemContainerStyle,
  multiSelectedItemTextStyle,
  searchInputContainerStyle,
  searchInputStyle,
  emptyOptionsContainerStyle,
  emptyOptionsTextStyle,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownAnimatedHeight = useSharedValue(0);

  const isOptionsEmpty = !options || options?.length === 0;
  const emptyOptionsPlaceholderHeight = 40;
  const searchInputHeight = 35;
  const multipleOptionsSelected = value?.length > 0;
  const defaultDropdownItemHeight = itemContainerStyle?.height || 32;
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

  const dropdownHeight =
    dropdownContainerStyle?.height ||
    dropdownContainerStyle?.maxHeight ||
    defaultDropdownItemHeight * Math.min(filteredOptions?.length, 6) +
      (isSearchable ? searchInputHeight + 10 : 0) +
      (isOptionsEmpty ? emptyOptionsPlaceholderHeight : 0);

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
  });

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

  const handleSelection = item => {
    onSelect([...value, item]);
    selectedValue(item);
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
        fontFamily="inter400"
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
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          p={multipleOptionsSelected ? 1 : 2}
          pr={2}
          maxHeight={120}
          {...inputContainerStyle}
          {...rest}
        >
          {!multipleOptionsSelected && (
            <Typography fontFamily="inter400" fontSize="s" color="font.grey">
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
                      multiSelectedItemTextStyle={multiSelectedItemTextStyle}
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
              {isOptionsEmpty && (
                <Container
                  height={emptyOptionsPlaceholderHeight}
                  justifyContent="center"
                  alignItems="center"
                  {...emptyOptionsContainerStyle}
                >
                  <Typography
                    fontFamily="inter400"
                    fontSize="s"
                    color="font.grey"
                    {...emptyOptionsTextStyle}
                  >
                    {emptyOptionsPlaceholder || "No Options"}
                  </Typography>
                </Container>
              )}
              {/* Animation not working without this hidden input */}
              <Container height={0}>
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
                      itemTextStyle={itemTextStyle}
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
  itemTextStyle: PropTypes.object,
  /**
   * To customise item container styles for multi selected items.
   */
  multiSelectedItemContainerStyle: PropTypes.object,
  /**
   * To customise item text styles for multi selected item.
   */
  multiSelectedItemTextStyle: PropTypes.object,
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
  emptyOptionsTextStyle: PropTypes.object,
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
};
