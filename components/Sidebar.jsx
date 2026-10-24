"use client";
import React, { useContext, useMemo } from "react";
import { GameContext } from "@/Context/GameContext";

// CosmicStarMarker: Legend icon
const CosmicStarMarker = ({ type, size = "24px" }) => {
  const palette = {
    2: {
      primary: "#669f82", // Sage emerald green
      secondary: "#3b634f",
      core: "#c4dfd0",
      glow: "rgba(102, 159, 130, 0.38)",
    },
    3: {
      primary: "#bfa054", // Brass ochre yellow
      secondary: "#78612b",
      core: "#eadbb4",
      glow: "rgba(191, 160, 84, 0.38)",
    },
    4: {
      primary: "#b35c4e", // Terracotta rust red
      secondary: "#6e3127",
      core: "#e6beb8",
      glow: "rgba(179, 92, 78, 0.38)",
    },
  }[type] || {
    primary: "#669f82",
    secondary: "#3b634f",
    core: "#c4dfd0",
    glow: "rgba(102, 159, 130, 0.38)",
  };

  return (
    <svg
      viewBox="0 0 36 36"
      style={{ width: size, height: size, filter: `drop-shadow(0 0 4px ${palette.glow})` }}
      className="overflow-visible select-none"
    >
      <circle cx="18" cy="18" r="12" fill={palette.glow} opacity="0.45" />
      <polygon
        points="18,6 21,15 30,18 21,21 18,30 15,21 6,18 15,15"
        transform="rotate(45 18 18) scale(0.78)"
        fill={palette.secondary}
        stroke={palette.primary}
        strokeWidth="0.6"
      />
      <polygon
        points="18,2 21.5,14.5 34,18 21.5,21.5 18,34 14.5,21.5 2,18 14.5,14.5"
        fill={palette.primary}
        stroke="#181b20"
        strokeWidth="0.7"
      />
      <polygon
        points="18,8 19.8,16.2 28,18 19.8,19.8 18,28 16.2,19.8 8,18 16.2,16.2"
        fill={palette.core}
        opacity="0.85"
      />
      <circle cx="18" cy="18" r="2.2" fill="#e8edf2" />
    </svg>
  );
};

// DiscoveryPlanetIcon: Legend goal
const DiscoveryPlanetIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible select-none">
    <defs>
      <radialGradient id="sidePlanetAtmo" cx="50%" cy="50%" r="50%">
        <stop offset="55%" stopColor="#7a909e" stopOpacity="0.28" />
        <stop offset="80%" stopColor="#8c7b65" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="sidePlanetBody" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#9badb8" />
        <stop offset="38%" stopColor="#6c808e" />
        <stop offset="68%" stopColor="#5c564c" />
        <stop offset="92%" stopColor="#272d34" />
        <stop offset="100%" stopColor="#121519" />
      </radialGradient>
      <linearGradient id="sidePlanetRing" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6e6559" stopOpacity="0.15" />
        <stop offset="25%" stopColor="#a39684" stopOpacity="0.75" />
        <stop offset="50%" stopColor="#7c8b94" stopOpacity="0.55" />
        <stop offset="75%" stopColor="#a39684" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#6e6559" stopOpacity="0.15" />
      </linearGradient>
      <clipPath id="sidePlanetClip">
        <circle cx="60" cy="60" r="34" />
      </clipPath>
    </defs>
    <circle cx="60" cy="60" r="56" fill="url(#sidePlanetAtmo)" />
    <g transform="rotate(-22 60 60)">
      <ellipse
        cx="60"
        cy="60"
        rx="56"
        ry="15"
        fill="none"
        stroke="url(#sidePlanetRing)"
        strokeWidth="5.5"
        strokeDasharray="180 180"
        strokeDashoffset="180"
      />
    </g>
    <g clipPath="url(#sidePlanetClip)">
      <circle cx="60" cy="60" r="34" fill="url(#sidePlanetBody)" />
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
        stroke="url(#sidePlanetRing)"
        strokeWidth="5.5"
        strokeDasharray="180 180"
        strokeDashoffset="0"
      />
    </g>
  </svg>
);


