import React, { useRef, useState } from "react";
import { Platform } from "react-native";

import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";

import { Button, Carousel, Container, Typography } from "@components";

/**
 *
 * <div class="screenshots">
 *   <img src="screenshots/onboarding/onboarding.png" />
 * </div>
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>layout</li>
 * <li>color</li>
 * <li>buttonStyle</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import * as React from "react";
import { moderateScale } from "react-native-size-matters";

 * import { OnBoarding } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *
 *  return (
 *    <OnBoarding
 *      appLogo={Neeto}
 *      slides={[
 *          {title: "Welcome to neetoInovice", description: "Enter your daily ...", illustration:""},
 *          {title: "", description: "", illustration:""}
 *      ]}
 *      onComplete={() =>{ console.log("Completed");}}
 * />
 *  );
 * }
 * ```
 *
 */

export const OnBoarding = ({
  appLogo: AppLogo,
  slides,
  onComplete,
  logoWidth = moderateScale(150),
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onBoardingRef = useRef();

  const handleOnPress = () => {
    if (activeIndex !== slides.length - 1) {
      onBoardingRef.current.snapToNext();
      setActiveIndex(onBoardingRef.current._activeItem);
    } else onComplete();
  };

  const renderItem = ({ item }) => (
    <Container flex={1} justifyContent="space-between">
      <Container />
      <Container
        alignItems="center"
        mx={moderateScale(24)}
        my={moderateScale(12)}
      >
        {item.illustration}
      </Container>
      <Container
        alignItems="center"
        mx={moderateScale(24)}
        my={moderateScale(12)}
      >
        <Typography color="font.grey800" fontFamily="sf700" fontSize="4xl">
          {item.title}
        </Typography>
        <Typography
          color="font.grey500"
          fontFamily="sf400"
          fontSize="l"
          textAlign="center"
        >
          {item.description}
        </Typography>
      </Container>
    </Container>
  );

  return (
    <Container bg="background.white" flex={1}>
      <Container alignItems="center">
        <AppLogo width={logoWidth} />
      </Container>
      <Container alignItems="center" flex={1} justifyContent="center">
        <Carousel
          carouselRef={onBoardingRef}
          itemArray={slides}
          renderItem={renderItem}
          onSnapToItem={index => {
            setActiveIndex(index);
          }}
        />
      </Container>
      <Container
        mb={Platform.OS === "android" ? moderateScale(10) : 0}
        mx={moderateScale(24)}
      >
        <Button
          label={activeIndex !== slides.length - 1 ? "Next" : "Get Started"}
          onPress={handleOnPress}
        />
      </Container>
    </Container>
  );
};

OnBoarding.propTypes = {
  appLogo: PropTypes.func.isRequired,
  slides: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  logoWidth: PropTypes.number,
};
