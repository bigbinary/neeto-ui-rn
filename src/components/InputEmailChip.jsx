import React, { useContext, useRef, useState } from "react";
import { Platform } from "react-native";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

import { Container, Chip, Input, Typography } from "@components";

import { endsWithChars, trimChars, isValidEmail } from "../utils/utils";

const gap = moderateScale(4);

const chipWrapperStyle = {
  pt: gap,
};

const getChipContainerStyle = isReadyForDeletion => ({
  borderColor: isReadyForDeletion ? "border.danger" : "border.grey200",
});

export const InputEmailChip = ({
  disabled,
  label,
  emails = [],
  onUpdate,
  delimiters = [" ", ","],
}) => {
  const theme = useContext(ThemeContext);
  const inputRef = useRef();

  const [textValue, setTextValue] = useState("");
  const [shouldShowInput, setShouldShowInput] = useState(false);
  const [emailIndexForDeletion, setEmailIndexForDeletion] = useState(-1);

  const handleKeyPress = event => {
    const { key } = event.nativeEvent || {};

    if (!(textValue === "" && key === "Backspace" && emails.length > 0)) return;

    if (emailIndexForDeletion === -1) {
      setEmailIndexForDeletion(emails.length - 1);
    } else {
      removeEmail({ lastOne: true });
      setEmailIndexForDeletion(-1);
    }
  };

  const handleSubmitEditing = event => {
    const { text } = event.nativeEvent || {};
    setEmailIndexForDeletion(-1);
    checkAndUpdateEmails(text);
  };

  const handleTextChange = text => {
    if (!endsWithChars(text, delimiters)) {
      setEmailIndexForDeletion(-1);
      setTextValue(text);

      return;
    }

    checkAndUpdateEmails(text);
  };

  const handleInputTouchStart = () => setEmailIndexForDeletion(-1);

  const handleTouchStart = () => {
    if (disabled) return;

    if (!inputRef.current?.isFocused()) {
      inputRef.current?.focus();
    }
  };

  const handleOnFocus = () => setShouldShowInput(true);

  const handleOnBlur = () => {
    if (textValue.trim() === "") {
      setShouldShowInput(false);
    }
  };

  const checkAndUpdateEmails = text => {
    const emailCandidate = trimChars(text, delimiters);

    if (
      emailCandidate !== "" && // Non empty email
      isValidEmail(emailCandidate) && // Valid email
      !emails.includes(emailCandidate) // Unique email
    ) {
      const _emails = [...emails, emailCandidate];
      setTextValue("");
      onUpdate && onUpdate(_emails);
    } else {
      setTextValue(text);
    }
  };

  const removeEmail = ({ email, lastOne = false }) => {
    const indexOfEmail = lastOne ? emails.length - 1 : emails.indexOf(email);

    if (indexOfEmail !== -1) {
      const _emails = [...emails];
      _emails.splice(indexOfEmail, 1);
      onUpdate && onUpdate(_emails);
    }
  };

  const inputProps = {
    autoCorrect: false,
    fontSize: "xs",
    returnKeyType: "done",
    autoCapitalize: "none",
    keyboardType: "email-address",
    padding: 0,
    minHeight: moderateScale(26),
    selectionColor:
      emailIndexForDeletion === -1 ? theme.colors.font.base : "transparent",
  };

  return (
    <Container
      flexDirection="row"
      minHeight={moderateScale(30)}
      py={moderateScale(2)}
      width="100%"
      onTouchStart={handleTouchStart}
    >
      {!!label && (
        <Typography
          color={disabled ? "font.grey400" : "font.grey600"}
          fontSize="xs"
          mr={moderateScale(8)}
          mt={Platform.select({
            android: moderateScale(10),
            ios: moderateScale(8),
          })}
        >
          {label}
        </Typography>
      )}
      <Container
        alignItems="center"
        flex={1}
        flexDirection="row"
        flexWrap="wrap"
      >
        {emails.map((email, index) => (
          <Container key={email} {...chipWrapperStyle}>
            <Chip
              isDisabled={disabled}
              label={email}
              containerStyle={getChipContainerStyle(
                index === emailIndexForDeletion
              )}
              onClose={disabled ? null : () => removeEmail({ email })}
            />
          </Container>
        ))}
        {!disabled && (
          <Container
            alignItems="center"
            flex={1}
            justifyContent="center"
            minWidth={moderateScale(160)}
            paddingTop={Platform.select({
              ios: gap,
              android: moderateScale(7),
            })}
            {...(shouldShowInput ? {} : { height: 0 })}
          >
            <Input
              noBorder
              disabled={disabled}
              value={textValue}
              inputProps={{
                ...inputProps,
                ref: inputRef,
                onKeyPress: handleKeyPress,
                onSubmitEditing: handleSubmitEditing,
                onTouchStart: handleInputTouchStart,
                onFocus: handleOnFocus,
                onBlur: handleOnBlur,
              }}
              onChangeText={handleTextChange}
            />
          </Container>
        )}
      </Container>
    </Container>
  );
};

InputEmailChip.propTypes = {
  /**
   * Label for the input field
   */
  disabled: PropTypes.bool,
  /**
   * Label for the input field
   */
  label: PropTypes.string,
  /**
   * Array of emails to be set
   */
  emails: PropTypes.arrayOf(PropTypes.string),
  /**
   * Characters to be used for separating emails while entering
   * By default `,`, ` ` and enter/done triggers chip creation for the entered email.
   */
  delimiters: PropTypes.arrayOf(PropTypes.string),
  /**
   * Callback containing the emails. It is triggered when an email is added or removed.
   */
  onUpdate: PropTypes.func,
};
