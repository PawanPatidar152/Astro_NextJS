"use client";
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
      // Apply the saved mode to the body classList
      document.body.classList.toggle("dark-mode", savedMode === "true");
    }
    // setIsDarkMode(savedMode === "true");
  }, []);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        isDarkMode ? "dark" : "light"
      } sticky-top`}
    >
      <div className="container d-flex justify-content-end">
        <button
          className={`btn ${isDarkMode ? "btn-light" : "btn-dark"}`}
          onClick={toggleMode}

        >
          {isDarkMode ? "🌞 Light Mode" : "🌙  Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default DarkModeToggle;
