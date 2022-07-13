import * as React from "react";
import PropTypes from "prop-types";

import { Typography, Container } from "@components";

/**
 * ListItems are components that displays a label with different values like string, toggle, button etc.
 *
 *  <div class="screenshots">
 *   <img src="screenshots/listitem/listItemStyles.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, ListItem, Typography } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *      <ListItem
 *        LeftIcon={() => <Typography mr={2}>📣</Typography>}
 *        label="Organization"
 *        value={() => <Typography>Bigbinary</Typography>}
 *      />
 *    </Container>
 *  );
 * }
 * ```
 */

export const ListItem = ({ LeftIcon, label, value }) => {
  const ValueComponent = value;
  return (
    <Container
      flexDirection="row"
      bg="background.secondary"
      width="100%"
      p={3}
      m={3}
      borderRadius={6}
      alignItems="center"
      justifyContent="space-between"
    >
      <Container flexDirection="row" alignItems="center">
        {LeftIcon && <LeftIcon />}
        <Typography color="font.grey800" fontSize="l" fontFamily="sf400">
          {label}
        </Typography>
      </Container>
      <ValueComponent />
    </Container>
  );
};

ListItem.propTypes = {
  LeftIcon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  value: PropTypes.elementType.isRequired,
};
