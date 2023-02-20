import React, { useState } from "react";
import { StyleSheet } from "react-native";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";
import {
  flexbox,
  space,
  border,
  buttonStyle,
  typography,
  color,
} from "styled-system";

import { Container, Divider, Touchable, Typography } from "@components";

import CannedResponseSVG from "../../assets/icons/canned-response.svg";
import ExpandSVG from "../../assets/icons/expand.svg";
import ForwardSVG from "../../assets/icons/forward.svg";
import NoteSVG from "../../assets/icons/note.svg";
import ReplySVG from "../../assets/icons/reply.svg";
import { theme } from "../theme";

const TextInput = styled.TextInput`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
  ${typography}
  ${color}
`;

/**
 * Input component allow users to input custom text entries with a keyboard.
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
 * <div class="screenshots">
 *   <img src="screenshots/inputs/inputs.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Input, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Input value="Oliver Smith" onChangeText={()=>{}} label="Name" />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const IconButton = ({ Icon, ...rest }) => (
  <Touchable
    alignItems="center"
    height={moderateScale(22)}
    width={moderateScale(22)}
    {...rest}
  >
    {<Icon />}
  </Touchable>
);

IconButton.propTypes = {
  Icon: PropTypes.elementType,
};

const placeholders = {
  reply: "Type here to reply...",
  note: "Add note here...",
};

export const ChatInput = ({
  value = "",
  onChangeText = () => {},
  onForward = () => {},
  onCannedResponse = () => {},
  ...rest
}) => {
  const [selectedOption, setSelectedOption] = useState("reply");
  const isReplyOptionSelected = selectedOption === "reply";

  return (
    <Container bg={isReplyOptionSelected ? "transparent" : "#FDF6E5"} p={5}>
      <Divider />
      <Container
        flexDirection="row"
        justifyContent="space-between"
        pt={moderateScale(12)}
      >
        <TextInput
          multiline
          flex={1}
          placeholder={placeholders[selectedOption]}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
        <IconButton Icon={ExpandSVG} pt={moderateScale(8)} />
      </Container>
      <Container
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        mt={moderateScale(16)}
      >
        <Container
          flexDirection="row"
          justifyContent="space-between"
          width={moderateScale(120)}
        >
          <IconButton
            Icon={ReplySVG}
            opacity={isReplyOptionSelected ? 1 : 0.5}
            onPress={() => setSelectedOption("reply")}
          />
          <IconButton
            Icon={NoteSVG}
            opacity={isReplyOptionSelected ? 0.5 : 1}
            onPress={() => setSelectedOption("note")}
          />
          <IconButton Icon={ForwardSVG} opacity={0.5} onPress={onForward} />
          <IconButton
            Icon={CannedResponseSVG}
            opacity={0.5}
            onPress={onCannedResponse}
          />
        </Container>
        <Typography color="font.grey500" fontFamily="sf600">
          Reply
        </Typography>
      </Container>
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
   * onForward which will get trigged on forward.
   */
  onForward: PropTypes.func,
  /**
   * onCannedResponse which will get trigged on press of canned response.
   */
  onCannedResponse: PropTypes.func,
  /**
   * To display error/info messages
   */
  errorMessage: PropTypes.string,
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled: PropTypes.bool,
  /**
   * If true, shows border on focus.
   */
  autoFocus: PropTypes.bool,
  /**
   * Display Icon component to the left of input.
   */
  PrefixIcon: PropTypes.elementType,
  /**
   * Display Icon component to the Right of input.
   */
  SuffixIcon: PropTypes.elementType,
  /**
   * Takes a boolean value based on which border is hidden/shown.
   */
  noBorder: PropTypes.bool,
  /**
   * Used to pass custom styles to the wrapper component.
   */
  containerProps: PropTypes.object,
  /**
   * Used to align the position of text in input.
   */
  textAlignVertical: PropTypes.oneOf(["auto", "top", "bottom", "center"]),
  /**
   * Show Input AccessoryView on iOS
   */
  showInputAccessoryView: PropTypes.bool,
};

export const styles = StyleSheet.create({
  doneButtonStyle: {
    fontFamily: "sf700",
    color: theme.colors.font.base,
  },
});
