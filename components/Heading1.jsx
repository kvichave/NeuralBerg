import React from "react";
import { FlipWords } from "./ui/flip-word";

export function Heading1() {
  const words = ["business", "operations", "experience", "handiwork"];

  return (
    <div className="mt-[10rem] mb-[10rem] flex justify-center items-center px-4">
      <div className="text-7xl mx-auto  font-normal  text-gray-500	">
        Transform your&nbsp;
        <FlipWords words={words} className="text-white dark:text-white" />
        <br />
        with NeuralBerg's cutting-edge AI solutions.{" "}
      </div>
    </div>
  );
}
