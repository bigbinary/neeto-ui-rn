import * as React from "react";

import propTypes from "@styled-system/prop-types";
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

export const ListItem = ({ LeftComponent, label, RightComponent, ...rest }) => (
  <Container
    alignItems="center"
    bg="background.secondary"
    borderRadius={6}
    flexDirection="row"
    justifyContent="space-between"
    px={16}
    py={12}
    width="100%"
    {...rest}
  >
    <Container alignItems="center" flexDirection="row" width="50%">
      {LeftComponent && <LeftComponent />}
      <Typography color="font.grey800" fontFamily="sf500" fontSize="l">
        {label}
      </Typography>
    </Container>
    <Container alignItems="flex-end" width="50%">
      <RightComponent />
    </Container>
  </Container>
);

ListItem.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  LeftComponent: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  RightComponent: PropTypes.elementType.isRequired,
};
