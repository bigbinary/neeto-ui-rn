import * as React from "react";
import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * LargeTitle component is a build on top of typography component with some default fontFamilty and fontSize.
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
    <Typography fontSize="largeTitle" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};
