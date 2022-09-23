import React from "react";

import { OrganizationItem, Container } from "@components";

const OrganizationItemMetaData = {
  title: "OrganizationItem",
  component: OrganizationItem,
};

export default OrganizationItemMetaData;

export const OrganizationItemComponent = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <OrganizationItem name="BigBinary Solutions Pvt. Ltd." />
    </Container>
  );
};