import React, { useState } from "react";
import dayjs from "dayjs";

import { Calendar } from "@components";

const CalendarStories = {
  title: "Calendar",
  component: Calendar,
};

export default CalendarStories;

export const Calendars = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  return (
    <Calendar
      selectedDate={selectedDate}
      onDayPress={({ dateString }) => setSelectedDate(dateString)}
    />
  );
};
