import React from "react";

import PropTypes from "prop-types";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

import { Badge } from "./Badge";

export const AttachmentsView = ({
  isAttachmentsVisible,
  setIsAttachmentsVisible,
  Attachments,
  attachmentsCount,
  isNoteOptionSelected,
}) =>
  isAttachmentsVisible ? (
    attachmentsCount !== 0 && (
      <Animated.View entering={FadeInUp} key={isAttachmentsVisible}>
        {Attachments}
      </Animated.View>
    )
  ) : (
    <>
      {attachmentsCount > 0 && (
        <Animated.View
          alignItems="flex-start"
          entering={FadeInDown}
          flexDirection="row"
          flexWrap="wrap"
          key={isAttachmentsVisible}
          onTouchStart={() => setIsAttachmentsVisible(true)}
        >
          <Badge
            isNoteOptionSelected={isNoteOptionSelected}
            text="Attachments"
          />
          <Badge
            isNoteOptionSelected={isNoteOptionSelected}
            text={`+ ${attachmentsCount}`}
          />
        </Animated.View>
      )}
    </>
  );

AttachmentsView.propTypes = {
  isAttachmentsVisible: PropTypes.bool,
  setIsAttachmentsVisible: PropTypes.func,
  Attachments: PropTypes.any,
  attachmentsCount: PropTypes.number,
  isNoteOptionSelected: PropTypes.bool,
};
