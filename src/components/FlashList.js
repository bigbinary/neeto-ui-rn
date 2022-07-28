import React from "react";
import { FlashList as ShopifyFlashList } from "@shopify/flash-list";

export const FlashList = ({ ...rest }) => {
  return <ShopifyFlashList {...rest} />;
};
