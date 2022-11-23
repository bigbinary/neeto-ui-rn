import React, { useState } from "react";

import PropTypes from "prop-types";
import RNFImage from "react-native-fast-image";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { flexbox, space, border, color, layout } from "styled-system";

import ImagePlaceholder from "@assets/images/image-placeholder.svg";
import { Container, Loader } from "@components";

import { theme } from "../theme";

const StyledImage = styled(RNFImage)`
  ${flexbox}
  ${space}
  ${border}
  ${color}
  ${layout}
`;

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
  ...rest
}) => {
  const opacity = useSharedValue(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const profileImageStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, {
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    }),
    height: imageHeight,
    width: imageWidth,
    alignSelf: "center",
    borderRadius: 10,
  }));

  return (
    <Container
      alignItems="center"
      borderRadius={10}
      justifyContent="center"
      overflow="hidden"
    >
      <Animated.View style={profileImageStyle}>
        <StyledImage
          height={imageHeight}
          width={imageWidth}
          source={{
            uri: imageUrl,
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Pragma: "no-cache",
            },
          }}
          onLoad={() => {
            setIsImageLoaded(true);
            opacity.value = 1;
          }}
          onLoadStart={() => {
            setIsImageLoaded(false);
            opacity.value = 0;
          }}
          {...rest}
        />
      </Animated.View>
      {!isImageLoaded && (
        <Container position="absolute">
          <ImagePlaceholder />
          <Container bottom={15} position="absolute" right={15}>
            <Loader color={theme.colors.font.grey600} />
          </Container>
        </Container>
      )}
    </Container>
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