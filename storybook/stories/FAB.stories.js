import React from "react";
import { Container, Typography, FAB } from "@components";

const FABStories = {
  title: "FABs",
};
export default FABStories;

export const FABS = () => {
  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  };

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container flexDirection="row" alignItems="center">
        <FAB
          m={9}
          Icon={() => {
            return <Typography>🔔</Typography>;
          }}
        />
        <Typography>Default Button</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <FAB
          m={9}
          variant="inverse"
          Icon={() => {
            return <Typography>➕</Typography>;
          }}
        />
        <Typography>Inverse Button</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <FAB
          m={9}
          disabled
          Icon={() => {
            return <Typography>🔔</Typography>;
          }}
        />
        <Typography>Disabled Default Button</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <FAB
          m={9}
          variant="inverse"
          disabled
          Icon={() => {
            return <Typography>➕</Typography>;
          }}
        />
        <Typography>Disabled Inverse Button</Typography>
      </Container>

      <Container flexDirection="row" alignItems="center">
        <FAB
          m={9}
          style={shadowStyle}
          Icon={() => {
            return <Typography>🔔</Typography>;
          }}
        />
        <Typography>Default Button with shadow style</Typography>
      </Container>
      <Container flexDirection="row" alignItems="center">
        <FAB
          m={9}
          bg="font.danger"
          Icon={() => {
            return <Typography>🔔</Typography>;
          }}
        />
        <Typography>Button with Background color</Typography>
      </Container>
    </Container>
  );
};
