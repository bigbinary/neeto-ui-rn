import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Body component is built on top of typography component with default font family and font size.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Body, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Body>
 *         This is basic example of Body
 *      </Body>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Body = ({ children, rest }) => {
  return (
    <Typography fontSize="body" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};

Body.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
