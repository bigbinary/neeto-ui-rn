import React from "react";

import { OnBoarding } from "@components";
import Neeto from "../../docs/assets/images/neeto.svg";

const OnBoardingStories = {
  title: "OnBoarding",
  component: OnBoardingStories,
};

export default OnBoardingStories;

export const OnBoardingComponent = () => {
  return (
    <OnBoarding
      appLogo={Neeto}
      slides={[
        {
          title: "Welcome to neetoInovice",
          description: "Enter your daily timesheets and organize your work.",
          illustration: <Neeto />,
        },
        {
          title: "Track using Calendar",
          description: "Switch between any day to view your timesheet entries.",
          illustration: <Neeto />,
        },
        {
          title: "Manage Projects",
          description:
            "Browse through projects and manage by adding or leaving from it. ",
          illustration: <Neeto />,
        },
      ]}
      onComplete={() => {}}
    />
  );
};
