import React from "react";

import PropTypes from "prop-types";

import { Container } from "@components";

import { Badge } from "./Badge";

export const AttachmentsView = ({
  isAttachmentsVisible,
  setIsAttachmentsVisible,
  Attachments,
  attachmentsCount,
}) =>
  isAttachmentsVisible ? (
    attachmentsCount !== 0 && Attachments
  ) : (
    <>
      {attachmentsCount > 0 && (
        <Container
          alignItems="flex-start"
          flexDirection="row"
          flexWrap="wrap"
          onTouchStart={() => setIsAttachmentsVisible(true)}
        >
          <Badge text="Attachments" />
          <Badge text={`+ ${attachmentsCount}`} />
        </Container>
      )}
    </>
  );

AttachmentsView.propTypes = {
  isAttachmentsVisible: PropTypes.bool,
  setIsAttachmentsVisible: PropTypes.func,
  Attachments: PropTypes.any,
  attachmentsCount: PropTypes.number,
};
