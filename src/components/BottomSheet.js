import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { Typography, Container, Touchable, Input } from "@components";
import Modal from "react-native-modal";
import Icon from "react-native-remix-icon";
import { theme } from "../theme";

const Title = ({
  title,
  bg,
  isVisible,
  hide,
  titleContainerStyle,
  titleTextStyle,
  contentType,
  canSearch,
  searchText,
  setSearchText,
}) => {
  let touchY;
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);

  useEffect(() => {
    setSearchText("");
  }, [isVisible, setSearchText]);

  return (
    <>
      <Container
        bg={bg}
        onTouchStart={e => (touchY = e.nativeEvent.pageY)}
        onTouchEnd={e => {
          // Swipe Down Detection
          if (e.nativeEvent.pageY - touchY > 20) hide();
        }}
        pb={12}
        borderRadius={20}
        {...titleContainerStyle}
      >
        <Container flexDirection="row" justifyContent="space-between">
          {title && (
            <Typography textStyle="modalHeader" {...titleTextStyle}>
              {title}
            </Typography>
          )}
          {contentType && (
            <Touchable onPress={hide}>
              <Typography textStyle="modalHeader" color="font.purple600">
                Done
              </Typography>
            </Touchable>
          )}
          {canSearch && !isSearchBarOpen && (
            <Touchable onPress={() => setSearchBarOpen(true)}>
              <Icon
                name="search-line"
                color={theme.colors.background.grey700}
              />
            </Touchable>
          )}
        </Container>

        {canSearch && isSearchBarOpen && (
          <Container pt={12} flexDirection="row" alignItems="center">
            <Container flex={6} mr={3}>
              <Input
                value={searchText}
                onChangeText={word => setSearchText(word.toLowerCase())}
                placeholder="Search"
                containerStyles={styles.inputContainerStyle}
                LeftIcon={() => {
                  return (
                    <Icon
                      name="search-line"
                      size={20}
                      color={theme.colors.background.grey800}
                    />
                  );
                }}
              />
            </Container>

            <Touchable
              onPress={() => {
                setSearchText("");
                setSearchBarOpen(false);
              }}
            >
              <Typography fontSize="l" fontFamily="sf400" color="font.grey800">
                Cancel
              </Typography>
            </Touchable>
          </Container>
        )}
      </Container>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.boolean,
  hide: PropTypes.func,
  bg: PropTypes.string,
  titleContainerStyle: PropTypes.object,
  titleTextStyle: PropTypes.object,
  contentType: PropTypes.oneOf(["checkbox", null]),
  canSearch: PropTypes.bool,
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
};

/**
 * BottomSheet can be used to select an item from list of items. Like a DropDown
 *
 * ## Usage
 * ```js
 * import React, { useState } from 'react';
 * import { Container, BottomSheet } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  const [isBottomSheetVisible, setBottomSheetVisibility] = useState(false);
 *  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
 *  const data = ["neeto-ui-rn", "neeto-desk-rn", "neeto-hq"];
 *
 *  return (
 *    <Container>
 *     <BottomSheet
 *       maxHeight={200}
 *       isVisible={isBottomSheetVisible}
 *       hide={() => {
 *         setBottomSheetVisibility(false);
 *       }}
 *       onItemPress={index => {
 *         setSelectedItemIndex(index);
 *       }}
 *       title="PROJECT"
 *       data={data}
 *       selectedItemIndex={selectedItemIndex}
 *       ContentRow={() => <CustomComponent />}
 *      />
 *   </Container>
 *  );
 * }
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const BottomSheet = ({
  data,
  title,
  hide,
  isVisible,
  onItemPress,
  selectedItemIndex,
  bg,
  children,
  titleContainerStyle,
  titleTextStyle,
  modalParams,
  HeaderComponent,
  ContentRow,
  contentType,
  canSearch,
  ...rest
}) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Modal
      style={styles.modalStyle}
      isVisible={isVisible}
      onBackdropPress={hide}
      useNativeDriver
      avoidKeyboard
      hideModalContentWhileAnimating
      onRequestClose={hide}
      {...modalParams}
    >
      <Container
        bg={bg}
        flex={1}
        borderTopRightRadius={20}
        borderTopLeftRadius={20}
        px={24}
        py={24}
        {...rest}
      >
        <Container>
          <Title
            bg={bg}
            title={title}
            isVisible={isVisible}
            hide={hide}
            titleContainerStyle={titleContainerStyle}
            titleTextStyle={titleTextStyle}
            HeaderComponent={HeaderComponent}
            contentType={contentType}
            canSearch={canSearch}
            searchText={searchText}
            setSearchText={setSearchText}
          />

          {data && (
            <FlatList
              contentContainerStyle={styles.flatListContentContainerStyle}
              initialNumToRender={data.length}
              data={
                searchText
                  ? data.filter(word => word.startsWith(searchText))
                  : data
              }
              renderItem={({ item, index }) => {
                return (
                  <ContentRow
                    isSelected={index === selectedItemIndex}
                    key={index}
                    onPress={() => {
                      !contentType && hide();
                      onItemPress(index);
                    }}
                    id={index}
                    label={item}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return index;
              }}
            />
          )}
          {children}
        </Container>
      </Container>
    </Modal>
  );
};

BottomSheet.defaultProps = {
  bg: "background.primary",
};

BottomSheet.propTypes = {
  /**
   * List of items.
   */
  data: PropTypes.array,
  /**
   * Title to be displayed in the bottom sheet header.
   */
  title: PropTypes.string,
  /**
   * If true bottom sheet will be shown.
   */
  isVisible: PropTypes.bool,
  /**
   * Callback that will be called on while hiding the bottom sheet.
   */
  hide: PropTypes.func,
  /**
   * Callback which returns the index of selected item.
   */
  onItemPress: PropTypes.func,
  /**
   * Index of selected Item.
   */
  selectedItemIndex: PropTypes.number,
  /**
   * Background color.
   */
  bg: PropTypes.string,
  /**
   * To customise title container styles.
   */
  titleContainerStyle: PropTypes.object,
  /**
   * To customise title text styles.
   */
  titleTextStyle: PropTypes.object,
  /**
   * To support more Modal params.
   */
  modalParams: PropTypes.object,
  children: PropTypes.node,
  HeaderComponent: PropTypes.elementType,
  ContentRow: PropTypes.elementType.isRequired,
  contentType: PropTypes.oneOf(["checkbox", null]),
  canSearch: PropTypes.bool,
};

const styles = StyleSheet.create({
  flatListContentContainerStyle: {
    paddingBottom: 70,
  },
  modalStyle: {
    margin: 0,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  inputContainerStyle: {
    backgroundColor: "white",
    borderRadius: 10,
  },
});
