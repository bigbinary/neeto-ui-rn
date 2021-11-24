import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Title3 component is a build on top of typography component with some default fontFamilty and fontSize.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Title3, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Title3>
 *         This is basic example of Title3
 *      </Title3>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Title3 = ({ children, rest }) => {
  return (
    <Typography fontSize="title3" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};

Title3.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
