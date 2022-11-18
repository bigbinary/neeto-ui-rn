import React, { useState } from "react";

import { Button, TopBar } from "@components";

const itemList = ["All", "Active", "Expired"];

const TopBarStoriesMetaData = {
  title: "TopBar",
  component: TopBarStories,
  argTypes: {},
  args: {},
};

export default TopBarStoriesMetaData;

export const TopBarStories = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TopBar
        activeIndex={activeTab}
        data={itemList}
        onActiveTabChange={index => {
          setActiveTab(index);
        }}
      />
      <Button label="Switch to `Expired` tab" onPress={() => setActiveTab(2)} />
    </>
  );
};
