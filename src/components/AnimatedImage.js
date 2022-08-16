import React, { useState } from "react";
import PropTypes from "prop-types";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Container } from "@components";
import ImagePlaceholder from "@assets/images/image-placeholder.svg";

/**
 * AnimatedImage can be used to display a placeholder before image is loaded with animation.
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
 *     <AnimatedImage
 *      imageHeight={139}
 *      imageWidth={255}
 *      imageUrl="https://picsum.photos/255/139"
 *     />
 *   </Container>
 *  );
 * }
 * ```
 */

export const AnimatedImage = ({
  imageHeight = 139,
  imageWidth = 255,
  imageUrl,
}) => {
  const opacity = useSharedValue(0);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const profileImageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      height: imageHeight,
      width: imageWidth,
      alignSelf: "center",
      borderRadius: 10,
    };
  });

  return (
    <>
      <Container
        justifyContent="center"
        alignItems="center"
        borderRadius={10}
        overflow="hidden"
      >
        <Animated.Image
          style={profileImageStyle}
          resizeMode="cover"
          source={{
            uri: imageUrl,
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Pragma: "no-cache",
            },
          }}
          onLoad={() => {
            setImageLoaded(true);
            opacity.value = 1;
          }}
        />

        {!isImageLoaded && (
          <Container position="absolute">
            <ImagePlaceholder />
          </Container>
        )}
      </Container>
    </>
  );
};

AnimatedImage.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
};

AnimatedImage.propTypes = {
  /**
   * Height for image.
   */
  imageHeight: PropTypes.number,
  /**
   * Width for image.
   */
  imageWidth: PropTypes.number,
  /**
   * Url to display the Image. It accepts a standard React Native Image source prop Or a function that returns an Image.
   */
  imageUrl: PropTypes.string.isRequired,
};
