import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Keyboard } from "react-native";
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
            <Touchable onPress={hide}>
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
            searchbarProps={{ autoFocus: true }}
            showCancelButton={false}
          />
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
          px={24}
          py={24}
          {...rest}
        >
          <Container>
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
              />
            )}
          </Container>
        </Container>
      </SafeAreaView>
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
