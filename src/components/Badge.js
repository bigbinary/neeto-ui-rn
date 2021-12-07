import React from "react";
import PropTypes from "prop-types";
import { Typography, Container } from "@components";

export const Badge = ({
  badgeColor = "background.base",
  content,
  size = 21,
  fontSize = "xs",
  fontFamily = "inter400",
  color = "font.white",
  ...rest
}) => {
  return (
    <Container
      width={size}
      height={size * 0.75}
      bg={badgeColor}
      borderRadius={size * 0.375}
      justifyContent="center"
      alignItems="center"
      {...rest}
    >
      {content && (
        <Typography fontSize={fontSize} fontFamily={fontFamily} color={color}>
          {content}
        </Typography>
      )}
    </Container>
  );
};

Badge.propTypes = {
  color: PropTypes.string,
  badgeColor: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.number,
  textStyles: PropTypes.object,
  borderRadius: PropTypes.number,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
};
