import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import PropTypes from "prop-types";
import CarouselParent, { Pagination } from "react-native-snap-carousel";

import { Button, Container, Typography } from "@components";

const { width } = Dimensions.get("screen");

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
 * import { Carousel } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *
 *  return (
 *    <Carousel itemArray={[{url:"https://picsum.photos/200"}]} />
 *  );
 * }
 * ```
 *
 */

const CarouselContent = ({ item, imageStyle }) => {
  return (
    <Container width={width} justifyContent="space-between" alignItems="center">
      <Container />
      <Image
        style={{ ...styles.image, ...imageStyle }}
        source={{
          uri: item.url,
        }}
      />
    </Container>
  );
};

export const Carousel = ({
  itemArray,
  fromOnBoarding = false,
  onComplete,
  imageStyle = {},
}) => {
  const ref = useRef();
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <Container alignItems="center" flex={1} justifyContent="center">
        {fromOnBoarding ? (
          <Container>
            <Container />
            {item.illustration}
          </Container>
        ) : (
          <CarouselContent item={item} imageStyle={imageStyle} />
        )}
      </Container>
    );
  };

  const handleOnPress = () => {
    if (activeIndex !== itemArray.length - 1) {
      ref.current.snapToNext();
    } else onComplete();
  };

  const renderLabel = () => {
    return activeIndex !== itemArray.length - 1 ? "Next" : "Go";
  };

  return (
    <Container>
      <CarouselParent
        ref={ref}
        data={itemArray}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />

      {fromOnBoarding && (
        <Container alignItems="center" mx={24} my={12}>
          <Typography fontFamily="sf700" fontSize="4xl" color="font.grey800">
            {itemArray[activeIndex].title}
          </Typography>
          <Typography
            fontFamily="sf400"
            fontSize="l"
            color="font.grey500"
            textAlign="center"
          >
            {itemArray[activeIndex].description}
          </Typography>
        </Container>
      )}

      <Pagination
        dotsLength={itemArray.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotContainerStyle={styles.dotContainerStyle}
      />

      {fromOnBoarding && (
        <Container mx={24}>
          <Button label={renderLabel} onPress={handleOnPress} />
        </Container>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    height: width / 1.8,
    width: width / 1.8,
    resizeMode: "contain",
    borderRadius: 20,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 5,
    backgroundColor: "#49545C",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#2F3941",
  },
  inactiveDotStyle: {
    backgroundColor: "#D9D9D9",
  },
  dotContainerStyle: { marginHorizontal: 0 },
});

Carousel.propTypes = {
  itemArray: PropTypes.array.isRequired,
  imageStyle: PropTypes.object,
  fromOnBoarding: PropTypes.bool,
  onComplete: PropTypes.func,
};

CarouselContent.propTypes = {
  item: PropTypes.object,
  imageStyle: PropTypes.object,
};
