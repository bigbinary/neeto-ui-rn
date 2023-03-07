import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";
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
import { Container, LineLoader, Popover, Button } from "@components";

import { AttachmentsView } from "./AttachmentsView";
import { EmailFields } from "./EmailFields";
import { IconButton } from "./IconButton";

import { theme } from "../../theme";

const placeholders = {
  reply: "Type here to reply...",
  note: "Add note here...",
  forward: "Type here to forward...",
};

// eslint-disable-next-line @bigbinary/neeto/no-dangling-constants
const OPTION_TYPES = {
  REPLY: "REPLY",
  NOTE: "NOTE",
  FORWARD: "FORWARD",
};

const labels = {
  [OPTION_TYPES.REPLY]: "Reply",
  [OPTION_TYPES.NOTE]: "Add note",
  [OPTION_TYPES.FORWARD]: "Forward",
};

const TextInput = styled.TextInput`
  ${flexbox}
  ${space}
  ${border}
  ${buttonStyle}
  ${typography}
  ${color}
`;
/**
 * ChatInput component supports various options like `REPLY`, `NOTE` and `FORWARD`.
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
 *   <img src="screenshots/chatInput/chatInput.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Typography, ChatInput, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  const [value, setValue] = React.useState(
 *    "Hey Oliver, We are working on this issue. We will keep you update");
 *
 *  return (
 *    <Container flex={1}>
 *      <Container alignItems="center" flex={1} justifyContent="center">
 *        <Typography> Desk Example</Typography>
 *      </Container>
 *      <Container align-self="end">
 *        <ChatInput
 *          shouldShowEmailFields
 *          attachmentsCount={2}
 *          toEmails="oliver@example.com"
 *          value={value}
 *          Attachments={
 *            <Container alignItems="flex-start">
 *              <AnimatedImage
 *                imageHeight={30}
 *                imageUrl="https://picsum.photos/255/139"
 *                imageWidth={30}
 *                resizeMode="cover"
 *              />
 *            </Container>
 *          }
 *          onChangeText={setValue}
 *          onCannedResponse={() => {
 *            alert("On Canned Response");
 *          }}
 *          onForward={() => {
 *            alert("On Forward");
 *          }}
 *        />
 *      </Container>
 *    </Container>
 *  );
 * }
 * ```
 */