const Sidebar = () => {
  const { lifelines, score, timeLeft, setIsGameOver, setShowBackButton } = useContext(GameContext);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }, [timeLeft]);

  const handleEndGame = () => {
    setShowBackButton(true);
    setIsGameOver(true);
  };

  return (
    <div className="relative z-20 w-full lg:w-[290px] xl:w-[320px] h-full flex flex-col justify-between items-end py-1 pl-2 select-none">
      {/* 1. TOP RIGHT: SPACECRAFT VITALITY BAR (SINGLE BAR WITH 2 DIVISIONS) */}
      <div className="flex flex-col items-end">
        <div
          className="relative px-3.5 py-2.5 rounded-md flex flex-col items-center gap-1.5 min-w-[210px]"
          style={{
            background: "linear-gradient(180deg, #272c33 0%, #15181d 100%)",
            border: "1.5px solid #5c7080",
            boxShadow: "inset 0 1px 0 rgba(190, 215, 230, 0.25), 0 4px 16px rgba(0,0,0,0.8)",
          }}
        >
          {/* Bevel highlights */}
          <div className="absolute -top-[2px] left-3 right-3 h-[2px] bg-[#8eb0c4]/50" />
          <div className="absolute -bottom-[2px] left-3 right-3 h-[2px] bg-[#8eb0c4]/50" />

          {/* Single continuous bar with 2 interior divisions */}
          <div
            className="relative w-full h-4 rounded-[4px] bg-[#12161c] border border-[#3e4d5a] overflow-hidden p-[2px]"
            style={{ boxShadow: "inset 0 1px 4px rgba(0,0,0,0.85)" }}
          >
            {/* The active vitality fill */}
            <div
              className="h-full rounded-[2px] transition-all duration-300 ease-out relative overflow-hidden"
              style={{
                width: `${(lifelines / 3) * 100}%`,
                background:
                  lifelines === 1
                    ? "linear-gradient(90deg, #b91c1c 0%, #ef4444 60%, #f87171 100%)"
                    : "linear-gradient(90deg, #0284c7 0%, #38bdf8 60%, #67e8f9 100%)",
                boxShadow:
                  lifelines === 1
                    ? "0 0 10px rgba(239, 68, 68, 0.7), inset 0 1px 0 rgba(255,255,255,0.4)"
                    : "0 0 10px rgba(0, 240, 255, 0.55), inset 0 1px 0 rgba(255,255,255,0.45)",
              }}
            >
              {/* Gloss reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
            </div>

            {/* Division Line 1 (at 1/3 mark) */}
            <div
              className="absolute top-0 bottom-0 w-[1.5px] bg-[#0c1015] z-10 pointer-events-none"
              style={{ left: "33.33%" }}
            >
              <div className="w-[1px] h-full bg-[#5a6e80]/80" />
            </div>

            {/* Division Line 2 (at 2/3 mark) */}
            <div
              className="absolute top-0 bottom-0 w-[1.5px] bg-[#0c1015] z-10 pointer-events-none"
              style={{ left: "66.66%" }}
            >
              <div className="w-[1px] h-full bg-[#5a6e80]/80" />
            </div>
          </div>

          {/* Below the bar: SPACECRAFT VITALITY */}
          <div className="w-full flex items-center justify-between px-0.5 pt-0.5">
            <span
              className="text-[9.5px] font-semibold tracking-[0.18em] text-[#8ca0b3] uppercase select-none"
              style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}
            >
              SPACECRAFT VITALITY
            </span>
            <span
              className={`text-[9.5px] font-mono font-bold ${
                lifelines === 3
                  ? "text-[#38bdf8]"
                  : lifelines === 2
                  ? "text-[#38bdf8]"
                  : lifelines === 1
                  ? "text-[#f87171] animate-pulse"
                  : "text-[#64748b]"
              }`}
            >
              {lifelines === 3 ? "100%" : lifelines === 2 ? "67%" : lifelines === 1 ? "33%" : "0%"}
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-full flex items-center justify-end mt-1 overflow-visible">
        <div
          className="animate-astronaut-float flex-shrink-0 pointer-events-none select-none"
          style={{
            width: "min(150px, 55%)",
            marginRight: "-18px",
            filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.7)) drop-shadow(0 0 10px rgba(56,189,248,0.18))",
            zIndex: 10,
          }}
        >
          <img
            src="/astronaut.png"
            alt="Floating Astronaut"
            className="w-full h-auto object-contain select-none pointer-events-none block opacity-75"
            draggable={false}
          />
        </div>

        <div className="flex flex-col gap-2 z-20" style={{ minWidth: "156px", maxWidth: "160px" }}>
          {/* Time Left */}
          <div
            className="px-3 py-2 rounded text-center"
            style={{
              background: "linear-gradient(180deg, #2d3239 0%, #1a1e23 100%)",
              border: "1px solid #607180",
              boxShadow: "0 4px 12px rgba(0,0,0,0.75)",
            }}
          >
            <span className="text-[16px] font-medium tracking-wide text-[#d4dde6] whitespace-nowrap">
              Time Left - <strong className="font-semibold text-white">{formattedTime}</strong>
            </span>
          </div>

          {/* Score */}
          <div
            className="px-3 py-2 rounded text-center"
            style={{
              background: "linear-gradient(180deg, #2b323a 0%, #171c22 100%)",
              border: "1px solid #6c8799",
              boxShadow: "0 0 12px rgba(120, 160, 185, 0.18), inset 0 1px 0 rgba(190,220,240,0.2)",
            }}
          >
            <span className="text-[16px] font-semibold tracking-wide text-[#e2ecf5]">
              Score: {score}
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="w-[80%] flex flex-col gap-2.5 my-2">
        {[
          { label: "Easy", pts: "+10 pts", type: 2 },
          { label: "Medium", pts: "+20 pts", type: 3 },
          { label: "Hard", pts: "+30 pts", type: 4 },
          { label: "Goal", pts: "+90 pts", type: 5 },
        ].map((item) => (
          <div
            key={item.label}
            className="w-full px-3.5 py-2 rounded-md flex items-center justify-between"
            style={{
              background:
                "linear-gradient(90deg, rgba(28,34,40,0.92) 0%, rgba(46,56,66,0.92) 50%, rgba(26,31,37,0.92) 100%)",
              border: "1px solid #566978",
              boxShadow: "inset 0 1px 0 rgba(180, 205, 220, 0.2), 0 3px 10px rgba(0,0,0,0.65)",
            }}
          >
            <div className="w-7 h-7 flex items-center justify-center">
              {item.type === 5 ? (
                <div className="w-7 h-7">
                  <DiscoveryPlanetIcon />
                </div>
              ) : (
                <CosmicStarMarker type={item.type} size="24px" />
              )}
            </div>

            <span className="text-[13.5px] font-medium text-[#d8e2eb] tracking-wide">
              {item.label}
            </span>

            <span className="text-[13px] font-medium text-[#c3d0dc]">{item.pts}</span>
          </div>
        ))}
      </div>


      {/* End Mission button */}
      <button
        onClick={handleEndGame}
        className="relative w-full py-2.5 px-6 rounded-md flex items-center justify-center gap-2.5 group active:scale-[0.99] transition-all cursor-pointer"
        style={{
          background: "linear-gradient(180deg, #525a63 0%, #383f47 50%, #262b31 100%)",
          border: "2px solid #9ba8b5",
          boxShadow:
            "0 0 14px rgba(150, 175, 195, 0.25), inset 0 1px 1px rgba(255,255,255,0.35)",
        }}
      >
        <div className="absolute inset-[2px] rounded-sm border border-[#1d2126] pointer-events-none" />
        <span className="text-[14.5px] font-semibold text-[#eef4f8] tracking-wide">
          End Mission
        </span>
        <svg
          viewBox="0 0 20 20"
          className="w-4 h-4 text-[#d5e0ea] group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="14" height="14" rx="2" />
          <path d="M 7,10 L 13,10 M 10.5,7.5 L 13,10 L 10.5,12.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
