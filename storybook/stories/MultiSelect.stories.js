import React, { useState } from "react";

import { MultiSelect, Button } from "@components";

const MultiSelectStories = {
  title: "MultiSelect",
  component: MultiSelect,
};

export default MultiSelectStories;

const data = [
  {
    label: "Option 1",
    value: "option_1",
  },
  {
    label: "Option 2",
    value: "option_2",
  },
  {
    label: "Option 3",
    value: "option_3",
  },
  {
    label: "Option 4",
    value: "option_4",
  },
  {
    label: "Option 5",
    value: "option_5",
  },
  {
    label: "Option 6",
    value: "option_6",
  },
];

export const MultiSelects = () => {
  const [selectedOptions, setSelectedOptions] = useState([
    {
      label: "Option 1",
      value: "option_1",
    },
  ]);
  const [sData, setSData] = useState(data);

  const [isLoading, setIsLoading] = useState(false);

  const simulateAPICall = value => {
    setIsLoading(true);
    setTimeout(() => {
      setSData(prev => [...prev, { label: value, value }]);
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
