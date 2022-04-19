import React, { useState, useContext, useCallback, useRef } from "react";
import Icon from "react-native-remix-icon";
import PropTypes from "prop-types";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { ThemeContext } from "styled-components/native";

import { Container, Input, Touchable, Typography } from "@components";

/**
 *
 * Select can be used to select an option from a list of options.
 *
 * <div class="screenshots">
 *   <img src="screenshots/select/select1.png" />
 *   <img src="screenshots/select/select2.png" />
 * </div>
 *
 *  ## Usage
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
 *    <Container>
 *      <Select
 *        label="Select"
 *        data={OPTIONS}
 *        value={selectedOption?.value}
 *        onSelect={setSelectedOption}
 *      />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const Select = ({
  data,
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
  selectedItemContainerStyle,
  selectedItemTextStyle,
  ...rest
}) => {
  const [options, setOptions] = useState(data);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null);
  const theme = useContext(ThemeContext);
  const selectedItemIndex = data?.findIndex(item => item?.value === value);
  const defaultDropdownItemHeight = itemContainerStyle?.height || 32;

  const handleItemSelection = (item, index) => {
    setShowDropdown(false);
    onSelect(item, index);
  };

  const handleSearchOption = useCallback(
    searchTerm => {
      const qualifiedOptions = data?.filter(option =>
        option?.label
          ?.toLowerCase()
          ?.trim()
          ?.includes(searchTerm?.toLowerCase()?.trim())
      );
      setOptions(qualifiedOptions);
    },
    [data]
  );

  const DropdownItem = ({ item, index }) => {
    const isSelectedItem = index === selectedItemIndex;
    return (
      <Touchable
        key={index}
        bg={isSelectedItem ? "background.base" : "background.white"}
        onPress={() => {
          handleItemSelection(item, index);
        }}
      >
        <Container
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
            {item?.label}
          </Typography>
        </Container>
      </Touchable>
    );
  };

  DropdownItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
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
      <Touchable
        disabled={isLoading}
        onPress={() => setShowDropdown(!showDropdown)}
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
            <Typography fontFamily="inter400" fontSize="s" color="font.grey">
              {data?.[selectedItemIndex]?.label || placeholder}
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
      </Touchable>
      {showDropdown && (
        <Container
          bg="background.white"
          borderWidth={1}
          borderColor="border.grey400"
          position="absolute"
          left={0}
          right={0}
          top="100%"
          maxHeight={defaultDropdownItemHeight * 6}
          shadowOpacity={0.25}
          shadowRadius={3.84}
          shadow-color="#000"
          shadowOffset={{
            width: 0,
            height: 2,
          }}
          elevation={5}
          {...dropdownContainerStyle}
        >
          {isSearchable && (
            <Container p={1}>
              <Input
                placeholder="Search"
                onChangeText={handleSearchOption}
                fontSize="s"
              />
            </Container>
          )}
          <ScrollView nestedScrollEnabled={true}>
            {options.map((item, index) => {
              return <DropdownItem key={index} item={item} index={index} />;
            })}
          </ScrollView>
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
  data: PropTypes.arrayOf(
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
  value: PropTypes.string,
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
  value: null,
  onSelect: () => {},
  isLoading: false,
  isSearchable: false,
};
