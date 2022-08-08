import React, { useRef, useState } from "react";

import { Button, Container, Accordion, Typography } from "@components";
import { theme } from "@theme";

const AccordionStories = {
  title: "Accordions",
};
export default AccordionStories;

export const Accordions = () => {
  const accordionRef = useRef();
  const accordionRef2 = useRef();

  const [isExpanded, setIsExpanded] = useState(false);

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

      <Container py={2}>
        <Typography py={2}>Accordion label based on state</Typography>
        <Accordion
          onStateChanged={isExpanded => setIsExpanded(isExpanded)}
          iconProp={{
            Label: () => (
              <Typography color="font.danger">
                {isExpanded ? "Collapse" : "Expand"}
              </Typography>
            ),
            color: theme.colors.font.danger,
          }}
          noBorder={true}
        >
          <Container my={2} p={3} bg="background.grey100" borderRadius={8}>
            <Typography color="font.primary">Body Content</Typography>
          </Container>
        </Accordion>
      </Container>

      <Button
        label="Toggle Accordion using ref"
        onPress={() => accordionRef.current.toggleAccordion()}
      />

      <Container py={2}>
        <Accordion
          ref={accordionRef}
          header={() => (
            <Typography fontSize={theme.fontSizes.xl} iconProp={{ size: 24 }}>
              Header
            </Typography>
          )}
        >
          <Container my={2} p={3} bg="background.grey100" borderRadius={8}>
            <Typography color="font.primary">Accordion using ref</Typography>
          </Container>
        </Accordion>
      </Container>

      <Container flex={1} flexDirection="row" justifyContent="space-between">
        <Button
          flex={1}
          label="Open Accordion"
          onPress={() => accordionRef2.current.openAccordion()}
        />

        <Container mx={2} />
        <Button
          flex={1}
          label="Close Accordion"
          onPress={() => accordionRef2.current.closeAccordion()}
        />
      </Container>

      <Container py={2}>
        <Accordion
          ref={accordionRef2}
          header={() => (
            <Typography fontSize={theme.fontSizes.xl} iconProp={{ size: 24 }}>
              Header
            </Typography>
          )}
        >
          <Container my={2} p={3} bg="background.grey100" borderRadius={8}>
            <Typography color="font.primary">Accordion using ref</Typography>
          </Container>
        </Accordion>
      </Container>
    </Container>
  );
};
