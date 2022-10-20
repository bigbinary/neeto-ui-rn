import React from "react";

import { Loader, Alert } from "@components";

const LoaderStories = {
  title: "Loaders",
  component: Loader,
};

export default LoaderStories;

export const Loaders = () => {
  return (
    <>
      <Alert />
      <Loader />
      <Loader size="m" />
      <Loader size="l" />
    </>
  );
};
