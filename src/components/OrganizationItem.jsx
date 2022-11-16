import React, { useContext } from "react";

import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";
import { ThemeContext } from "styled-components/native";

import { Container, Typography } from "@components";

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

export const OrganizationItem = ({
  label,
  labelContainerProps,
  iconContainerProps,
  iconProps,
  labelProps,
  name,
  nameProps,
  ...rest
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Container
      bg="background.secondary"
      borderRadius={6}
      justifyContent="space-between"
      px={16}
      py={12}
      width="100%"
      {...rest}
    >
      <Container
        alignItems="center"
        flexDirection="row"
        {...labelContainerProps}
      >
        <Container mr={9} {...iconContainerProps}>
          <Icon
            color={theme.colors.font.grey800}
            name="building-line"
            size={20}
            {...iconProps}
          />
        </Container>
        <Typography
          color="font.grey800"
          fontFamily="sf500"
          fontSize="l"
          {...labelProps}
        >
          {label || "Organization"}
        </Typography>
      </Container>
      <Typography
        color="font.grey"
        fontFamily="sf500"
        fontSize="m"
        ml={29}
        mt="8px"
        {...nameProps}
      >
        {name}
      </Typography>
    </Container>
  );
};

OrganizationItem.propTypes = {
  /**
   * Organization label
   */
  label: PropTypes.string,
  /**
   * Customize label container
   */
  labelContainerProps: PropTypes.object,
  /**
   * Customize icon container
   */
  iconContainerProps: PropTypes.object,
  /**
   * Customize icon
   */
  iconProps: PropTypes.object,
  /**
   * Customize label
   */
  labelProps: PropTypes.object,
  /**
   * Organization name
   */
  name: PropTypes.string.isRequired,
  /**
   * Customize name
   */
  nameProps: PropTypes.object,
};
