import React from 'react';

import { ParentView, TopBar } from '@components';

const itemList = [
    "All",
    "Active",
    "Expired"
  ];

const TopBarStories = () => {
  
    return (
      <ParentView barStyle="dark-content" flex={1}>
        <TopBar
          data={itemList}
          activeIndex={0}
          // eslint-disable-next-line no-unused-vars
          onActiveTabChange={index => {
            // console.log(index, "index");
          }}
        />
      </ParentView>
    );
};

TopBarStories.propTypes={
}
export default TopBarStories;
