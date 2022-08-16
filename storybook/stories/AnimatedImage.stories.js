import React from "react";

import { Container, AnimatedImage, Typography } from "@components";

const imageUrl = "https://picsum.photos/255/139";

const AnimatedImageStories = {
  title: "AnimatedImages",
  component: AnimatedImage,
  args: {
    imageUrl: imageUrl,
    imageHeight: 139,
    imageWidth: 255,
  },
};
export default AnimatedImageStories;

export const AnimatedImageDemo = args => {
  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <AnimatedImage {...args} />
    </Container>
  );
};

export const AnimatedImages = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <AnimatedImage
        imageHeight={139}
        imageWidth={255}
        imageUrl="https://picsum.photos/255/139"
      />
      <Typography fontSize="xl">Image with Placeholder</Typography>
    </Container>
  );
};
