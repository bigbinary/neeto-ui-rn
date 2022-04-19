import React, { useState } from "react";

import { Container, MultiSelect } from "@components";

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

  return (
    <>
      <Container width="100%" mb={4} zIndex={1}>
        <MultiSelect
          options={data}
          value={selectedOptions}
          onSelect={setSelectedOptions}
          label="Multi Select"
          isSearchable
        />
      </Container>
    </>
  );
};
