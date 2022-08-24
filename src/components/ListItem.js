import * as React from "react";
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";

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

export const ListItem = ({ LeftComponent, label, RightComponent, ...rest }) => {
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
      {...rest}
    >
      <Container flexDirection="row" alignItems="center" width="50%">
        {LeftComponent && <LeftComponent />}
        <Typography color="font.grey800" fontSize="l" fontFamily="sf500">
          {label}
        </Typography>
      </Container>
      <Container width="50%" alignItems="flex-end">
        <RightComponent />
      </Container>
    </Container>
  );
};

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
