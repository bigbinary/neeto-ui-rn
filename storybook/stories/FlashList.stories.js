import React, { useState } from "react";
import {
  FlashList as FlashListComponent,
  Container,
  Typography,
} from "@components";

const data = [
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
];

const FlashListStories = {
  title: "FlashList",
  component: FlashListComponent,
};

export default FlashListStories;

export const FlashList = () => {
  const [fData, setFData] = useState(data);

  const generateData = () => {
    const f = [];
    for (let i = fData.length; i < fData.length + 10; i++) {
      f.push({
        title: `title${i}`,
        description: `Description${i}`,
      });
    }
    return f;
  };

  const append = () => {
    setFData(prev => [...prev, ...generateData()]);
  };

  return (
    <FlashListComponent
      data={fData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Container
          m={2}
          px={3}
          py={2}
          borderRadius={5}
          borderWidth={1}
          borderColor="black"
        >
          <Typography>{item.title}</Typography>
          <Typography>{item.description}</Typography>
        </Container>
      )}
      estimatedItemSize={53}
      onEndReached={append}
      ListFooterComponent={<Typography>Loading</Typography>}
      onEndReachedThreshold={0.9}
    />
  );
};
