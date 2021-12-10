import * as React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

import { Typography, Container } from "@components";

/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <img src="screenshots/avatar/bgcolors.png" />
 *   <img src="screenshots/avatar/fontcolors.png" />
 * </div>
 *
 * <div class="screenshots">
 *   <img src="screenshots/avatar/imagesizes.png" />
 *   <img src="screenshots/avatar/textsizes.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Typography, Avatar } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  return (
 *    <Container>
 *     <Avatar
 *      size={42}
 *      name="Oliver Smith"
 *      bgColor="background.black"
 *      fontColor="font.white"
 *      imageUrl="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
 *     />
 *   </Container>
 *  );
 * }
 * ```
 */

export const Avatar = ({
  name,
  size = 80,
  bgColor = "background.grey200",
  fontColor = "font.grey600",
  imageUrl,
  ...rest
}) => {
  const acronym = name
    ?.split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "")
    .slice(0, 2);
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
  /**
   * Name to obtain user initials to show as the text in the Avatar.
   */
  name: PropTypes.string,
  /**
   * Size of the avatar.
   */
  size: PropTypes.number,
  /**
   * Custom color for the avatar.
   */
  bgColor: PropTypes.string,
  /**
   * Custom color for the text.
   */
  fontColor: PropTypes.string,
  /**
   * Image to display for the Avatar. It accepts a standard React Native Image source prop Or a function that returns an Image.
   */
  imageUrl: PropTypes.string,
};
