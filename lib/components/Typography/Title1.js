import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Title1 component is built on top of typography component with default font family and font size.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Title1, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Title1>
 *         This is basic example of Title1
 *      </Title1>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Title1 = ({ children, ...rest }) => {
  return (
    <Typography fontSize="title1" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};

Title1.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
