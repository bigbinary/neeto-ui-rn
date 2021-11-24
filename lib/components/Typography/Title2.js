import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Title2 component is built on top of typography component with default font family and font size.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Title2, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Title2>
 *         This is basic example of Title2
 *      </Title2>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Title2 = ({ children, ...rest }) => {
  return (
    <Typography fontSize="title2" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};

Title2.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
