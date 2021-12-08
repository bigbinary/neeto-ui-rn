import React from "react";
import { Container, Chip, Typography } from "@components";

const ChipStories = {
  title: "Chip",
};

export default ChipStories;

export const Chips = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container my={1}>
        <Chip
          label="Solid chip with icon"
          LeftIcon={() => <Typography>📣</Typography>}
          variant="solid"
          onClose={() => {
            alert("On Close clicked");
          }}
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Outlined chip with icon"
          LeftIcon={() => <Typography>📣</Typography>}
          variant="outlined"
          onClose={() => {
            alert("On Close clicked");
          }}
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Solid chip disabled"
          LeftIcon={() => <Typography>📣</Typography>}
          variant="solid"
          onClose={() => {
            alert("On Close clicked");
          }}
          isDisabled
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Outlined chip with icon"
          LeftIcon={() => <Typography>📣</Typography>}
          variant="outlined"
          onChipPress={() => {
            alert("Chip pressed");
          }}
          onClose={() => {
            alert("On Close clicked");
          }}
          isDisabled
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Outlined chip"
          variant="outlined"
          onClose={() => {
            alert("On Close clicked");
          }}
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Solid chip"
          variant="solid"
          onClose={() => {
            alert("On Close clicked");
          }}
        />
      </Container>
      <Container my={1}>
        <Chip
          label="Default Chip"
          onChipPress={() => {
            alert("Chip pressed");
          }}
          variant="solid"
        />
      </Container>
    </Container>
  );
};
