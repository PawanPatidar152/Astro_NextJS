"use client";
import React from "react";
import NumerologyCalculator from "../components/NumerologyCalculator";
import DarkModeToggle from "../components/DarkModeToggle";
import "../styles/globals.css";

const Home = () => {
  return (
    <div>
        <DarkModeToggle />
      <NumerologyCalculator />
    </div>
  );
};

export default Home;
