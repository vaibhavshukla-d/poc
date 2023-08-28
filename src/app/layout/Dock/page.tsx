"use client";
import React from "react";
import { motion } from "framer-motion"; // Import the framer-motion library

const Dockbar = () => {
  const apps = [
    { name: "@Craft Silicon", icon: "fas fa-folder" },
    // Add more apps as needed
  ];

  return (
    <div className="flex fixed bottom-0 left-0 right-0 bg-sky-500 p-4 flex justify-center space-x-8">
      {apps.map((app, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-white"
          whileHover={{ scale: 1.5 }} // Add the animation property
        >
          <i className={`${app.icon} text-2xl mb-1`} />
          <span className="text-xs">{app.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Dockbar;
