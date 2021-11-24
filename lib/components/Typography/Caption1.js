import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Caption1 component is a build on top of typography component with some default fontFamilty and fontSize.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Caption1, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Caption1>
 *         This is basic example of Caption1
 *      </Caption1>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Caption1 = ({ children, rest }) => {
  return (
    <Typography fontSize="caption1" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};

Caption1.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
