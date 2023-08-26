"use client";
import React from "react";
import { motion } from "framer-motion"; // Import the framer-motion library

const Dockbar = () => {
  const apps = [
    { name: "Finder", icon: "fas fa-folder" },
    { name: "Safari", icon: "fab fa-safari" },
    { name: "Mail", icon: "fas fa-envelope" },
    // Add more apps as needed
  ];

  return (
    <div className="flex fixed bottom-0 left-0 right-0 bg-sky-500 p-4 flex justify-center space-x-8">
      {apps.map((app, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-sky-200 hover:text-white transition duration-600"
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
