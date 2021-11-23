import * as React from "react";
import PropTypes from "prop-types";

import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Caption2 component is built on top of typography component with default font family and font size.
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Caption2, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Caption2>
 *         This is basic example of Caption2
 *      </Caption2>
 *     </Container>
 *  );
 * }
 *
 * ```
 *
 * @extends StyledSystems props /styled-system
 */

export const Caption2 = ({ children, ...rest }) => {
  return (
    <Typography fontSize="caption2" fontFamily="regular" {...rest}>
      {children}
    </Typography>
  );
};

Caption2.propTypes = {
  ...Typography.propTypes,
  children: PropTypes.node.isRequired,
};
