import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Headline component is built on top of typography component with default font family and font size.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Headline, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Headline>
 *         This is basic example of Headline
 *      </Headline>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Headline = ({ children, rest }) => {
  return (
    <Typography fontSize="headline" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};

Headline.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
