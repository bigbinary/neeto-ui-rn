import React from "react";
import { Container, Accordion, Typography } from "@components";
import { theme } from "@theme";

const AccordionStories = {
  title: "Accordions",
};
export default AccordionStories;

export const Accordions = () => {
  return (
    <Container>
      <Container py={2}>
        <Typography py={2}>Basic Accordion</Typography>
        <Accordion
          header={() => (
            <Typography fontSize={theme.fontSizes.xl} iconProp={{ size: 24 }}>
              Header
            </Typography>
          )}
        >
          <Container my={2} p={3} bg="background.grey100" borderRadius={8}>
            <Typography color="font.primary">Body Content</Typography>
          </Container>
        </Accordion>
      </Container>
      <Container py={2}>
        <Typography py={2}>Customized Accordion</Typography>
        <Accordion
          header={() => (
            <Container
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Container flexDirection="row" alignItems="center">
                <Typography bg="#00BA8829" color="font.primary" p={1}>
                  Open
                </Typography>
                <Typography px={2}>Low</Typography>
              </Container>
              <Typography>Oliver</Typography>
            </Container>
          )}
        >
          <Container my={2} p={3} bg="background.grey100" borderRadius={8}>
            <Typography color="font.primary">Body Content</Typography>
          </Container>
        </Accordion>
      </Container>
      <Container py={2}>
        <Typography py={2}>
          Accordion with customized icon properties
        </Typography>
        <Accordion
          header={() => (
            <Container flexDirection="row" alignItems="center">
              <Typography bg="#00BA8829" color="font.primary" p={1}>
                Open
              </Typography>
              <Typography px={2}>Low</Typography>
            </Container>
          )}
          iconProp={{
            Label: () => <Typography color="font.danger">Collapse</Typography>,
            color: theme.colors.font.danger,
          }}
        >
          <Container my={2} p={3} bg="background.grey100" borderRadius={8}>
            <Typography color="font.primary">Body Content</Typography>
          </Container>
        </Accordion>
      </Container>
      <Container py={2}>
        <Typography py={2}>Accordion with no border and header</Typography>
        <Accordion
          iconProp={{
            Label: () => <Typography color="font.danger">Collapse</Typography>,
            color: theme.colors.font.danger,
          }}
          noBorder={true}
        >
          <Container my={2} p={3} bg="background.grey100" borderRadius={8}>
            <Typography color="font.primary">Body Content</Typography>
          </Container>
        </Accordion>
      </Container>
    </Container>
  );
};
