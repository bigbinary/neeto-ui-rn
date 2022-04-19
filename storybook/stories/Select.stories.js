import React, { useState } from "react";

import { Container, Select } from "@components";

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

  return (
    <>
      <Container width="100%" mb={4} zIndex={3}>
        <Select
          options={data}
          value={selectedOption1?.value}
          onSelect={setSelectedOption1}
          label="Default Select"
        />
      </Container>
      <Container width="100%" mb={4} zIndex={2}>
        <Select
          options={data}
          value={selectedOption2?.value}
          onSelect={setSelectedOption2}
          label="Select with loading"
          isLoading
        />
      </Container>
      <Container width="100%" mb={4} zIndex={1}>
        <Select
          options={data}
          value={selectedOption3?.value}
          onSelect={setSelectedOption3}
          label="Searchable Select"
          isSearchable
        />
      </Container>
    </>
  );
};
