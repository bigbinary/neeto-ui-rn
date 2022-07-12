import React from "react";
import PropTypes from "prop-types";
import { Typography, Container } from "@components";

/**
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>color</li>
 * <li>layout</li>
 * </ul>
 *
 * <div class="screenshots">
 *   <img src="screenshots/badge/badges.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Badge, Container } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *       <Badge
 *          content="test"
 *          size={32}
 *          fontSize="12px"
 *          badgeColor="background.secondary"
 *          color="font.secondary"
 *        />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const Badge = ({
  badgeColor = "background.base",
  content,
  size = 21,
  fontSize = "xs",
  fontFamily = "SFProText400",
  color = "font.white",
  ...rest
}) => {
  return (
    size > 0 && (
      <Container
        px={3}
        py={1}
        bg={badgeColor}
        borderRadius={15}
        justifyContent="center"
        alignItems="center"
        {...rest}
      >
        {!!content && (
          <Typography fontSize={fontSize} fontFamily={fontFamily} color={color}>
            {content}
          </Typography>
        )}
      </Container>
    )
  );
};

Badge.propTypes = {
  /**
   * Custom badge content color.
   */
  color: PropTypes.string,
  /**
   * Custom badge background color.
   */
  badgeColor: PropTypes.string,
  /**
   * To change content of the badge
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Custom badge size.
   */
  size: PropTypes.number,
  /**
   * Custom font-size for badge content.
   */
  fontSize: PropTypes.string,
  /**
   * Custom font-family for badge content.
   */
  fontFamily: PropTypes.string,
};
