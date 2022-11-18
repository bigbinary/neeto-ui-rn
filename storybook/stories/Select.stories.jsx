import React, { useState } from "react";

import { Select } from "@components";

const SelectStories = {
  title: "Select",
  component: Select,
};

export default SelectStories;

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

export const Selects = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(data[0]);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const containerStyle = { mb: 4 };

  return (
    <>
      <Select
        containerStyle={containerStyle}
        label="Default Select"
        options={data}
        value={selectedOption1}
        onSelect={setSelectedOption1}
      />
      <Select
        isLoading
        containerStyle={containerStyle}
        label="Select with loading"
        options={data}
        value={selectedOption2}
        onSelect={setSelectedOption2}
      />
      <Select
        isSearchable
        containerStyle={containerStyle}
        label="Searchable Select"
        options={data}
        value={selectedOption3}
        onSelect={setSelectedOption3}
      />
    </>
  );
};
