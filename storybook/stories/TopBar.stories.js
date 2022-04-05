import React, { useEffect, useState } from "react";

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
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    console.log("Active tab index is ", activeTab);
    console.log("Active tab is ", itemList[activeTab]);
  }, [activeTab])
  
  return (
    <>
      <TopBar
        data={itemList}
        activeIndex={activeTab}
        onActiveTabChange={index => {
          setActiveTab(index)
        }}
      />

      <Button label="Switch to `Expired` tab" onPress={() => setActiveTab(2)} />
    </>
  );
};
