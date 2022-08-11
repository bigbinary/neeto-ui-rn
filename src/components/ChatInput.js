/* eslint-disable react/display-name */
import React, { useContext, useRef } from "react";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  typography,
  color,
} from "styled-system";
import { StyleSheet } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

import { Container, Touchable, Typography } from "@components";
import { theme } from "../../src/theme";

const TextInput = styled.TextInput`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
  ${typography}
  ${color}
`;

/**
 * ChatInput component allow users to input custom text entries with a keyboard.
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>buttonStyle</li>
 * <li>brandLeft</li>
 * <li>typography</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { ChatInput, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <ChatInput value="Oliver Smith" onChangeText={()=>{}} />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const ChatInput = props => {
  const {
    label,
    value = "",
    onChangeText = () => {},
    autoFocus = false,
    disabled = false,
    addResponse,
    addAttachment,
    handleSendText,
    ...rest
  } = props;

  const colors = useContext(ThemeContext).colors;
  const inputRef = useRef();

  return (
    <Container
      borderRadius={25}
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      bg="background.menubackground"
      maxHeight={120}
      px={10}
    >
      <Container flex={1} ml={2}>
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          editable={!disabled}
          inputAccessoryViewID={label}
          color={disabled ? "font.grey500" : "font.primary"}
          fontSize={17}
          py={3}
          pr={3}
          top={0}
          zIndex={2}
          autoCapitalize="none"
          multiline={true}
          maxHeight={120}
          {...rest.inputProps}
        />
      </Container>
      {value ? (
        <Touchable p={2} borderRadius={20} onPress={handleSendText}>
          <Typography color="font.base" fontFamily="sf500" fontSize="xl">
            Send
          </Typography>
        </Touchable>
      ) : (
        <>
          <Touchable p={2} borderRadius={20} onPress={addResponse}>
            <Icon name="file-list-line" size={22} color={colors.font.grey800} />
          </Touchable>
          <Touchable p={2} borderRadius={20} onPress={addAttachment}>
            <Icon
              name="attachment-line"
              size={22}
              onPress={() => {}}
              color={colors.font.grey800}
            />
          </Touchable>
        </>
      )}
    </Container>
  );
};

ChatInput.propTypes = {
  /**
   * The text to use for the floating label.
   */
  label: PropTypes.string,
  /**
   * Holds the current value of the Input.
   */
  value: PropTypes.string.isRequired,
  /**
   * Func to set the current value.
   */
  onChangeText: PropTypes.func.isRequired,
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled: PropTypes.bool,
  /**
   * If true, shows border on focus.
   */
  autoFocus: PropTypes.bool,
  /**
   * Func to add default response
   */
  addResponse: PropTypes.func,
  /**
   * Func to add attachments
   */
  addAttachment: PropTypes.func,
  /**
   * Func to send messages
   */
  handleSendText: PropTypes.func,
};

export const styles = StyleSheet.create({
  doneButtonStyle: {
    fontFamily: "sf700",
    color: theme.colors.font.base,
  },
});
