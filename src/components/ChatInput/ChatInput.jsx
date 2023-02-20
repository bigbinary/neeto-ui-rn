import React, { useEffect, useRef, useCallback, useState } from "react";
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

import AttachmentSVG from "@assets/icons/attachment.svg";
import CannedResponseSVG from "@assets/icons/canned-response.svg";
import ExpandSVG from "@assets/icons/expand.svg";
import ForwardSVG from "@assets/icons/forward.svg";
import MinimizeSVG from "@assets/icons/minimize.svg";
import NoteSVG from "@assets/icons/note.svg";
import ReplySVG from "@assets/icons/reply.svg";
import { Container, Divider, Button } from "@components";

import { AttachmentsView } from "./AttachmentsView";
import { EmailFields } from "./EmailFields";
import { IconButton } from "./IconButton";

import { theme } from "../../theme";

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

const placeholders = {
  reply: "Type here to reply...",
  note: "Add note here...",
  forward: "Type here to forward...",
};

const labels = {
  reply: "Reply",
  note: "Add note",
  forward: "Forward",
};

export const ChatInput = ({
  shouldShowEmailFields,
  value = "",
  onChangeText = () => {},
  onForward,
  onCannedResponse,
  toEmails: initialToEmails,
  onReply = () => {},
  onAddNote = () => {},
  onAttachment = () => {},
  attachmentsCount,
  Attachments,
  showCannedResponsesFor = ["reply"],
  disabled,
  ...rest
}) => {
  const inputRef = useRef();

  const [selectedOption, setSelectedOption] = useState("reply");
  const [isEmailFieldsVisible, setIsEmailFieldsVisible] = useState(false);
  const [isAttachmentsVisible, setIsAttachmentsVisible] = useState(false);

  const isReplyOptionSelected = selectedOption === "reply";
  const isNoteOptionSelected = selectedOption === "note";
  const isForwardOptionSelected = selectedOption === "forward";

  const [toEmails, setToEmails] = useState(initialToEmails ?? "");
  const [ccEmails, setCcEmails] = useState("");
  const [bccEmails, setBccEmails] = useState("");

  useEffect(() => {
    if (isReplyOptionSelected) {
      setToEmails(initialToEmails ?? "");
    } else {
      setToEmails("");
    }
  }, [initialToEmails, isReplyOptionSelected]);

  const onActionHandler = useCallback(() => {
    ({
      reply: () => {
        onReply({ toEmails, ccEmails, bccEmails });
      },
      note: () => {
        onAddNote({ toEmails, ccEmails, bccEmails });
      },
      forward: () => {
        onForward({ toEmails, ccEmails, bccEmails });
      },
    }[selectedOption]());
  }, [
    bccEmails,
    ccEmails,
    onAddNote,
    onForward,
    onReply,
    selectedOption,
    toEmails,
  ]);

  return (
    <Container>
      <Divider bg="background.grey200" thickness={moderateScale(0.5)} />
      <Container
        bg={isNoteOptionSelected ? "background.oldLace" : "transparent"}
        p={5}
        pt={0}
        px={16}
      >
        <Container pt={moderateScale(8)}>
          <EmailFields
            bccEmails={bccEmails}
            ccEmails={ccEmails}
            isEmailFieldsVisible={isEmailFieldsVisible}
            setBccEmails={setBccEmails}
            setCcEmails={setCcEmails}
            setIsEmailFieldsVisible={setIsEmailFieldsVisible}
            setToEmails={setToEmails}
            shouldShowEmailFields={shouldShowEmailFields}
            toEmails={toEmails}
          />
          <Container flexDirection="row" justifyContent="space-between">
            <TextInput
              multiline
              flex={1}
              placeholder={placeholders[selectedOption]}
              py={moderateScale(12)}
              ref={inputRef}
              value={value}
              onChangeText={onChangeText}
              onFocus={() => {
                setIsEmailFieldsVisible(false);
              }}
              onTouchStart={() => {
                setIsAttachmentsVisible(false);
                setIsEmailFieldsVisible(false);
              }}
              {...rest}
            />
            {isEmailFieldsVisible || isAttachmentsVisible ? (
              <IconButton
                Icon={MinimizeSVG}
                pt={moderateScale(8)}
                onPress={() => {
                  setIsEmailFieldsVisible(false);
                  setIsAttachmentsVisible(false);
                }}
              />
            ) : (
              <IconButton
                Icon={ExpandSVG}
                pt={moderateScale(8)}
                onPress={() => {
                  setIsEmailFieldsVisible(true);
                  setIsAttachmentsVisible(true);
                }}
              />
            )}
          </Container>
          <AttachmentsView
            Attachments={Attachments}
            attachmentsCount={attachmentsCount}
            isAttachmentsVisible={isAttachmentsVisible}
            setIsAttachmentsVisible={setIsAttachmentsVisible}
          />
          <Container
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            mt={moderateScale(10)}
          >
            <Container flexDirection="row" justifyContent="space-between">
              <IconButton
                Icon={ReplySVG}
                opacity={isReplyOptionSelected ? 1 : 0.5}
                pl={10}
                onPress={() => {
                  inputRef.current.focus();
                  setIsEmailFieldsVisible(false);
                  setSelectedOption("reply");
                }}
              />
              <IconButton
                Icon={NoteSVG}
                opacity={isNoteOptionSelected ? 1 : 0.5}
                onPress={() => {
                  inputRef.current.focus();
                  setIsEmailFieldsVisible(false);
                  setSelectedOption("note");
                }}
              />
              {onForward && (
                <IconButton
                  Icon={ForwardSVG}
                  opacity={isForwardOptionSelected ? 1 : 0.5}
                  onPress={() => {
                    inputRef.current.focus();
                    setIsEmailFieldsVisible(true);
                    setSelectedOption("forward");
                  }}
                />
              )}
              <Container bg="background.grey400" mx={5} p={0.4} />
              {onCannedResponse &&
                showCannedResponsesFor.includes(selectedOption) && (
                  <IconButton
                    Icon={CannedResponseSVG}
                    opacity={0.5}
                    onPress={onCannedResponse}
                  />
                )}
              <IconButton
                Icon={AttachmentSVG}
                opacity={0.5}
                onPress={() => {
                  onAttachment();
                  setIsAttachmentsVisible(true);
                }}
              />
            </Container>
            <Button
              disabled={disabled}
              height={30}
              label={labels[selectedOption]}
              variant="text"
              onPress={onActionHandler}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

ChatInput.propTypes = {
  shouldShowEmailFields: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onForward: PropTypes.func,
  onCannedResponse: PropTypes.func,
  toEmails: PropTypes.string,
  onReply: PropTypes.func,
  onAddNote: PropTypes.func,
  onAttachment: PropTypes.func,
  attachmentsCount: PropTypes.number,
  Attachments: PropTypes.any,
  showCannedResponsesFor: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
};

export const styles = StyleSheet.create({
  doneButtonStyle: {
    fontFamily: "sf700",
    color: theme.colors.font.base,
  },
});
