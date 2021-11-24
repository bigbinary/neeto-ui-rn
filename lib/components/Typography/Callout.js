import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Callout component is built on top of typography component with default font family and font size.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Callout, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Callout>
 *         This is basic example of Callout
 *      </Callout>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Callout = ({ children, ...rest }) => {
  return (
    <Typography fontSize="callout" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};

Callout.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
