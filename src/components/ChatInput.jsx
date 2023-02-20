import React, { useEffect, useCallback, useState } from "react";
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

import {
  Container,
  Divider,
  Touchable,
  InputEmailChip,
  Typography,
  Button,
} from "@components";

import AttachmentSVG from "../../assets/icons/attachment.svg";
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
    px={moderateScale(18)}
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
  forward: "Type here to forward...",
};

const labels = {
  reply: "Reply",
  note: "Add note",
  forward: "Forward",
};

export const EmailFields = ({
  shouldShowEmailFields,
  setIsEmailFieldsVisible,
  isEmailFieldsVisible,
  ccEmails,
  toEmails,
  bccEmails,
  setBccEmails,
  setCcEmails,
  setToEmails,
}) => {
  const firstToEmail = (toEmails.trim() ? toEmails.split(",") : [])[0] ?? "";

  const totalEmailsMinus1 =
    (toEmails.trim() ? toEmails.split(",") : []).length +
    (ccEmails.trim() ? ccEmails.split(",") : []).length +
    (bccEmails.trim() ? bccEmails.split(",") : []).length -
    1;

  if (!shouldShowEmailFields) return null;

  return isEmailFieldsVisible ? (
    <Container pb={moderateScale(10)}>
      <InputEmailChip
        disabled={false}
        emails={toEmails.trim() ? toEmails.split(",") : []}
        label="To:"
        py={2}
        onUpdate={emails => {
          setToEmails(emails.join(","));
        }}
      />
      <InputEmailChip
        disabled={false}
        emails={ccEmails.trim() ? ccEmails.split(",") : []}
        label="Cc:"
        onUpdate={emails => {
          setCcEmails(emails.join(","));
        }}
      />
      <InputEmailChip
        disabled={false}
        emails={bccEmails.trim() ? bccEmails.split(",") : []}
        label="Bcc:"
        onUpdate={emails => {
          setBccEmails(emails.join(","));
        }}
      />
    </Container>
  ) : (
    <Container alignItems="flex-start" flexDirection="row" flexWrap="wrap">
      {toEmails.length > 0 && (
        <>
          <Container
            alignSelf="flex-start"
            bg="background.oldLace"
            borderRadius={moderateScale(20)}
            flexDirection="row"
            flexGrow={0}
            px={4}
            onTouchStart={() => setIsEmailFieldsVisible(true)}
          >
            <Typography fontSize="3xs">To:{firstToEmail}</Typography>
          </Container>
          {totalEmailsMinus1 > 1 && (
            <Container
              alignSelf="flex-start"
              bg="background.oldLace"
              borderRadius={moderateScale(20)}
              flexDirection="row"
              flexGrow={0}
              px={4}
            >
              <Typography fontSize="3xs">+{totalEmailsMinus1}</Typography>
            </Container>
          )}
        </>
      )}
    </Container>
  );
};

EmailFields.propTypes = {
  shouldShowEmailFields: PropTypes.bool,
  isEmailFieldsVisible: PropTypes.any,
  setIsEmailFieldsVisible: PropTypes.any,
  ccEmails: PropTypes.any,
  toEmails: PropTypes.any,
  bccEmails: PropTypes.any,
  setBccEmails: PropTypes.any,
  setCcEmails: PropTypes.any,
  setToEmails: PropTypes.any,
};

const AttachmentsView = ({
  isAttachmentsVisible,
  setIsAttachmentsVisible,
  Attachments,
  attachmentsCount,
}) =>
  //

  isAttachmentsVisible ? (
    <>{Attachments}</>
  ) : (
    <>
      {attachmentsCount > 0 && (
        <Container
          alignItems="flex-start"
          flexDirection="row"
          flexWrap="wrap"
          onTouchStart={() => setIsAttachmentsVisible(true)}
        >
          <Container
            alignSelf="flex-start"
            bg="background.oldLace"
            borderRadius={moderateScale(20)}
            flexDirection="row"
            flexGrow={0}
            px={4}
          >
            <Typography fontSize="3xs">Attachments</Typography>
          </Container>
          <Container
            alignSelf="flex-start"
            bg="background.oldLace"
            borderRadius={moderateScale(20)}
            flexDirection="row"
            flexGrow={0}
            px={4}
          >
            <Typography fontSize="3xs">+{attachmentsCount}</Typography>
          </Container>
        </Container>
      )}
    </>
  );

AttachmentsView.propTypes = {
  isAttachmentsVisible: PropTypes.any,
  setIsAttachmentsVisible: PropTypes.any,
  Attachments: PropTypes.any,
  attachmentsCount: PropTypes.any,
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
  }, [isReplyOptionSelected]);

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
  }, [onAddNote, onForward, onReply]);

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
            <IconButton
              Icon={ExpandSVG}
              pt={moderateScale(8)}
              onPress={() => {
                setIsEmailFieldsVisible(!isEmailFieldsVisible);
                setIsAttachmentsVisible(!isEmailFieldsVisible);
              }}
            />
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
            mt={moderateScale(16)}
          >
            <Container flexDirection="row" justifyContent="space-between">
              <IconButton
                Icon={ReplySVG}
                opacity={isReplyOptionSelected ? 1 : 0.5}
                pl={10}
                onPress={() => {
                  setIsEmailFieldsVisible(false);
                  setSelectedOption("reply");
                }}
              />
              <IconButton
                Icon={NoteSVG}
                opacity={isNoteOptionSelected ? 1 : 0.5}
                onPress={() => {
                  setIsEmailFieldsVisible(false);
                  setSelectedOption("note");
                }}
              />
              {onForward && (
                <IconButton
                  Icon={ForwardSVG}
                  opacity={isForwardOptionSelected ? 1 : 0.5}
                  onPress={() => {
                    setIsEmailFieldsVisible(true);
                    setSelectedOption("forward");
                  }}
                />
              )}
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
              label={labels[selectedOption]}
              my={9}
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
  /**
   * The text to use for the floating label.
   */
  shouldShowEmailFields: PropTypes.bool,
  toEmails: PropTypes.any,
  bccEmails: PropTypes.any,
  ccEmails: PropTypes.any,

  showCannedResponsesFor: PropTypes.any,
  onReply: PropTypes.any,
  onAddNote: PropTypes.any,
  onAttachment: PropTypes.any,
  attachmentsCount: PropTypes.any,
  Attachments: PropTypes.any,

  /**
   * The text to use for the floating label.
   */
  disabled: PropTypes.bool,
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
