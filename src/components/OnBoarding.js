import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import { Button, Carousel, Container, Typography } from "@components";

/**
 *
 * <div class="screenshots">
 *   <img src="screenshots/carousel/carousel.png" />
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
  logoWidth = 150,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onBoardingRef = useRef();

  const handleOnPress = () => {
    if (activeIndex !== slides.length - 1) {
      onBoardingRef.current.snapToNext();
      setActiveIndex(onBoardingRef.current._activeItem);
    } else onComplete();
  };

  const renderItem = ({ item }) => {
    return (
      <Container flex={1} justifyContent="space-between">
        <Container />
        <Container alignItems="center" mx={24} my={12}>
          {item.illustration}
        </Container>
        <Container alignItems="center" mx={24} my={12}>
          <Typography fontFamily="sf700" fontSize="4xl" color="font.grey800">
            {item.title}
          </Typography>
          <Typography
            fontFamily="sf400"
            fontSize="l"
            color="font.grey500"
            textAlign="center"
          >
            {item.description}
          </Typography>
        </Container>
      </Container>
    );
  };

  return (
    <Container flex={1} mb={52} mt={27}>
      <Container alignItems="center">
        <AppLogo width={logoWidth} />
      </Container>

      <Container flex={1} justifyContent="center" alignItems="center">
        <Carousel
          carouselRef={onBoardingRef}
          itemArray={slides}
          onSnapToItem={index => {
            setActiveIndex(index);
          }}
          renderItem={renderItem}
        />
      </Container>

      <Container mx={24}>
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
