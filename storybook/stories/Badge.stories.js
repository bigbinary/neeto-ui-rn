import React from "react";
import { Badge, Container } from "@components";
import { Typography } from "../../src/components/Typography";

const BadgeMetaData = {
  title: "Badge",
  component: Badge,
  args: {},
  argTypes: {},
};

export default BadgeMetaData;

export const Badges = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flex={1} justifyContent="center">
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge content={3} />
          <Typography px={2} fontSize="l">
            Default size
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge content={3} size={32} />
          <Typography px={2} fontSize="l">
            Custom size 32.
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge content={3} size={32} fontSize="16px" />
          <Typography px={2} fontSize="l">
            Custom fontSize
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge size={32} fontSize="12px" />
          <Typography px={2} fontSize="l">
            without content
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge
            content="test"
            size={32}
            fontSize="12px"
            badgeColor="background.secondary"
            color="font.secondary"
          />
          <Typography px={2} fontSize="l">
            custom background color
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge size={32} content="test" fontSize="12px" color="font.danger" />
          <Typography px={2} fontSize="l">
            custom font color
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge
            size={32}
            content="test"
            fontSize="12px"
            fontFamily="inter700"
          />
          <Typography px={2} fontSize="l">
            custom font family
          </Typography>
        </Container>
        <Container flexDirection="row" alignItems="center" mb={4} px={2}>
          <Badge size={32} content="3" fontSize="12px" fontFamily="inter700" />
          <Typography px={2} fontSize="l">
            custom border radius
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};
