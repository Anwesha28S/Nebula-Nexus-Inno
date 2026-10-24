"use client";
import React, { useContext } from "react";
import { GameContext } from "@/Context/GameContext";

const DiscoveryPlanetSVG = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible select-none">
    <defs>
      <radialGradient id="modalPlanetAtmo" cx="50%" cy="50%" r="50%">
        <stop offset="55%" stopColor="#7a909e" stopOpacity="0.28" />
        <stop offset="80%" stopColor="#8c7b65" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="modalPlanetBody" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#9badb8" />
        <stop offset="38%" stopColor="#6c808e" />
        <stop offset="68%" stopColor="#5c564c" />
        <stop offset="92%" stopColor="#272d34" />
        <stop offset="100%" stopColor="#121519" />
      </radialGradient>
      <linearGradient id="modalPlanetRing" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6e6559" stopOpacity="0.15" />
        <stop offset="25%" stopColor="#a39684" stopOpacity="0.75" />
        <stop offset="50%" stopColor="#7c8b94" stopOpacity="0.55" />
        <stop offset="75%" stopColor="#a39684" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#6e6559" stopOpacity="0.15" />
      </linearGradient>
      <clipPath id="modalPlanetClip">
        <circle cx="60" cy="60" r="34" />
      </clipPath>
    </defs>
    <circle cx="60" cy="60" r="56" fill="url(#modalPlanetAtmo)" />
    <g transform="rotate(-22 60 60)">
      <ellipse
        cx="60"
        cy="60"
        rx="56"
        ry="15"
        fill="none"
        stroke="url(#modalPlanetRing)"
        strokeWidth="5.5"
        strokeDasharray="180 180"
        strokeDashoffset="180"
      />
    </g>
    <g clipPath="url(#modalPlanetClip)">
      <circle cx="60" cy="60" r="34" fill="url(#modalPlanetBody)" />
      <path d="M 20,46 Q 60,54 100,42 L 100,52 Q 60,64 20,55 Z" fill="#8f7d66" opacity="0.45" />
      <path d="M 20,62 Q 55,70 100,58 L 100,67 Q 55,78 20,70 Z" fill="#7d6c57" opacity="0.42" />
      <path d="M 75,26 A 34,34 0 1,1 32,85 A 38,36 0 0,0 75,26 Z" fill="#0b0d10" opacity="0.55" />
    </g>
    <circle cx="60" cy="60" r="34" fill="none" stroke="#9eb0bd" strokeWidth="1" opacity="0.55" />
    <g transform="rotate(-22 60 60)">
      <ellipse
        cx="60"
        cy="60"
        rx="56"
        ry="15"
        fill="none"
        stroke="url(#modalPlanetRing)"
        strokeWidth="5.5"
        strokeDasharray="180 180"
        strokeDashoffset="0"
      />
    </g>
  </svg>
);

const GameOverModal = () => {
  const {
    isGameOver,
    score,
    timeLeft,
    endGame,
    showBackButton,
    setShowBackButton,
    setIsGameOver,
    lifelines,
  } = useContext(GameContext);

  if (!isGameOver) {
    return null;
  }

  const timeTaken = 600 - timeLeft;
  const minutesTaken = Math.floor(timeTaken / 60);
  const secondsTaken = timeTaken % 60;
  const mytime = minutesTaken + secondsTaken / 100;

  const isWon = lifelines > 0 && timeLeft > 0;

  const resume = () => {
    setIsGameOver(false);
    setShowBackButton(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 select-none">
      <div
        className="w-full max-w-md rounded-xl p-7 text-center relative"
        style={{
          background: "linear-gradient(180deg, #1e242b 0%, #101318 100%)",
          border: "1.5px solid #738999",
          boxShadow: "0 20px 60px rgba(0,0,0,0.95)",
        }}
      >
        <div className="w-24 h-24 mx-auto mb-3">
          <DiscoveryPlanetSVG />
        </div>

        <h2 className="text-xl font-bold tracking-wider uppercase text-[#e6eff7] mb-1">
          {showBackButton
            ? "ABANDON THE MISSION ?"
            : isWon
            ? "EXOPLANET DISCOVERED"
            : "MISSION TERMINATED"}
        </h2>
        <p className="text-xs text-[#8fa0b0] mb-5">
          {showBackButton
            ? "You have not discovered the new world yet."
            : isWon
            ? "You successfully navigated the Nebula Nexus debris field and reached the target world."
            : "Telemetry session concluded. Final mission score logged to mainframe."}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-lg bg-[#14181d] border border-[#343f4a]">
            <div className="text-[11px] uppercase tracking-wider text-[#7f8f9e]">Final Score</div>
            <div className="text-2xl font-bold text-[#e2ecf5] mt-1">{score} pts</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#14181d] border border-[#343f4a]">
            <div className="text-[11px] uppercase tracking-wider text-[#7f8f9e]">Time Elapsed</div>
            <div className="text-2xl font-bold text-[#e2ecf5] mt-1">
              {minutesTaken}:{secondsTaken < 10 ? "0" : ""}{secondsTaken}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {showBackButton && (
            <button
              onClick={resume}
              className="w-full py-2.5 px-6 rounded-lg font-semibold text-sm text-[#d4dde6] bg-[#232930] hover:bg-[#2d353e] border border-[#52606d] cursor-pointer transition-all"
            >
              Resume Navigation
            </button>
          )}
          <button
            onClick={() => endGame(mytime)}
            className="w-full py-2.5 px-6 rounded-lg font-semibold text-sm text-[#eef4f8] cursor-pointer transition-all shadow-lg hover:brightness-110 active:scale-[0.99]"
            style={{
              background: "linear-gradient(180deg, #525a63 0%, #2c323a 100%)",
              border: "1.5px solid #9ba8b5",
            }}
          >
            Submit Mission Log
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