export const ChatInput = forwardRef(
  (
    {
      shouldShowEmailFields,
      showReplyMenuOptions,
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
      showCannedResponsesFor = [OPTION_TYPES.REPLY],
      disabled,
      isLoading = true,
      onOptionChange = () => {},
      initialSelectedOption = OPTION_TYPES.REPLY,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef();

    const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
    const [isEmailFieldsVisible, setIsEmailFieldsVisible] = useState(false);
    const [isAttachmentsVisible, setIsAttachmentsVisible] = useState(false);

    const isReplyOptionSelected = selectedOption === OPTION_TYPES.REPLY;
    const isNoteOptionSelected = selectedOption === OPTION_TYPES.NOTE;
    const isForwardOptionSelected = selectedOption === OPTION_TYPES.FORWARD;

    const [toEmails, setToEmails] = useState(initialToEmails ?? []);
    const [toEmailsForForward, setToEmailsForForward] = useState([]);
    const [ccEmails, setCcEmails] = useState([]);
    const [bccEmails, setBccEmails] = useState([]);

    const moreReplyOptions = [
      {
        label: "Send and set as closed",
        Icon: () => null,
        onPress: () => {
          onReply({ toEmails, ccEmails, bccEmails, status: "closed" });
        },
      },
      {
        label: "Send and set as waiting on customer",
        Icon: () => null,
        onPress: () => {
          onReply({
            toEmails,
            ccEmails,
            bccEmails,
            status: "waiting_on_customer",
          });
        },
      },
    ];

    useImperativeHandle(
      ref,
      () => ({
        clearEmailFields: () => {
          setToEmails(initialToEmails ?? []);
          setToEmailsForForward([]);
          setCcEmails([]);
          setBccEmails([]);
          inputRef.current.blur();
        },
      }),
      [initialToEmails, isReplyOptionSelected]
    );

    useEffect(() => {
      onOptionChange(selectedOption);
    }, [selectedOption]);

    useEffect(() => {
      setSelectedOption(initialSelectedOption);
    }, [initialSelectedOption]);

    useEffect(() => {
      setToEmails(initialToEmails ?? []);
    }, [initialToEmails]);

    const showEmailFieldsAndAttachments = () => {
      setIsAttachmentsVisible(true);
      setIsEmailFieldsVisible(true);
    };

    const hideEmailFieldsAndAttachments = () => {
      setIsAttachmentsVisible(false);
      setIsEmailFieldsVisible(false);
    };

    const onReplyClickHandler = () => {
      hideEmailFieldsAndAttachments();
      inputRef.current.focus();
      setSelectedOption(OPTION_TYPES.REPLY);
    };

    const onAddNoteClickHandler = () => {
      hideEmailFieldsAndAttachments();
      inputRef.current.focus();
      setIsEmailFieldsVisible(false);
      setSelectedOption(OPTION_TYPES.NOTE);
    };

    const onAddForwardClickHandler = () => {
      inputRef.current.focus();
      setIsEmailFieldsVisible(true);
      setIsAttachmentsVisible(false);
      setSelectedOption(OPTION_TYPES.FORWARD);
    };

    const onAddAttachmentsClickHandler = () => {
      if (!isAttachmentsVisible && attachmentsCount > 0) {
        // When attachments are not visible but there are few attachments then we no need to show the upload modal.
      } else {
        onAttachment();
      }
      setIsEmailFieldsVisible(false);
      setIsAttachmentsVisible(true);
    };

    const onActionHandler = useCallback(() => {
      ({
        [OPTION_TYPES.REPLY]: () => {
          onReply({ toEmails, ccEmails, bccEmails });
        },
        [OPTION_TYPES.NOTE]: () => {
          onAddNote({ toEmails, ccEmails, bccEmails });
        },
        [OPTION_TYPES.FORWARD]: () => {
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

    const shouldExpandAndMinimizeButton = attachmentsCount > 0 || toEmails;
    const shouldDisableWhenForwardAndToFieldMissing =
      isForwardOptionSelected && toEmailsForForward.length === 0;

    return (
      <Container>
        <LineLoader
          backgroundColor={theme.colors.background.grey400}
          isLoading={isLoading}
        />
        <Container
          bg={isNoteOptionSelected ? "background.oldLace" : "transparent"}
          p={moderateScale(5)}
          pt={0}
          px={moderateScale(16)}
        >
          <Container pt={moderateScale(8)}>
            <EmailFields
              bccEmails={bccEmails}
              ccEmails={ccEmails}
              isEmailFieldsVisible={isEmailFieldsVisible}
              isForwardOptionSelected={isForwardOptionSelected}
              isNoteOptionSelected={isNoteOptionSelected}
              isReplyOptionSelected={isReplyOptionSelected}
              setBccEmails={setBccEmails}
              setCcEmails={setCcEmails}
              setIsEmailFieldsVisible={setIsEmailFieldsVisible}
              setToEmails={setToEmails}
              setToEmailsForForward={setToEmailsForForward}
              shouldShowEmailFields={shouldShowEmailFields}
              toEmails={toEmails}
              toEmailsForForward={toEmailsForForward}
            />
            <Container flexDirection="row" justifyContent="space-between">
              <TextInput
                multiline
                flex={1}
                maxHeight={moderateScale(150)}
                my={moderateScale(12)}
                overflow="hidden"
                placeholder={placeholders[selectedOption]}
                ref={inputRef}
                value={value}
                onChangeText={onChangeText}
                onTouchStart={hideEmailFieldsAndAttachments}
                {...rest}
              />
              <Container alignSelf="center">
                {shouldExpandAndMinimizeButton &&
                  (isEmailFieldsVisible || isAttachmentsVisible ? (
                    <IconButton
                      Icon={MinimizeSVG}
                      height={moderateScale(30)}
                      pt={moderateScale(8)}
                      width={moderateScale(30)}
                      onPress={hideEmailFieldsAndAttachments}
                    />
                  ) : (
                    <IconButton
                      Icon={ExpandSVG}
                      height={moderateScale(30)}
                      pt={moderateScale(8)}
                      width={moderateScale(30)}
                      onPress={showEmailFieldsAndAttachments}
                    />
                  ))}
              </Container>
            </Container>
            <AttachmentsView
              Attachments={Attachments}
              attachmentsCount={attachmentsCount}
              isAttachmentsVisible={isAttachmentsVisible}
              isNoteOptionSelected={isNoteOptionSelected}
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
                  pl={moderateScale(10)}
                  onPress={onReplyClickHandler}
                />
                <IconButton
                  Icon={NoteSVG}
                  opacity={isNoteOptionSelected ? 1 : 0.5}
                  onPress={onAddNoteClickHandler}
                />
                {onForward && (
                  <IconButton
                    Icon={ForwardSVG}
                    opacity={isForwardOptionSelected ? 1 : 0.5}
                    onPress={onAddForwardClickHandler}
                  />
                )}
                <Container
                  bg="background.grey400"
                  mx={moderateScale(5)}
                  p={moderateScale(0.4)}
                />
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
                  onPress={onAddAttachmentsClickHandler}
                />
              </Container>
              <Container alignItems="center" flexDirection="row">
                <Button
                  height={moderateScale(30)}
                  label={labels[selectedOption]}
                  pr={0}
                  variant="text"
                  disabled={
                    shouldDisableWhenForwardAndToFieldMissing || disabled
                  }
                  labelStyle={{
                    mx: moderateScale(0),
                  }}
                  onPress={onActionHandler}
                />
                {showReplyMenuOptions && isReplyOptionSelected && (
                  <Popover
                    data={moreReplyOptions}
                    from={
                      <Button
                        disabled={disabled}
                        height={moderateScale(30)}
                        label=""
                        p={0}
                        variant="text"
                        RightIcon={() => (
                          <Icon
                            color={theme.colors.background.grey800}
                            name="ri-arrow-down-s-line"
                            size={moderateScale(30)}
                          />
                        )}
                      />
                    }
                  />
                )}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
);

ChatInput.displayName = "ChatInput";
ChatInput.propTypes = {
  /**
   * If true, Shows loader
   */
  isLoading: PropTypes.bool,
  /**
   * If true, Shows to, cc and bcc email inputs.
   */
  shouldShowEmailFields: PropTypes.bool,
  /**
   * If true, Shows reply menu options
   */
  showReplyMenuOptions: PropTypes.bool,
  /**
   * Value to make input component controllable.
   */
  value: PropTypes.string,
  /**
   * To set the initial selected option
   */
  initialSelectedOption: PropTypes.oneOf(Object.values(OPTION_TYPES)),
  /**
   * Callback to be called when user selection option.
   */
  onOptionChange: PropTypes.func,
  /**
   * Callback to be called when the input text changes.
   */
  onChangeText: PropTypes.func,
  /**
   * Callback to be called on click of forward icon.
   */
  onForward: PropTypes.func,
  /**
   * Callback to be called on click of canned responses icon.
   */
  onCannedResponse: PropTypes.func,
  /**
   * Email list separated by comma.
   */
  toEmails: PropTypes.arrayOf(PropTypes.string),
  /**
   * Callback to be called on click of reply icon.
   */
  onReply: PropTypes.func,
  /**
   * Callback to be called on click of add note icon.
   */
  onAddNote: PropTypes.func,
  /**
   * Callback to be called on click of attachment icon.
   */
  onAttachment: PropTypes.func,
  /**
   * Count of attachments.
   */
  attachmentsCount: PropTypes.number,
  /**
   * Component to render attachments.
   */
  Attachments: PropTypes.any,
  /**
   * Array for options to show canned responses. Example: ["reply","notes","forward"]
   */
  showCannedResponsesFor: PropTypes.arrayOf(
    PropTypes.oneOf(Object.values(OPTION_TYPES))
  ),
  /**
   * If true, Disables the reply, forward and add note button.
   */
  disabled: PropTypes.bool,
};
