"use client";
import React, { useState } from "react";
import NumerologyForm from "./NumerologyForm";
import NumerologyResult from "./NumerologyResult";
import NumerologyReading from "./NumerologyReading";
// import "../styles/globals.css";
import { chaldeanValues } from "../Constants/constants";

const NumerologyCalculator = () => {
  const [name, setName] = useState("");
  const [results, setResults] = useState(null);
  const calculateChaldeanVAlue = (name) => {
    function calculateChaldeanNumberSum(name) {
      let sum = 0;
      name = name.toLowerCase().replace(/[^a-z]/g, "");

      for (let char of name) {
        if (chaldeanValues[char]) {
          sum += chaldeanValues[char];
        }
      }

      return sum;
    }
    function getNumerologyNumber(name, filterFunc) {
      return name
        .toLowerCase()
        .split("")
        .filter(filterFunc)
        .reduce((sum, letter) => sum + (chaldeanValues[letter] || 0), 0);
    }
    function isVowel(char) {
      return "aeiou".includes(char);
    }
    function isConsonant(char) {
      return !isVowel(char) && "abcdefghijklmnopqrstuvwxyz".includes(char);
    }
    function getLetterChaldeanMapping(name) {
      let letterMap = [];
      name = name.toLowerCase().replace(/[^a-z]/g, "");

      for (let char of name) {
        if (chaldeanValues[char]) {
          letterMap.push(`${char.toUpperCase()}: ${chaldeanValues[char]}`);
        }
      }

      return letterMap.join(", ");
    }
    function reduceToSingleDigit(num) {
      if ([11, 22, 33].includes(num)) return num;
      while (num > 9) {
        num = num
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit), 0);
      }
      return num;
    }

    return {
      letterChaldeanMap: getLetterChaldeanMapping(name),
      calculateChaldeanSum: calculateChaldeanNumberSum(name),
      destinyNumber: reduceToSingleDigit(
        getNumerologyNumber(name, (char) => char.trim() !== "")
      ),
      soulUrgeNumber: reduceToSingleDigit(getNumerologyNumber(name, isVowel)),
      personalityNumber: reduceToSingleDigit(
        getNumerologyNumber(name, isConsonant)
      ),
    };
  };

  const onReset = () => {
    setName("");
    setResults(null);
  };
  const onCalculate = (event) => {
    event.preventDefault();
    const newResults = calculateChaldeanVAlue(name);
    console.log(newResults);
    setResults(<NumerologyReading {...newResults} />);
  };

  return (
    <>
      <div>
        <NumerologyForm
          name={name}
          
          onNameChange={setName}
          onCalculate={onCalculate}
          onReset={onReset}
        />
        {results && <NumerologyResult results={results} />}
      </div>
    </>
  );
};

export default NumerologyCalculator;
