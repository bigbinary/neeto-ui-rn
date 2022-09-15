import React, { useContext } from "react";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

import { Container, Typography } from "@components";
import { ThemeContext } from "styled-components/native";

/**
 *
 * Buttons are touchable elements used to interact with the screen and to trigger an action.
 *
 * <div class="screenshots">
 *   <img src="screenshots/organizationItem/organizationItem.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { OrganizationItem } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <OrganizationItem name="BigBinary Solutions Pvt. Ltd." />
 *  );
 * }
 * ```
 *
 */

export const OrganizationItem = props => {
  const {
    label,
    name,
    wrapperProps,
    containerProps,
    iconContainerProps,
    iconProps,
    textContainerProps,
    labelProps,
    nameProps,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <Container
      flexDirection="row"
      bg="background.secondary"
      width="100%"
      px={16}
      py={12}
      borderRadius={6}
      alignItems="center"
      justifyContent="space-between"
      {...wrapperProps}
    >
      <Container
        flexDirection="row"
        alignItems="flex-start"
        {...containerProps}
      >
        <Container mr={9} {...iconContainerProps}>
          <Icon
            size={20}
            color={theme.colors.font.grey800}
            name="building-line"
            {...iconProps}
          />
        </Container>
        <Container flex={1} {...textContainerProps}>
          <Typography
            color="font.grey800"
            fontSize="l"
            fontFamily="sf500"
            {...labelProps}
          >
            {label || "Organization"}
          </Typography>
          <Typography
            color="font.grey"
            fontSize="m"
            fontFamily="sf500"
            mt="8px"
            {...nameProps}
          >
            {name}
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

OrganizationItem.propTypes = {
  /**
   * Organization label
   */
  label: PropTypes.string,
  /**
   * Organization name
   */
  name: PropTypes.string.isRequired,
  /**
   * Customize outermost container
   */
  wrapperProps: PropTypes.object,
  /**
   * Customize inner container
   */
  containerProps: PropTypes.object,
  /**
   * Customize icon container
   */
  iconContainerProps: PropTypes.object,
  /**
   * Customize icon
   */
  iconProps: PropTypes.object,
  /**
   * Customize label and name container
   */
  textContainerProps: PropTypes.object,
  /**
   * Customize label
   */
  labelProps: PropTypes.object,
  /**
   * Customize name
   */
  nameProps: PropTypes.object,
};
