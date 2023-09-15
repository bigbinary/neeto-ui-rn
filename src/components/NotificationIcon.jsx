import React from "react";

import { Notification } from "@bigbinary/neeto-icons-rn";
import PropTypes from "prop-types";

import { Container, ActionIcon } from "@components";

export const NotificationIcon = ({ unreadCount = 0, onPress = () => {} }) => (
  <Container>
    <ActionIcon icon={Notification} {...{ onPress }} />
    {unreadCount > 0 && (
      <Container
        bg="background.danger"
        borderRadius={5}
        height={10}
        position="absolute"
        px={2}
        py={1}
        right={10}
        top={7}
        width={10}
        zIndex={1}
      />
    )}
  </Container>
);

NotificationIcon.propTypes = {
  /**
   * The unread notifications count to show red indicator
   */
  unreadCount: PropTypes.number,
  /**
   * Func which will be triggered on click of the notification icon.
   */
  onPress: PropTypes.func,
};
