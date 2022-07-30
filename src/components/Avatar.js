import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

import { Typography, Container } from "@components";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <img src="screenshots/avatar/images.png" />
 *   <img src="screenshots/avatar/texts.png" />
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
 *      variant={"medium"}
 *      name="Oliver Smith"
 *      imageUrl="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
 *     />
 *   </Container>
 *  );
 * }
 * ```
 */

export const Avatar = ({
  name,
  variant = "medium",
  bgColor = "background.lightBlue100",
  fontColor = "font.darkBlue100",
  imageUrl,
  ...rest
}) => {
  const opacity = useSharedValue(0);
  const acronym = name
    ?.split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "")
    .slice(0, 2);

  const getSizes = () => {
    switch (variant) {
      case "small":
        return [36, 12];
      case "medium":
        return [48, 14];
      default:
        return [48, 14];
    }
  };

  const [avatarSize, avatarFontSize] = getSizes();

  const profileImageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      height: avatarSize,
      width: avatarSize,
      alignSelf: "center",
      borderRadius: avatarSize / 2,
    };
  });

  return (
    <>
      <Container
        bg={bgColor}
        width={avatarSize}
        height={avatarSize}
        borderRadius={avatarSize / 2}
        {...rest}
        flexDirection="row"
      >
        <Container style={styles.acronym}>
          <Typography
            fontFamily="sf400"
            fontSize={avatarFontSize}
            color={fontColor}
          >
            {acronym.toUpperCase()}
          </Typography>
        </Container>
        <Animated.Image
          onLoad={() => (opacity.value = 1)}
          style={profileImageStyle}
          source={{ uri: imageUrl }}
          {...rest}
        />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  acronym: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});

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
   * variant of the avatar: `medium` or `small`
   */
  variant: PropTypes.oneOf(["medium", "small"]),
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
