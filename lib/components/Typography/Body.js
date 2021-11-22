import * as React from "react";
import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Body component is a build on top of typography component with some default fontFamilty and fontSize.
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
