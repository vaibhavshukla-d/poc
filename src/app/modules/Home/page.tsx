"use client";
import React from "react";
import CalendarComponent from "../Calendar.tsx/page";

const Home = () => {
  var names = new Array("Mary", "Tom", "Jack", "Jill");
  return (
    <div>
      <CalendarComponent />
    </div>
  );
};

export default Home;
