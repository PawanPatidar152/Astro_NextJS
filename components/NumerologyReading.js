"use client";
import React from "react";
import "../styles/globals.css";
import { Destiny, SoulArray, DreamArray } from "../Constants/constants";
const NumerologyReading = ({
  letterChaldeanMap,
  calculateChaldeanSum,
  destinyNumber,
  soulUrgeNumber,
  personalityNumber,
}) => {
  function getDestinyNumberInterpretation(destinyNumber) {
    if (
      (destinyNumber >= 1 && destinyNumber <= 9) ||
      destinyNumber === 11 ||
      destinyNumber === 22 ||
      destinyNumber === 33
    ) {
      const index =
        destinyNumber === 11
          ? 9
          : destinyNumber === 22
          ? 10
          : destinyNumber === 33
          ? 11
          : destinyNumber - 1;
      return Destiny[index];
    } else {
      return "Invalid destiny number. Please enter a valid name.";
    }
  }

  function getSoulNumberInterpretation(soulUrgeNumber) {
    if (
      (soulUrgeNumber >= 0 && soulUrgeNumber <= 9) ||
      soulUrgeNumber === 11 ||
      soulUrgeNumber === 22 ||
      soulUrgeNumber === 33
    ) {
      const index =
        soulUrgeNumber === 11
          ? 9
          : soulUrgeNumber === 22
          ? 10
          : soulUrgeNumber === 33
          ? 11
          : soulUrgeNumber - 1;
      return SoulArray[index + 1];
    }
  }

  function getDreamNumberInterpretation(personalityNumber) {
    if (
      (personalityNumber >= 0 && personalityNumber <= 9) ||
      personalityNumber === 11 ||
      personalityNumber === 22 ||
      personalityNumber === 33
    ) {
      const index =
        personalityNumber === 11
          ? 9
          : personalityNumber === 22
          ? 10
          : personalityNumber === 33
          ? 11
          : personalityNumber - 1;
      return DreamArray[index + 1];
    }
  }

  return (
    <div className="container my-4 " >
      <div className="mb-3">
        <h4>Chaldean Name Numerology Reading Of:</h4>
        <p className="lead">{letterChaldeanMap}</p>
      </div>

      <div className="mb-3">
        <h5>Compound Name Number/Namank (Numerology Total of Your Name):</h5>
        <span className="badge bg-secondary">{calculateChaldeanSum}</span>
      </div>

      <div className="mb-3 text-interpretation  ">
        <h5>Destiny Number:</h5>
        <p>
          The Expression number, which describes who you are, and what you are,
          or what you become.
        </p>
        <p>
          <strong>Name Destiny/Expression Number or Namanak:</strong>
          <span className="badge bg-secondary ms-2">{destinyNumber}</span>
        </p>
        <p>{getDestinyNumberInterpretation(destinyNumber)}</p>
      </div>

      <div className="mb-3 text-interpretation ">
        <h5>Soul Urge Number:</h5>
        <p>
          The Heart Desire number, which describes your inner potentials and
          inner resources.
        </p>
        <p>
          <strong>Soul Urge/Heart Desire Number:</strong>
          <span className="badge bg-secondary ms-2">{soulUrgeNumber}</span>
        </p>
        <p>{getSoulNumberInterpretation(soulUrgeNumber)}</p>
      </div>

      <div className="mb-3 text-interpretation ">
        <h5>Dream Number:</h5>
        <p>
          The Personality number which describes outer personality, indeed your
          first impression on others.
        </p>
        <p>
          <strong>Name Dream/Personality Number:</strong>
          <span className="badge bg-secondary ms-2">{personalityNumber}</span>
        </p>
        <p>{getDreamNumberInterpretation(personalityNumber)}</p>
      </div>
    </div>
  );
};

export default NumerologyReading;
