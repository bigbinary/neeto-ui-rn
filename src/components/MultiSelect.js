import React, { useState, useContext } from "react";
import Icon from "react-native-remix-icon";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { ThemeContext } from "styled-components/native";

import { Container, Input, Touchable, Typography, Card } from "@components";

const MultiSelectItem = ({
  item,
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
    p={1}
    m={1}
    {...multiSelectedItemContainerStyle}
  >
    <Typography
      fontFamily="inter400"
      fontSize="s"
      mr={2}
      {...multiSelectedItemTextStyle}
    >
      {item?.label}
    </Typography>
    <Touchable onPress={onUnselect}>
      <Icon name="ri-close-line" size="20" color="grey" />
    </Touchable>
  </Container>
);

MultiSelectItem.propTypes = {
  item: PropTypes.object,
  onUnselect: PropTypes.func,
  multiSelectedItemContainerStyle: PropTypes.object,
  multiSelectedItemTextStyle: PropTypes.object,
};

const DropdownItem = ({
  item,
  index,
  onPress,
  defaultDropdownItemHeight,
  itemContainerStyle,
  itemTextStyle,
}) => {
  return (
    <Touchable key={index} bg="background.white" onPress={onPress}>
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
          {item?.label}
        </Typography>
      </Container>
    </Touchable>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
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
 *  ## Usage
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
 *    <Container>
 *      <MultiSelect
 *        label="Select"
 *        options={OPTIONS}
 *        value={selectedOptions}
 *        onSelect={setSelectedOptions}
 *      />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const MultiSelect = ({
  options,
  label,
  value,
  placeholder,
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
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const multipleOptionsSelected = value?.length > 0;
  const defaultDropdownItemHeight = itemContainerStyle?.height || 32;
  const formatStr = str => str?.toLowerCase()?.trim();

  const handleUnselection = item => {
    const newValue = value.filter(
      selectedItem => selectedItem.value !== item.value
    );
    onSelect(newValue);
  };

  return (
    <Container elevation={0}>
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
        onPress={() => {
          setShowDropdown(!showDropdown);
          setSearchQuery("");
        }}
      >
        <View>
          <Container
            borderWidth={1}
            borderColor="border.grey400"
            p={multipleOptionsSelected ? 1 : 2}
            pr={2}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            {...containerStyle}
            {...rest}
          >
            {!multipleOptionsSelected && (
              <Typography fontFamily="inter400" fontSize="s" color="font.grey">
                {!multipleOptionsSelected && placeholder}
              </Typography>
            )}
            {multipleOptionsSelected && (
              <Container flexWrap="wrap" flexDirection="row" maxWidth="85%">
                {value?.map((item, index) => (
                  <MultiSelectItem
                    key={index}
                    item={item}
                    index={index}
                    onUnselect={() => handleUnselection(item)}
                    multiSelectedItemContainerStyle={
                      multiSelectedItemContainerStyle
                    }
                    multiSelectedItemTextStyle={multiSelectedItemTextStyle}
                  />
                ))}
              </Container>
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
          top="100%"
          maxHeight={defaultDropdownItemHeight * 6}
          elevation={5}
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
          <ScrollView nestedScrollEnabled={true}>
            {options
              .filter(item => {
                const isItemAlreadySelected = Boolean(
                  value.find(selectedItem => selectedItem.value === item.value)
                );
                return !isItemAlreadySelected;
              })
              .filter(item => {
                if (searchQuery.length === 0) return true;
                return formatStr(item.label).includes(formatStr(searchQuery));
              })
              .map((item, index) => (
                <DropdownItem
                  key={index}
                  item={item}
                  index={index}
                  onPress={() => onSelect([...value, item])}
                  itemContainerStyle={itemContainerStyle}
                  defaultDropdownItemHeight={defaultDropdownItemHeight}
                  itemTextStyle={itemTextStyle}
                />
              ))}
          </ScrollView>
        </Card>
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
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * The text to be displayed if no option is selected.
   */
  placeholder: PropTypes.string,
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
  value: null,
  onSelect: () => {},
  isLoading: false,
  isSearchable: false,
};
