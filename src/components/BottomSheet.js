import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Keyboard,
  ActivityIndicator,
  Platform,
} from "react-native";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import Fuse from "fuse.js";

import { Typography, Container, Touchable, SearchBar } from "@components";
import { theme } from "../theme";
import { FUSE_KEYS } from "../constants";

const Title = ({
  title,
  bg,
  isVisible,
  hide,
  titleContainerStyle,
  titleTextStyle,
  contentType,
  canSearch,
  setSearchText,
  onDonePress,
}) => {
  let touchY;

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
        <Container mb={16} flexDirection="row" justifyContent="space-between">
          {title && (
            <Typography textStyle="modalHeader" {...titleTextStyle}>
              {title}
            </Typography>
          )}
          {contentType && (
            <Touchable
              onPress={() => {
                hide();
                onDonePress();
              }}
            >
              <Typography textStyle="modalHeader" color="font.purple500">
                Done
              </Typography>
            </Touchable>
          )}
        </Container>

        {canSearch && (
          <SearchBar
            placeholder="Search"
            onChangeText={setSearchText}
            onCancel={() => {
              setSearchText("");
            }}
            showCancelButton={false}
          />
        )}
      </Container>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool,
  hide: PropTypes.func,
  bg: PropTypes.string,
  titleContainerStyle: PropTypes.object,
  titleTextStyle: PropTypes.object,
  contentType: PropTypes.oneOf(["checkbox", null]),
  canSearch: PropTypes.bool,
  setSearchText: PropTypes.func,
  onDonePress: PropTypes.func,
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
  showCreateOption,
  CreateItemComponent,
  showCreateOptionLoader,
  createSearchedOptionLabelStyle,
  createOptionLabel,
  onPressCreateOption,
  createSearchedOptionContainerStyle,
  data = [],
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
  onDonePress,
  ...rest
}) => {
  const [searchText, setSearchText] = useState("");

  const fuse = new Fuse(data, { keys: FUSE_KEYS, threshold: 0.1 });

  const generateData = () => {
    if (searchText.trim().length) {
      return fuse.search(searchText.trim()).map(item => item.item);
    } else {
      return data;
    }
  };

  const contentContainerStyle = {
    paddingBottom: Platform.OS === "android" ? 50 : 0,
  };

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
      <SafeAreaView style={styles.safeAreaView}>
        <Container
          bg={bg}
          borderTopRightRadius={20}
          borderTopLeftRadius={20}
          p={16}
          {...rest}
        >
          {title && (
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
              onDonePress={onDonePress}
            />
          )}

          {data && (
            <FlatList
              ListFooterComponent={children}
              initialNumToRender={data.length}
              onScrollBeginDrag={Keyboard.dismiss}
              data={generateData()}
              renderItem={({ item, index }) => {
                return (
                  <ContentRow
                    isSelected={index === selectedItemIndex}
                    key={index}
                    onPress={() => {
                      !contentType && hide();
                      onItemPress({ index, item });
                    }}
                    index={index}
                    item={item}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return index;
              }}
              contentContainerStyle={contentContainerStyle}
            />
          )}

          {showCreateOptionLoader ? (
            <ActivityIndicator
              size="small"
              color={theme.colors.background.base}
            />
          ) : (
            !!searchText.trim() &&
            !generateData().length &&
            showCreateOption && (
              <Container>
                {CreateItemComponent ? (
                  <CreateItemComponent searchText={searchText} />
                ) : (
                  <Touchable
                    height={40}
                    justifyContent="center"
                    alignItems="center"
                    onPress={() => onPressCreateOption(searchText)}
                    {...createSearchedOptionContainerStyle}
                  >
                    <Typography
                      fontFamily="sf400"
                      fontSize="s"
                      color="font.grey"
                      {...createSearchedOptionLabelStyle}
                    >
                      {createOptionLabel || `Create ${searchText} option`}
                    </Typography>
                  </Touchable>
                )}
              </Container>
            )
          )}
        </Container>
      </SafeAreaView>
    </Modal>
  );
};

BottomSheet.defaultProps = {
  bg: "background.primary",
  showCreateOption: false,
  showCreateOptionLoader: false,
  createOptionLabel: null,
  onPressCreateOption: () => {},
  CreateItemComponent: null,
  onDonePress: () => {},
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
   * Callback that will be called on Done button press
   */
  onDonePress: PropTypes.func,
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
   * Component that renders when searched item doesn't exists
   */
  CreateItemComponent: PropTypes.node,
  /**
   * To customise empty options placeholder text style.
   */
  createSearchedOptionLabelStyle: PropTypes.object,
  /**
   * To customise empty options placeholder container style.
   */
  createSearchedOptionContainerStyle: PropTypes.object,
  /**
   * To support more Modal params.
   */
  modalParams: PropTypes.object,
  children: PropTypes.node,
  HeaderComponent: PropTypes.elementType,
  ContentRow: PropTypes.elementType,
  contentType: PropTypes.oneOf(["checkbox", null]),
  canSearch: PropTypes.bool,
};

const styles = StyleSheet.create({
  safeAreaView: {
    maxHeight: "70%",
    backgroundColor: theme.colors.background.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalStyle: {
    margin: 0,
    justifyContent: "flex-end",
  },
  inputContainerStyle: {
    backgroundColor: "white",
    borderRadius: 10,
  },
});
