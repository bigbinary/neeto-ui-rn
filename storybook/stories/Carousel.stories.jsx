import React from "react";

import { Carousel, Container } from "@components";

const CarouselStories = {
  title: "Carousel",
  component: CarouselStories,
};

export default CarouselStories;

export const CarouselComponent = () => (
  <Container>
    <Carousel
      itemArray={[
        {
          url: "https://picsum.photos/200",
        },
        {
          url: "https://picsum.photos/200",
        },
        {
          url: "https://picsum.photos/200",
        },
        {
          url: "https://picsum.photos/200",
        },
      ]}
    />
  </Container>
);
