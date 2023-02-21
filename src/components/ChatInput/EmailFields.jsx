import React from "react";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";

import { Container, InputEmailChip, Typography } from "@components";

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
  isEmailFieldsVisible: PropTypes.bool,
  setIsEmailFieldsVisible: PropTypes.func,
  ccEmails: PropTypes.string,
  toEmails: PropTypes.string,
  bccEmails: PropTypes.string,
  setBccEmails: PropTypes.func,
  setCcEmails: PropTypes.func,
  setToEmails: PropTypes.func,
};
