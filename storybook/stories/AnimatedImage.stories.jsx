import React from "react";

import { Container, AnimatedImage, Typography } from "@components";

const imageUrl = "https://picsum.photos/255/139";

const AnimatedImageStories = {
  title: "AnimatedImages",
  component: AnimatedImage,
  args: {
    imageUrl,
    imageHeight: 255,
    imageWidth: 255,
  },
};
export default AnimatedImageStories;

export const AnimatedImageDemo = args => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <AnimatedImage {...args} />
  </Container>
);

export const AnimatedImages = () => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <AnimatedImage
      imageHeight={139}
      imageUrl="https://picsum.photos/255/139"
      imageWidth={255}
      resizeMode="cover"
    />
    <Typography fontSize="xl">Image with Placeholder</Typography>
  </Container>
);
