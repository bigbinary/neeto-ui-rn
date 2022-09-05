import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";

import { Typography, Container, Touchable, SearchBar } from "@components";
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
            debounceDelay={200}
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
 * <div class="screenshots">
 *   <img src="screenshots/bottomsheet/bottomsheet.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import React, { useState } from 'react';
 * import { Container, BottomSheet } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  const [isBottomSheetVisible, setBottomSheetVisibility] = useState(false);
 *  const [selectedItem, setSelectedItem] = useState(null);
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
 *       onItemPress={({item}) => {
 *         setSelectedItem(item);
 *       }}
 *       title="PROJECT"
 *       data={data}
 *       selectedItem={selectedItem}
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
  disabled,
  noResultsLabelContainerStyle,
  noResultsLabelStyle,
  noResultsLabel,
  NoResultsComponent,
  labelExtractor,
  valueExtractor,
  selectedItem,
  onBackdropPress,
  ...rest
}) => {
  const [searchText, setSearchText] = useState("");

  const getLabel = (item, index) => {
    return item?.label || labelExtractor(item, index) || item;
  };

  const generateData = () => {
    if (searchText.length) {
      return data.filter(item =>
        getLabel(item).toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return data;
    }
  };

  const hideCreateComponent = () => {
    const filteredItemCount = generateData().filter(
      data =>
        getLabel(data).toLocaleLowerCase() === searchText.toLocaleLowerCase()
    ).length;

    return filteredItemCount > 0;
  };

  const checkIsSelected = item => {
    const itemValue = item?.value || valueExtractor(item) || item;
    const selectedItemValue =
      selectedItem?.value || valueExtractor(selectedItem) || selectedItem;
    return itemValue === selectedItemValue;
  };

  return (
    <Modal
      style={styles.modalStyle}
      isVisible={isVisible}
      onBackdropPress={() => {
        onBackdropPress();
        hide();
      }}
      useNativeDriver
      avoidKeyboard
      hideModalContentWhileAnimating
      animationInTiming={600}
      animationOutTiming={1000}
      onRequestClose={hide}
      {...modalParams}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <Container
          bg={bg}
          borderTopRightRadius={20}
          borderTopLeftRadius={20}
          p={16}
          flexShrink={1}
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
              ListFooterComponent={
                <Container>
                  {children}
                  {!!searchText &&
                    !generateData().length &&
                    !showCreateOption &&
                    (NoResultsComponent ? (
                      <NoResultsComponent />
                    ) : (
                      <Container
                        alignItems="center"
                        py={2}
                        mb={2}
                        {...noResultsLabelContainerStyle}
                      >
                        <Typography
                          fontFamily="sf600"
                          fontSize="s"
                          color="font.grey"
                          {...noResultsLabelStyle}
                        >
                          {noResultsLabel || "No options found"}
                        </Typography>
                      </Container>
                    ))}

                  {!disabled &&
                    !hideCreateComponent() &&
                    (showCreateOptionLoader ? (
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.background.base}
                      />
                    ) : (
                      !!searchText &&
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
                                {createOptionLabel ||
                                  `Create ${searchText} option`}
                              </Typography>
                            </Touchable>
                          )}
                        </Container>
                      )
                    ))}
                </Container>
              }
              initialNumToRender={data.length}
              onScrollBeginDrag={Keyboard.dismiss}
              data={generateData()}
              renderItem={({ item, index }) => {
                return (
                  <ContentRow
                    isSelected={checkIsSelected(item)}
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
  valueExtractor: () => {},
  labelExtractor: () => {},
  onBackdropPress: () => {},
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
   * Callback that will be called on Done button press
   */
  onDonePress: PropTypes.func,
  /**
   * Background color.
   */
  bg: PropTypes.string,
  /**
   * To customize title container styles.
   */
  titleContainerStyle: PropTypes.object,
  /**
   * To customize title text styles.
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
   * To customize empty options placeholder text style.
   */
  createSearchedOptionLabelStyle: PropTypes.object,
  /**
   * Flag will disable create item feature
   */
  disabled: PropTypes.bool,
  /**
   * To customize empty options placeholder container style.
   */
  createSearchedOptionContainerStyle: PropTypes.object,
  noResultsLabelContainerStyle: PropTypes.object,
  noResultsLabelStyle: PropTypes.object,
  noResultsLabel: PropTypes.string,
  NoResultsComponent: PropTypes.node,
  /**
   * Use custom key as label.
   */
  labelExtractor: PropTypes.func,
  /**
   * Use custom key as value.
   */
  valueExtractor: PropTypes.func,
  /**
   * Function to customize back drop press
   */
  onBackdropPress: PropTypes.func,
  /**
   * Currently selected item
   */
  selectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
    flex: 1,
  },
  inputContainerStyle: {
    backgroundColor: "white",
    borderRadius: 10,
  },
});
