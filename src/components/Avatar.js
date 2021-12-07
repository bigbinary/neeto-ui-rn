import * as React from "react";
import PropTypes from "prop-types";

import { Typography, Container } from "@components";

export const Avatar = ({
  name,
  size = 80,
  bgColor = "background.grey200",
  fontColor = "font.grey600",
  ...rest
}) => {
  const acronym = name
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");
  const fontSize = size / 2 - 8;

  return (
    <Container
      bg={bgColor}
      width={size}
      height={size}
      borderRadius={size / 2}
      {...rest}
    >
      <Typography
        fontFamily="inter700"
        fontSize={fontSize > 14 ? fontSize : 14}
        color={fontColor}
      >
        {acronym}
      </Typography>
    </Container>
  );
};

Avatar.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
};
