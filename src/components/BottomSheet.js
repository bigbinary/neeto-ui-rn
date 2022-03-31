import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { Typography, Container, Touchable } from "@components";
import Modal from "react-native-modal";

const Border = () => {
  return <Container bg="border.primary" height="1px" width="100%" />;
};

const Title = ({ title, bg, hide, titleContainerStyle, titleTextStyle }) => {
  let touchY;
  return (
    <>
      <Container
        px={2}
        bg={bg}
        onTouchStart={e => (touchY = e.nativeEvent.pageY)}
        onTouchEnd={e => {
          // Swipe Down Detection
          if (e.nativeEvent.pageY - touchY > 20) hide();
        }}
        alignItems="center"
        py={20}
        borderRadius={20}
        {...titleContainerStyle}
      >
        {title && (
          <Typography
            color="font.secondary"
            fontFamily="inter700"
            textStyle="subtext"
            {...titleTextStyle}
          >
            {title}
          </Typography>
        )}
      </Container>
      <Border />
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  hide: PropTypes.func,
  bg: PropTypes.string,
  titleContainerStyle: PropTypes.object,
  titleTextStyle: PropTypes.object,
};

const ContentRow = React.memo(
  ({ label, onPress, bg, isSelected, itemContainerStyle, itemTextStyle }) => {
    return (
      !!label && (
        <>
          <Touchable
            alignItems="center"
            bg={bg}
            py={12}
            borderRadius={20}
            onPress={onPress}
            px={2}
            {...itemContainerStyle}
          >
            <Typography
              textStyle="body"
              fontFamily={isSelected ? "inter700" : "inter400"}
              {...itemTextStyle}
            >
              {label}
            </Typography>
          </Touchable>
          <Border />
        </>
      )
    );
  }
);
ContentRow.displayName = "ContentRow";
ContentRow.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  bg: PropTypes.string,
  isSelected: PropTypes.bool,
  itemContainerStyle: PropTypes.object,
  itemTextStyle: PropTypes.object,
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
  itemContainerStyle,
  itemTextStyle,
  modalParams,
  ...rest
}) => {
  return (
    <Modal
      style={styles.modalStyle}
      visible={isVisible}
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
        {...rest}
      >
        <Container>
          <Title
            bg={bg}
            title={title}
            hide={hide}
            titleContainerStyle={titleContainerStyle}
            titleTextStyle={titleTextStyle}
          ></Title>

          {data && (
            <FlatList
              contentContainerStyle={styles.flatListContentContainerStyle}
              initialNumToRender={data.length}
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <ContentRow
                    isSelected={index === selectedItemIndex}
                    bg={bg}
                    key={index}
                    onPress={() => {
                      hide();
                      onItemPress(index);
                    }}
                    label={item}
                    itemContainerStyle={itemContainerStyle}
                    itemTextStyle={itemTextStyle}
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
   * To customise item container styles.
   */
  itemContainerStyle: PropTypes.object,
  /**
   * To customise item text styles.
   */
  itemTextStyle: PropTypes.object,
  /**
   * To support more Modal params.
   */
  modalParams: PropTypes.object,
  children: PropTypes.node,
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
});
