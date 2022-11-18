import React from "react";

import { OrganizationItem, Container } from "@components";

const OrganizationItemMetaData = {
  title: "OrganizationItem",
  component: OrganizationItem,
};

export default OrganizationItemMetaData;

export const OrganizationItemComponent = () => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <OrganizationItem name="BigBinary Solutions Pvt. Ltd." />
  </Container>
);
