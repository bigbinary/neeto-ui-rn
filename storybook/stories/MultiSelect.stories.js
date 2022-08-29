import React, { useState } from "react";

import { MultiSelect, Button } from "@components";

const MultiSelectStories = {
  title: "MultiSelect",
  component: MultiSelect,
};

export default MultiSelectStories;

const data = [
  {
    name: "Option 1",
    id: "option_1",
  },
  {
    name: "Option 2",
    id: "option_2",
  },
  {
    name: "Option 3",
    id: "option_3",
  },
  {
    name: "Option 4",
    id: "option_4",
  },
  {
    name: "Option 5",
    id: "option_5",
  },
  {
    name: "Option 6",
    id: "option_6",
  },
];

export const MultiSelects = () => {
  const [selectedOptions, setSelectedOptions] = useState([
    {
      name: "Option 1",
      id: "option_1",
    },
  ]);
  const [sData, setSData] = useState(data);

  const [isLoading, setIsLoading] = useState(false);

  const simulateAPICall = value => {
    setIsLoading(true);
    setTimeout(() => {
      setSData(prev => [...prev, { name: value, id: value }]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <MultiSelect
      options={sData}
      value={selectedOptions}
      onSelect={setSelectedOptions}
      label="Multi Select"
      isSearchable
      showCreateOption
      onPressCreateOption={simulateAPICall}
      showCreateOptionLoader={isLoading}
      CreateItemComponent={({ searchText }) => (
        <Button
          label="Create Tag"
          onPress={() => simulateAPICall(searchText)}
        />
      )}
      valueExtractor={item => item?.id}
      labelExtractor={item => item?.name}
      // onBackdropPress={() => {}}
      // disabled
      // noResultsLabelContainerStyle={{backgroundColor:"red"}}
      // noResultsLabelStyle={{color:"green"}}
      // noResultsLabel="Not Found"
      // NoResultsComponent={() => <Typography>Searched Item Not Found</Typography>}
      // MoreItemComponent={() => <Typography>Searched Item Not Found</Typography>}
      // moreItemLabelContainerStyle={{backgroundColor:"yellow"}}
      // moreItemLabelStyle={{color:"green"}}
      // maxItemSize={1}
    />
  );
};
