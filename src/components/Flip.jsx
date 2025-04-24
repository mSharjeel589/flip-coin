import React, { useState } from "react";
import headImage from "../assets/heads.svg";
import tailImage from "../assets/tails.svg";
import shadowImage from "../assets/shadow.svg";

const CoinFlip = () => {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState("head");

  const flipCoin = () => {
    setFlipping(true);
    const side = Math.random() < 0.5 ? "head" : "tail";
    setResult(side);

    setTimeout(() => setFlipping(false), 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
      <div
        className={`
          relative
          w-28 h-28
          sm:w-36 sm:h-36
          md:w-44 md:h-44
          lg:w-52 lg:h-52
          ${flipping ? "animate-flip" : ""}
        `}
      >
        {/* HEAD */}
        <img
          src={headImage}
          alt="Head"
          className={`
            absolute inset-0 w-full h-full
            transition-opacity duration-300
            ${!flipping && result === "head" ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* MIDDLE */}
        <img
          src={shadowImage}
          alt="Middle"
          className={`
            absolute inset-0 w-full h-full
            transition-opacity duration-300
            ${flipping ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* TAIL */}
        <img
          src={tailImage}
          alt="Tail"
          className={`
            absolute inset-0 w-full h-full
            transition-opacity duration-300
            ${!flipping && result === "tail" ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white font-poppins text-outline-black text-shadow-2xs">
        {flipping ? "" : result}
      </h3>

      <button
        onClick={flipCoin}
        className="
        font-poppins
          px-4 py-2
          sm:px-6 sm:py-3
          md:px-8 md:py-4
          bg-blue-600 text-white font-semibold rounded-md shadow
          hover:bg-blue-700
          focus:outline-none focus:ring-2 focus:ring-blue-400
        "
      >
        RANDOM
      </button>
    </div>
  );
};

export default CoinFlip;
