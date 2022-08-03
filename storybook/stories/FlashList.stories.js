import React, { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [lData, setLData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLData(data);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <FlashListComponent
      data={lData}
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
      isLoading={isLoading}
      SkeltonComponent={
        <Container>
          <Typography>Loading</Typography>
        </Container>
      }
    />
  );
};
