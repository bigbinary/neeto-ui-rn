import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  color,
  layout,
} from "styled-system";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Typography, Container } from "@components";
import Modal from "react-native-modal";

export const TouchableOpacity = styled.TouchableOpacity`
  ${buttonStyle}
  ${flexbox}
  ${space}
  ${border}
  ${layout}
  ${color}
`;

const Border = () => {
  return <Container bg="border.primary" height="1px" width="100%" />;
};

const Title = ({ title, bg, hide, alignItems }) => {
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
        alignItems={alignItems}
        py={20}
        borderRadius={20}
        style={{}}
      >
        <Typography
          color="font.secondary"
          fontFamily="inter700"
          textStyle="subtext"
        >
          {title}
        </Typography>
      </Container>
      <Border />
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  hide: PropTypes.func,
  bg: PropTypes.string,
  alignItems: PropTypes.string,
};

const ContentRow = React.memo(
  ({ label, onPress, bg, isSelected, alignItems }) => {
    return (
      !!label && (
        <>
          <TouchableOpacity
            alignItems={alignItems}
            bg={bg}
            py={12}
            borderRadius={20}
            onPress={onPress}
            px={2}
          >
            <Typography
              textStyle="body"
              fontFamily={isSelected ? "inter700" : "inter400"}
            >
              {label}
            </Typography>
          </TouchableOpacity>
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
  alignItems: PropTypes.string,
};

/**
 * BottomSheet can be used to select an item from list of items. Like a DropDown
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Typography, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Typography>
 *         This is basic example of Typography
 *      </Typography>
 *     </Container>
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
  alignItems = "center",
  maxHeight,
}) => {
  return (
    <Modal
      style={styles.modalStyle}
      isVisible={isVisible}
      onBackdropPress={hide}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <Container bg={bg} flex={1} borderRadius={20}>
        <Container maxHeight={maxHeight}>
          <Title
            alignItems={alignItems}
            bg={bg}
            title={title}
            hide={hide}
          ></Title>
          <FlatList
            contentContainerStyle={styles.flatListContentContainerStyle}
            initialNumToRender={data.length}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <ContentRow
                  alignItems={alignItems}
                  isSelected={index === selectedItemIndex}
                  bg={bg}
                  key={index}
                  onPress={() => {
                    hide();
                    onItemPress(index);
                  }}
                  label={item}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
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
   * Alignment of children within bottom sheet.
   */
  alignItems: PropTypes.string,
  /**
   * To set the maximum height of bottom sheet.
   */
  maxHeight: PropTypes.number,
};

const styles = StyleSheet.create({
  flatListContentContainerStyle: {
    paddingBottom: 40,
  },
  modalStyle: {
    margin: 0,
    alignItems: "flex-end",
    flexDirection: "row",
  },
});
