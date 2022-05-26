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

import { Card, Container, Input, Typography } from "@components";

const DropdownItem = ({
  label,
  isSelectedItem,
  defaultDropdownItemHeight,
  onPress,
  itemContainerStyle,
  selectedItemContainerStyle,
  itemTextStyle,
  selectedItemTextStyle,
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
        fontFamily="inter400"
        fontSize="s"
        color={isSelectedItem ? "font.white" : "font.grey"}
        {...itemTextStyle}
        {...(isSelectedItem && selectedItemTextStyle)}
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
  itemTextStyle: PropTypes.object,
  selectedItemTextStyle: PropTypes.object,
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
  labelExtractor,
  valueExtractor,
  onSelect,
  isLoading,
  isSearchable,
  labelStyle,
  containerStyle,
  inputContainerStyle,
  dropdownContainerStyle,
  itemContainerStyle,
  itemTextStyle,
  selectedItemContainerStyle,
  selectedItemTextStyle,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownAnimatedHeight = useSharedValue(0);

  const searchInputHeight = 35;
  const defaultDropdownItemHeight = itemContainerStyle?.height || 32;
  const dropdownHeight =
    dropdownContainerStyle?.height ||
    dropdownContainerStyle?.maxHeight ||
    defaultDropdownItemHeight * Math.min(options?.length, 6) +
      (isSearchable ? searchInputHeight + 10 : 0);
  const selectedOptionLabel = labelExtractor(value || {});
  const selectedOptionValue = valueExtractor(value || {});
  const formatStr = str => str?.toLowerCase()?.trim();

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
      toggleAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDropdown]);

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
          p={2}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          {...inputContainerStyle}
          {...rest}
        >
          <Typography fontFamily="inter400" fontSize="s" color="font.grey">
            {selectedOptionLabel || placeholder}
          </Typography>
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
                <Container p={1}>
                  <Input
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    fontSize="s"
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyles={{
                      height: searchInputHeight,
                      justifyContent: "center",
                    }}
                  />
                </Container>
              )}
              {/* Animation not working without this hidden input */}
              <Container height={0}>
                <Input />
              </Container>
              <ScrollView>
                {options
                  .filter((item, index) => {
                    const label = labelExtractor(item, index);
                    if (searchQuery?.length === 0) return true;
                    return formatStr(label).includes(formatStr(searchQuery));
                  })
                  .map((item, index) => {
                    const optionLabel = labelExtractor(item, index);
                    const optionValue = valueExtractor(item, index);
                    const isSelectedItem =
                      selectedOptionValue &&
                      selectedOptionValue === optionValue;
                    return (
                      <DropdownItem
                        key={index}
                        label={optionLabel}
                        isSelectedItem={isSelectedItem}
                        defaultDropdownItemHeight={defaultDropdownItemHeight}
                        onPress={() => handleItemSelection(item, index)}
                        itemContainerStyle={itemContainerStyle}
                        selectedItemContainerStyle={selectedItemContainerStyle}
                        itemTextStyle={itemTextStyle}
                        selectedItemTextStyle={selectedItemTextStyle}
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
   * To customise dropdown item container styles for selected item.
   */
  selectedItemContainerStyle: PropTypes.object,
  /**
   * To customise dropdown item text styles for selected item.
   */
  selectedItemTextStyle: PropTypes.object,
};

Select.defaultProps = {
  label: null,
  placeholder: "Select Option",
  labelExtractor: option => option?.label,
  valueExtractor: option => option?.value,
  value: null,
  onSelect: () => {},
  isLoading: false,
  isSearchable: false,
};
