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
 *        LeftComponent={() => <Typography mr={2}>📣</Typography>}
 *        label="Organization"
 *        value={() => <Typography>Bigbinary</Typography>}
 *      />
 *    </Container>
 *  );
 * }
 * ```
 */

export const ListItem = ({ LeftComponent, label, RightComponent }) => {
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
        {LeftComponent && <LeftComponent />}
        <Typography color="font.grey800" fontSize="l" fontFamily="sf400">
          {label}
        </Typography>
      </Container>
      <RightComponent />
    </Container>
  );
};

ListItem.propTypes = {
  LeftComponent: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  RightComponent: PropTypes.elementType.isRequired,
};
