import React, { useEffect, useState, useContext, useRef } from "react";
import Icon from "react-native-remix-icon";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  useWindowDimensions,
} from "react-native";
import { ThemeContext } from "styled-components/native";
import {
  GestureDetector,
  Gesture,
  ScrollView,
} from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ProviderContext } from "@contexts";
import { Card, Container, Input, Typography } from "@components";

const DIRECTIONS = {
  TOP: "top",
  BOTTOM: "bottom",
};

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
 * ### Wrap your root View usually App.js with NeetoUIRNProvider component.
 *
 * ```js
 * import * as React from 'react';
 * import { NeetoUIRNProvider } from '@bigbinary/neetoui-rn';
 *
 * export default function App() {
 *  return (
 *    <NeetoUIRNProvider>...</NeetoUIRNProvider>
 *  );
 * }
 * ```
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
  const { height } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const { providerEvent } = useContext(ProviderContext);

  const containerRef = useRef(null);
  const dropdownDirection = useRef(DIRECTIONS.TOP);
  const isPressedInside = useRef(false);

  const showDropdownAtBottom = dropdownDirection.current === DIRECTIONS.BOTTOM;
  const defaultDropdownItemHeight = itemContainerStyle?.height || 32;
  const dropdownHeight =
    dropdownContainerStyle?.height ||
    dropdownContainerStyle?.maxHeight ||
    defaultDropdownItemHeight * 6;
  const selectedOptionLabel = labelExtractor(value || {});
  const selectedOptionValue = valueExtractor(value || {});
  const formatStr = str => str?.toLowerCase()?.trim();

  const setPressedInside = () => {
    isPressedInside.current = true;
  };

  const handleOpenDropdown = () => {
    Keyboard.dismiss();
    setSearchQuery("");
    containerRef?.current?.measureInWindow((x, y, w, h) => {
      const viewPortBottomEdge = height - bottom;
      const dropdownBottomEdge = y + h;
      if (viewPortBottomEdge - dropdownBottomEdge < dropdownHeight + 10) {
        dropdownDirection.current = DIRECTIONS.TOP;
      } else {
        dropdownDirection.current = DIRECTIONS.BOTTOM;
      }
      setShowDropdown(!showDropdown);
    });
  };

  const handleItemSelection = (item, index) => {
    setShowDropdown(false);
    onSelect(item, index);
  };

  const gestures = [
    Gesture.Tap().onBegin(runOnJS(setPressedInside)),
    Gesture.Tap().onBegin(runOnJS(setPressedInside)),
  ];

  useEffect(() => {
    providerEvent?.on("pressed", () => {
      if (!isPressedInside.current) {
        setShowDropdown(false);
      }
      isPressedInside.current = false;
    });

    return () => providerEvent?.removeAllListeners();
  }, [providerEvent]);

  return (
    <Container zIndex={showDropdown ? 1 : 0}>
      <Typography
        fontFamily="inter400"
        mb={1}
        fontSize="s"
        color="font.base"
        {...labelStyle}
      >
        {label}
      </Typography>
      <Container>
        <GestureDetector gesture={gestures[0]}>
          <TouchableWithoutFeedback
            disabled={isLoading}
            onPress={handleOpenDropdown}
          >
            <View ref={containerRef}>
              <Container
                borderWidth={1}
                borderColor="border.grey400"
                p={2}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                {...containerStyle}
                {...rest}
              >
                <Typography
                  fontFamily="inter400"
                  fontSize="s"
                  color="font.grey"
                >
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
            </View>
          </TouchableWithoutFeedback>
        </GestureDetector>
        {showDropdown && (
          <GestureDetector gesture={gestures[1]}>
            <Card
              bg="background.white"
              borderWidth={1}
              borderColor="border.grey400"
              position="absolute"
              left={0}
              right={0}
              bottom={!showDropdownAtBottom ? "100%" : null}
              top={showDropdownAtBottom ? "100%" : null}
              maxHeight={dropdownHeight}
              elevation={5}
              mt={-(containerStyle?.m || containerStyle?.mb) || 0}
              mb={-(containerStyle?.m || containerStyle?.mt) || 0}
              {...dropdownContainerStyle}
            >
              {isSearchable && (
                <Container p={1}>
                  <Input
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    fontSize="s"
                  />
                </Container>
              )}
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
          </GestureDetector>
        )}
      </Container>
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
   * To customise Select input container styles.
   */
  containerStyle: PropTypes.object,
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
