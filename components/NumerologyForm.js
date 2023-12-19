"use client";
import React from "react";
// import "../styles/globals.css";
const NumerologyForm = ({ name, onNameChange, onCalculate, onReset }) => {
  return (
    <div className="container">
      <div className="mt-5">
        <h2 className="text-center">
          Online Name Numerology Calculator - Prediction for Expression, Soul
          Urge, and Personality Numbers
        </h2>
      </div>
      <div className="input-box mt-5 p-4 border rounded">
        <div className="input-box-heading bg-secondary text-white text-center p-2 rounded-top">
          <h1>Name Number Numerology</h1>
        </div>
        <div className="input-box-text mt-3">
          <label htmlFor="nameInput" className="form-label">
            Enter Your Name:
          </label>
          <input
            type="text"
            value={name}
            id="nameInput"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => onNameChange(e.target.value)}
          />
          <div className="d-flex justify-content-between mt-3">
            <button type="submit" className="btn btn-primary" onClick={onCalculate}>
              Calculate
            </button>
            <button className="btn btn-danger" onClick={onReset} id="btn-reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumerologyForm;
