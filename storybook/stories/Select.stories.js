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
];

export const Selects = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(data[0]);
  const [selectedOption3, setSelectedOption3] = useState(null);

  return (
    <>
      <Container width="100%" mb={4} zIndex={3}>
        <Select
          data={data}
          value={selectedOption1?.value}
          onSelect={setSelectedOption1}
          label="Default Select"
        />
      </Container>
      <Container width="100%" mb={4} zIndex={2}>
        <Select
          data={data}
          value={selectedOption2?.value}
          onSelect={setSelectedOption2}
          label="Select with loading"
          isLoading={true}
        />
      </Container>
      <Container width="100%" mb={4} zIndex={1}>
        <Select
          data={data}
          value={selectedOption3?.value}
          onSelect={setSelectedOption3}
          label="Searchable Select"
          isSearchable={true}
        />
      </Container>
    </>
  );
};
