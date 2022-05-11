import React, { useEffect, useState, useContext, useRef } from "react";
import Icon from "react-native-remix-icon";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  useWindowDimensions,
  Platform,
} from "react-native";
import { nanoid } from "nanoid/non-secure";
import { ThemeContext } from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container, Input, Touchable, Typography, Card } from "@components";
import {
  currentOpenSelectId,
  setCurrentOpenSelectId,
} from "@components/Select";

const DIRECTIONS = {
  TOP: "top",
  BOTTOM: "bottom",
};

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
 * ### Follow our [Getting Started](getting-started.html#usage-with-parentview-select-and-multiselect-components) guide first towards usage of MultiSelect component.
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
  isLoading,
  isSearchable,
  labelStyle,
  containerStyle,
  dropdownContainerStyle,
  itemContainerStyle,
  itemTextStyle,
  multiSelectedItemContainerStyle,
  multiSelectedItemTextStyle,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  const _currentOpenSelectId = currentOpenSelectId();
  const [selectId, setSelectId] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { height } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();

  const containerRef = useRef(null);
  const dropdownDirection = useRef(DIRECTIONS.TOP);

  const showDropdownAtTop = dropdownDirection.current === DIRECTIONS.TOP;
  const multipleOptionsSelected = value?.length > 0;
  const defaultDropdownItemHeight = itemContainerStyle?.height || 32;
  const dropdownHeight =
    dropdownContainerStyle?.height ||
    dropdownContainerStyle?.maxHeight ||
    defaultDropdownItemHeight * 6;
  const formatStr = str => str?.toLowerCase()?.trim();

  const handleOpenDropdown = () => {
    setCurrentOpenSelectId(selectId);
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

  const handleUnselection = item => {
    const newValue = value.filter(
      selectedItem => valueExtractor(selectedItem) !== valueExtractor(item)
    );
    onSelect(newValue);
  };

  useEffect(() => {
    const getSelectId = async () => {
      setSelectId(await nanoid());
    };
    getSelectId();
  }, []);

  useEffect(() => {
    if (currentOpenSelectId && _currentOpenSelectId !== selectId) {
      setShowDropdown(false);
    }
  }, [_currentOpenSelectId, selectId]);

  return (
    <View style={Platform.OS === "ios" && { zIndex: showDropdown ? 1 : 0 }}>
      <Typography
        fontFamily="inter400"
        mb={1}
        fontSize="s"
        color="font.base"
        {...labelStyle}
      >
        {label}
      </Typography>
      <View>
        <TouchableWithoutFeedback
          disabled={isLoading}
          onPress={handleOpenDropdown}
        >
          <View ref={containerRef}>
            <Container
              borderWidth={1}
              borderColor="border.grey400"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              p={multipleOptionsSelected ? 1 : 2}
              pr={2}
              maxHeight={120}
              {...containerStyle}
              {...rest}
            >
              {!multipleOptionsSelected && (
                <Typography
                  fontFamily="inter400"
                  fontSize="s"
                  color="font.grey"
                >
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
                          multiSelectedItemTextStyle={
                            multiSelectedItemTextStyle
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
          </View>
        </TouchableWithoutFeedback>
        {showDropdown && (
          <Card
            bg="background.white"
            borderWidth={1}
            borderColor="border.grey400"
            position="absolute"
            left={0}
            right={0}
            bottom={showDropdownAtTop ? "100%" : null}
            top={!showDropdownAtTop ? "100%" : null}
            maxHeight={dropdownHeight}
            mt={-(containerStyle?.m || containerStyle?.mb) || 0}
            mb={-(containerStyle?.m || containerStyle?.mt) || 0}
            zIndex={1}
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
                  const optionValue = valueExtractor(item, index);
                  const isItemAlreadySelected = Boolean(
                    value?.find(
                      selectedItem =>
                        valueExtractor(selectedItem) === optionValue
                    )
                  );
                  return !isItemAlreadySelected;
                })
                .filter((item, index) => {
                  const optionLabel = labelExtractor(item, index);
                  if (searchQuery.length === 0) return true;
                  return formatStr(optionLabel).includes(
                    formatStr(searchQuery)
                  );
                })
                .map((item, index) => {
                  const optionLabel = labelExtractor(item, index);
                  return (
                    <DropdownItem
                      key={index}
                      label={optionLabel}
                      onPress={() => onSelect([...value, item])}
                      itemContainerStyle={itemContainerStyle}
                      defaultDropdownItemHeight={defaultDropdownItemHeight}
                      itemTextStyle={itemTextStyle}
                    />
                  );
                })}
            </ScrollView>
          </Card>
        )}
      </View>
    </View>
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
   * To customise item container styles for multi selected items.
   */
  multiSelectedItemContainerStyle: PropTypes.object,
  /**
   * To customise item text styles for multi selected item.
   */
  multiSelectedItemTextStyle: PropTypes.object,
};

MultiSelect.defaultProps = {
  label: null,
  placeholder: "Select Option",
  labelExtractor: option => option?.label,
  valueExtractor: option => option?.value,
  value: null,
  onSelect: () => {},
  isLoading: false,
  isSearchable: false,
};
