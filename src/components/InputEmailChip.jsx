import React, { useContext, useState } from "react";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

import { Container, Chip, Input, Typography } from "@components";

import { endsWithChars, trimChars, isValidEmail } from "../utils/utils";

const gap = moderateScale(4);

const chipWrapperStyle = {
  pt: gap,
};

const chipContainerStyle = readyForDeletion => ({
  borderColor: readyForDeletion ? "border.danger" : "border.grey200",
});

export const InputEmailChip = ({
  disabled,
  label,
  initialEmails,
  onUpdate,
  delimiters = [" ", ","],
}) => {
  const theme = useContext(ThemeContext);

  const [emails, setEmails] = useState(initialEmails || []);
  const [textValue, setTextValue] = useState("");
  const [emailIndexForDeletion, setEmailIndexForDeletion] = useState(-1);

  const handleKeyPress = event => {
    const { key } = event?.nativeEvent || {};

    if (textValue === "" && key === "Backspace" && emails.length > 0) {
      if (emailIndexForDeletion === -1) {
        setEmailIndexForDeletion(emails.length - 1);
      } else {
        removeEmail({ lastOne: true });
        setEmailIndexForDeletion(-1);
      }
    }
  };

  const handleSubmitEditing = event => {
    const { text } = event?.nativeEvent || {};
    checkAndUpdateEmails(text);
  };

  const handleTextChange = text => {
    if (!endsWithChars(text, delimiters)) {
      setTextValue(text);

      return;
    }

    checkAndUpdateEmails(text);
  };

  const handleTouchStart = () => {
    if (emailIndexForDeletion === -1) return;
    setEmailIndexForDeletion(-1);
  };

  const checkAndUpdateEmails = text => {
    const emailCandidate = trimChars(text, delimiters);

    if (
      emailCandidate !== "" && // Non empty email
      isValidEmail(emailCandidate) && // Valid email
      !emails.includes(emailCandidate) // Unique email
    ) {
      const _emails = [...emails, emailCandidate];
      setEmails(_emails);
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
      setEmails(_emails);
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
    selectionColor:
      emailIndexForDeletion === -1 ? theme.colors.font.base : "transparent",
  };

  return (
    <Container flexDirection="row" width="100%">
      {!!label && (
        <Typography
          color={disabled ? "font.grey400" : "font.grey600"}
          fontSize="xs"
          mr={moderateScale(8)}
          pt={moderateScale(8)}
        >
          {label}
        </Typography>
      )}
      <Container
        alignItems="center"
        flex={1}
        flexDirection="row"
        flexWrap="wrap"
        pb={gap}
      >
        {emails.map((email, index) => (
          <Container key={email} {...chipWrapperStyle}>
            <Chip
              isDisabled={disabled}
              label={email}
              containerStyle={chipContainerStyle(
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
            minWidth={moderateScale(100)}
            pt={gap}
          >
            <Input
              noBorder
              disabled={disabled}
              value={textValue}
              inputProps={{
                ...inputProps,
                onKeyPress: handleKeyPress,
                onSubmitEditing: handleSubmitEditing,
                onTouchStart: handleTouchStart,
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
   * Array of emails to be set initially
   */
  initialEmails: PropTypes.arrayOf(PropTypes.string),
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