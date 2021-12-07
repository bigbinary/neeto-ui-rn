import React from "react";
import { Container, Avatar, Typography } from "@components";

const AvatarStories = {
  title: "Avatars",
  component: Avatar,
};
export default AvatarStories;

export const Avatars = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flexDirection="row" alignItems="center">
        <Avatar name="Oliver Smith" m={2} />
        <Typography fontSize="xl">82 * 82 (default size)</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar
          size={48}
          name="Oliver Smith"
          m={2}
          bgColor="background.black"
        />
        <Typography fontSize="l">48 * 48</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar size={42} name="Oliver Smith" m={2} fontColor="font.white" />
        <Typography fontSize="m">42 * 42</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <Avatar size={32} name="Oliver Smith" m={2} />
        <Typography fontSize="s">32 * 32</Typography>
      </Container>
    </Container>
  );
};
