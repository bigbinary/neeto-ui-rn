import * as React from "react";
import { Typography } from "./Typography";

// @component-group Typography Components

/**
 * Title2 component is a build on top of typography component with some default fontFamilty and fontSize.
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

export const Title2 = ({ children, rest }) => {
  return (
    <Typography fontSize="title2" fontFamily="bold" {...rest}>
      {children}
    </Typography>
  );
};
