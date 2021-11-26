import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * LargeTitle component is built on top of typography component with default font family and font size.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { LargeTitle, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <LargeTitle>
 *         This is basic example of LargeTitle
 *      </LargeTitle>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const LargeTitle = ({ children, ...rest }) => {
  return (
    <Typography fontSize="largeTitle" {...rest}>
      {children}
    </Typography>
  );
};

LargeTitle.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
