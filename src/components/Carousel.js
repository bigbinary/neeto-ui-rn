import React, { useState } from "react";
import { StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import CarouselParent, { Pagination } from "react-native-snap-carousel";

import { Container } from "@components";

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

export const Carousel = ({
  itemArray,
  renderItem,
  carouselRef,
  onSnapToItem,
}) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <CarouselParent
        ref={carouselRef}
        data={itemArray}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => {
          onSnapToItem(index);
          setActiveIndex(index);
        }}
      />

      <Pagination
        dotsLength={itemArray.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
        dotContainerStyle={styles.dotContainerStyle}
      />
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
    marginRight: 8,
    backgroundColor: "#2F3941",
  },
  inactiveDotStyle: {
    backgroundColor: "#D9D9D9",
  },
  dotContainerStyle: { marginHorizontal: 0 },
});

Carousel.propTypes = {
  itemArray: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  onSnapToItem: PropTypes.func,
  carouselRef: PropTypes.object,
};
