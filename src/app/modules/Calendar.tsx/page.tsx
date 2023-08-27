import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.css"; // Create this CSS file for styling

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate);
  };

  return (
    <div className="react-calendar">
      <h2>Branch Working Date</h2>
      <Calendar onClickDay={handleDateChange} value={date} />
    </div>
  );
};

export default CalendarComponent;
