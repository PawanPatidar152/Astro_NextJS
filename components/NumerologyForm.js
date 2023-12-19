"use client";
import React from "react";
import "../styles/globals.css";
const NumerologyForm = ({ name, onNameChange, onCalculate, onReset }) => {
  return (
    <div class="container">
      <div class="mt-5">
        <h2 class="text-center">
          Online Name Numerology Calculator - Prediction for Expression, Soul
          Urge, and Personality Numbers
        </h2>
      </div>
      <div class="input-box mt-5 p-4 border rounded">
        <div class="input-box-heading bg-secondary text-white text-center p-2 rounded-top">
          <h1>Name Number Numerology</h1>
        </div>
        <div class="input-box-text mt-3">
          <label htmlFor="nameInput" class="form-label">
            Enter Your Name:
          </label>
          <input
            type="text"
            value={name}
            id="nameInput"
            class="form-control"
            placeholder="Enter Name"
            onChange={(e) => onNameChange(e.target.value)}
          />
          <div class="d-flex justify-content-between mt-3">
            <button type="submit" class="btn btn-primary" onClick={onCalculate}>
              Calculate
            </button>
            <button class="btn btn-danger" onClick={onReset} id="btn-reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumerologyForm;
