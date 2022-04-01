import React from "react";
import OriginalPopover from "react-native-popover-view";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { flexbox, space, border, color, layout } from "styled-system";

import { Typography } from "@components";

export const TouchableOpacity = styled.TouchableOpacity`
  ${space}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
`;

const PopOverItem = ({ item, fontFamily, fontSize }) => {
  const { Icon, label, onPress } = item;
  return (
    <TouchableOpacity
      onPress={onPress}
      flexDirection="row"
      p={2}
      px={3}
      alignItems="center"
    >
      <Icon />
      <Typography
        px={2}
        fontSize={fontSize}
        fontColor="font.primary"
        fontFamily={fontFamily}
      >
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

PopOverItem.propTypes = {
  item: PropTypes.object,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["xs", "s", "m", "l", "xl", "xxl"]),
  ]),
};

/**
 *
 * A Lightweight Popover component over [react-native-popover-view](https://www.npmjs.com/package/react-native-popover-view)  which can be rendered with array of data or with custom body.
 *
 * <div class="screenshots">
 *   <img src="screenshots/popover/popover.png" />
 * </div>
 *
 *   ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from "react-native";
 * import { Container, Button, Popover } from '@bigbinary/neetoui-rn';
 * import Icon from "react-native-remix-icon";
 * import { ThemeContext } from "styled-components/native";
 *
 * export default function Main(){
 *   const theme = useContext(ThemeContext);
 *   const data = [
 *     {
 *       label: "Search Product",
 *       Icon: () => {
 *         return (
 *           <Icon
 *             name="ri-search-line"
 *             size={20}
 *             color={theme.colors.background.grey800}
 *           />
 *         );
 *       },
 *       onPress: () => {
 *         alert("Clicked here");
 *       },
 *     },
 *     {
 *       label: "Create Product",
 *       Icon: () => {
 *         return (
 *           <Icon
 *             name="ri-search-line"
 *             size={20}
 *             color={theme.colors.background.grey800}
 *           />
 *         );
 *       },
 *       onPress: () => {
 *         alert("Clicked here");
 *       },
 *     },
 *   ];
 *
 *  return (
 *    <Container flex={1} alignItems="center" justifyContent="center">
 *      <Container p={2}>
 *        <Popover data={data} from={<Button label="With Data" />} />
 *      </Container>
 *      <Container p={2}>
 *      <Popover from={<Button label="With Custom Popup Content" />}>
 *
 *          <Container bg="background.white" flex={1}>
 *            <Text>This is the contents of the popover</Text>
 *          </Container>
 *        </Popover>
 *      </Container>
 *
 *      <Container p={2}>
 *        <Popover
 *          data={data}
 *          from={<Button label="With Custom Popup Content and data" />}
 *        >
 *          <Container bg="background.white" flex={1}>
 *            <Text>This is the contents of the popover</Text>
 *          </Container>
 *        </Popover>
 *      </Container>
 *    </Container>
 *  );
 * }
 * ```
 */

export const Popover = ({
  children,
  data,
  fontFamily = null,
  fontSize = "l",
  ...rest
}) => {
  return (
    <OriginalPopover popoverStyle={styles.popoverStyle} {...rest}>
      {data?.map((item, index) => {
        return (
          <PopOverItem
            key={index}
            item={item}
            fontFamily={fontFamily}
            fontSize={fontSize}
          />
        );
      })}
      {children}
    </OriginalPopover>
  );
};

Popover.propTypes = {
  children: PropTypes.node,
  /**
   * Data should be array of
   * {
   *  label: "This would be label of button",
   *  Icon: "Icon to be shown prior to label",
   *  onPress: "Handler to be called onPress"
   * }.
   */
  data: PropTypes.array,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["xs", "s", "m", "l", "xl", "xxl"]),
  ]),
};

const styles = StyleSheet.create({
  popoverStyle: { borderRadius: 15, padding: 5 },
});
