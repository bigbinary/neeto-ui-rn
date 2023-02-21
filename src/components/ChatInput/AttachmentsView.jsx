import React from "react";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";

import { Container, Typography } from "@components";

export const AttachmentsView = ({
  isAttachmentsVisible,
  setIsAttachmentsVisible,
  Attachments,
  attachmentsCount,
}) =>
  isAttachmentsVisible ? (
    Attachments
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
  isAttachmentsVisible: PropTypes.bool,
  setIsAttachmentsVisible: PropTypes.func,
  Attachments: PropTypes.any,
  attachmentsCount: PropTypes.number,
};
