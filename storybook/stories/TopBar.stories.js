import React from "react";

import { TopBar } from "@components";

const itemList = ["All", "Active", "Expired"];

const TopBarStoriesMetaData = {
  title: "TopBar",
  component: TopBarStories,
  argTypes: {},
  args: {},
};

export default TopBarStoriesMetaData;

export const TopBarStories = () => {
  return (
    <>
      <TopBar
        data={itemList}
        activeIndex={0}
        // eslint-disable-next-line no-unused-vars
        onActiveTabChange={index => {
          // console.log(index, "index");
        }}
      />
    </>
  );
};
