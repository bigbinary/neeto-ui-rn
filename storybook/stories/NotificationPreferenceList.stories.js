import React, { useEffect, useState } from "react";

import { NotificationPreferenceList, Container } from "@components";

const NotificationPreferenceListMetaData = {
  title: "NotificationPreferenceList",
  component: NotificationPreferenceList,
};

export default NotificationPreferenceListMetaData;

export const NotificationPreferenceListComponent = () => {
  const [data, setData] = useState([]);

  const handleSwitch = (item, index) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].enabled = !newData[index].enabled;
      return newData;
    });
  };

  useEffect(() => {
    setData([
      {
        label: "Preference 1",
        enabled: true,
        onSwitch: handleSwitch,
      },
      {
        label: "Preference 2",
        enabled: true,
        onSwitch: handleSwitch,
      },
      {
        label: "Preference 3",
        enabled: false,
        onSwitch: handleSwitch,
      },
      {
        label: "Preference 4",
        enabled: false,
        onSwitch: handleSwitch,
      },
    ]);
  }, []);

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      {data && <NotificationPreferenceList data={data} />}
    </Container>
  );
};
