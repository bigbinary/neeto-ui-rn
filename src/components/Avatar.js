import * as React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

import { Typography, Container } from "@components";

export const Avatar = ({
  name,
  size = 80,
  bgColor = "background.grey200",
  fontColor = "font.grey600",
  imageUrl,
  ...rest
}) => {
  const acronym = name
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");
  const fontSize = size / 2 - 8;

  const styles = {
    profileImage: {
      height: size,
      width: size,
      alignSelf: "center",
      borderRadius: size / 2,
    },
  };
  return (
    <>
      {imageUrl ? (
        <Image
          style={styles.profileImage}
          source={{ uri: imageUrl }}
          {...rest}
        />
      ) : (
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
      )}
    </>
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
  imageUrl: PropTypes.string,
};
