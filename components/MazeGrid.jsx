'use client'
import React, { useContext, useEffect, useRef, useState } from 'react';
import { GameContext } from '@/Context/GameContext';

// SpaceDebrisCell: Asteroid tiles
const SpaceDebrisCell = React.memo(({ row, col }) => {
  const seed = (row * 37 + col * 101) % 12;
  const rot = ((row * 53 + col * 29) % 4) * 90;

  return (
    <svg
      viewBox="0 0 32 32"
      className="w-[90%] h-[90%] block select-none pointer-events-none overflow-visible"
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <defs>
        <radialGradient id="rockGradLight" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#b0b5bc" />
          <stop offset="45%" stopColor="#696e75" />
          <stop offset="85%" stopColor="#2d3035" />
          <stop offset="100%" stopColor="#141619" />
        </radialGradient>
        <radialGradient id="rockGradDark" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#848991" />
          <stop offset="55%" stopColor="#454950" />
          <stop offset="90%" stopColor="#1f2125" />
          <stop offset="100%" stopColor="#0d0e11" />
        </radialGradient>
        <linearGradient id="metalScrap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9fa6b0" />
          <stop offset="50%" stopColor="#525760" />
          <stop offset="100%" stopColor="#23262b" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14.5" fill="#0d0f12" opacity="0.88" />
      {seed === 0 && (<g>
        <polygon points="5,10 12,3 23,5 28,14 24,25 13,28 4,21" fill="url(#rockGradLight)" stroke="#1a1c20" strokeWidth="1" />
        <circle cx="13" cy="12" r="3" fill="#25282c" stroke="#7d828a" strokeWidth="0.6" />
        <circle cx="20" cy="18" r="2.2" fill="#1e2024" stroke="#62676f" strokeWidth="0.5" />
        <polygon points="2,6 7,2 9,7 4,9" fill="url(#rockGradDark)" />
        <polygon points="24,23 30,25 28,30 22,28" fill="url(#rockGradDark)" />
      </g>)}
      {seed === 1 && (<g>
        <polygon points="3,16 10,6 21,8 25,18 16,27 5,24" fill="url(#rockGradDark)" stroke="#17191c" strokeWidth="1" />
        <rect x="11" y="5" width="16" height="10" rx="1" transform="rotate(28 19 10)" fill="url(#metalScrap)" stroke="#2b2e33" strokeWidth="0.9" />
        <line x1="13" y1="7" x2="23" y2="12" stroke="#1e2024" strokeWidth="1" />
        <circle cx="8" cy="23" r="4.5" fill="url(#rockGradLight)" />
        <circle cx="26" cy="25" r="3.5" fill="url(#rockGradDark)" />
      </g>)}
      {seed === 2 && (<g>
        <polygon points="4,8 14,3 20,11 15,19 5,17" fill="url(#rockGradLight)" stroke="#1c1e22" strokeWidth="0.9" />
        <polygon points="16,13 27,9 30,20 22,29 13,23" fill="url(#rockGradDark)" stroke="#141619" strokeWidth="0.9" />
        <polygon points="3,20 11,18 14,27 6,30" fill="url(#metalScrap)" stroke="#1c1e22" strokeWidth="0.8" />
        <circle cx="11" cy="10" r="1.8" fill="#23262a" />
        <circle cx="22" cy="19" r="2.5" fill="#191b1f" />
      </g>)}
      {seed === 3 && (<g>
        <path d="M 4,26 Q 14,15 28,6" stroke="#737982" strokeWidth="2.4" fill="none" />
        <path d="M 6,28 Q 18,19 29,11" stroke="#3d4148" strokeWidth="1.5" fill="none" />
        <polygon points="5,5 16,3 21,12 12,18 3,13" fill="url(#rockGradLight)" stroke="#181a1d" strokeWidth="1" />
        <polygon points="15,17 26,15 29,26 19,29 13,24" fill="url(#rockGradDark)" stroke="#181a1d" strokeWidth="1" />
        <rect x="8" y="19" width="7" height="9" rx="1" fill="url(#metalScrap)" transform="rotate(-18 11 23)" />
      </g>)}
      {seed === 4 && (<g>
        <polygon points="3,5 19,4 23,15 8,20 2,12" fill="url(#metalScrap)" stroke="#1d2024" strokeWidth="1" />
        <circle cx="8" cy="10" r="1.3" fill="#181a1e" />
        <circle cx="14" cy="9" r="1.3" fill="#181a1e" />
        <polygon points="12,15 25,12 30,22 22,30 10,26" fill="url(#rockGradLight)" stroke="#16181b" strokeWidth="1" />
        <circle cx="21" cy="21" r="2.7" fill="#2c2f35" />
        <circle cx="6" cy="25" r="4" fill="url(#rockGradDark)" />
      </g>)}
      {seed === 5 && (<g>
        <polygon points="7,3 21,4 29,12 27,24 17,29 5,25 2,14" fill="url(#rockGradDark)" stroke="#121417" strokeWidth="1.1" />
        <polygon points="9,6 19,7 23,14 15,20 7,15" fill="#7b8088" opacity="0.45" />
        <circle cx="18" cy="12" r="2.5" fill="#1f2226" stroke="#8e949e" strokeWidth="0.5" />
        <circle cx="11" cy="20" r="3.2" fill="#1b1d21" stroke="#6c717a" strokeWidth="0.5" />
        <circle cx="22" cy="22" r="1.8" fill="#181a1d" />
      </g>)}
      {seed === 6 && (<g>
        <rect x="4" y="6" width="18" height="12" transform="rotate(-22 13 12)" fill="url(#metalScrap)" stroke="#1a1c20" strokeWidth="1" />
        <line x1="6" y1="11" x2="20" y2="6" stroke="#2c3036" strokeWidth="0.9" />
        <line x1="8" y1="15" x2="22" y2="10" stroke="#2c3036" strokeWidth="0.9" />
        <polygon points="14,16 26,14 30,24 21,30 12,25" fill="url(#rockGradLight)" stroke="#17191d" strokeWidth="0.9" />
        <polygon points="2,19 10,18 12,28 4,29" fill="url(#rockGradDark)" />
      </g>)}
      {seed === 7 && (<g>
        <circle cx="10" cy="10" r="7" fill="url(#rockGradLight)" stroke="#181a1e" strokeWidth="0.9" />
        <circle cx="22" cy="11" r="6" fill="url(#rockGradDark)" stroke="#181a1e" strokeWidth="0.9" />
        <circle cx="16" cy="22" r="7.5" fill="url(#rockGradLight)" stroke="#181a1e" strokeWidth="0.9" />
        <circle cx="6" cy="23" r="4.5" fill="url(#metalScrap)" />
        <circle cx="26" cy="23" r="4" fill="url(#rockGradDark)" />
        <circle cx="15" cy="20" r="2" fill="#22252a" />
      </g>)}
      {seed === 8 && (<g>
        <circle cx="15" cy="15" r="9" fill="none" stroke="url(#metalScrap)" strokeWidth="3.5" strokeDasharray="16 6" />
        <polygon points="3,6 13,2 16,11 6,15" fill="url(#rockGradLight)" stroke="#17191c" strokeWidth="0.8" />
        <polygon points="17,17 28,14 30,25 20,29" fill="url(#rockGradDark)" stroke="#17191c" strokeWidth="0.8" />
        <circle cx="8" cy="24" r="5" fill="url(#rockGradLight)" />
      </g>)}
      {seed === 9 && (<g>
        <polygon points="2,9 15,2 22,10 14,22 3,18" fill="url(#rockGradDark)" stroke="#141619" strokeWidth="1" />
        <polygon points="16,8 29,5 28,19 18,17" fill="url(#rockGradLight)" stroke="#141619" strokeWidth="0.9" />
        <polygon points="8,19 24,18 27,29 11,30 5,25" fill="url(#metalScrap)" stroke="#141619" strokeWidth="1" />
        <line x1="11" y1="22" x2="22" y2="25" stroke="#2c3036" strokeWidth="1.2" />
      </g>)}
      {seed === 10 && (<g>
        <path d="M 3,8 C 12,14 18,6 29,12" stroke="#686e78" strokeWidth="1.8" fill="none" />
        <path d="M 2,14 C 14,20 20,12 30,18" stroke="#454950" strokeWidth="1.4" fill="none" />
        <polygon points="6,4 20,3 26,12 18,21 6,16" fill="url(#rockGradLight)" stroke="#17191d" strokeWidth="1" />
        <polygon points="4,18 16,19 19,29 7,30 2,24" fill="url(#rockGradDark)" stroke="#17191d" strokeWidth="0.9" />
        <circle cx="24" cy="23" r="5.5" fill="url(#rockGradLight)" />
      </g>)}
      {seed === 11 && (<g>
        <polygon points="4,7 16,2 27,7 30,19 22,29 9,28 2,18" fill="url(#rockGradLight)" stroke="#16181c" strokeWidth="1" />
        <polygon points="8,9 17,6 23,13 14,17" fill="#9ea4ae" opacity="0.35" />
        <circle cx="11" cy="14" r="2.6" fill="#23262b" stroke="#7d838c" strokeWidth="0.6" />
        <circle cx="21" cy="17" r="3.1" fill="#1e2025" stroke="#686d75" strokeWidth="0.6" />
        <circle cx="14" cy="23" r="2" fill="#23262b" />
      </g>)}
    </svg>
  );
});
SpaceDebrisCell.displayName = 'SpaceDebrisCell';

// CosmicStarMarker: Star collectible
const CosmicStarMarker = ({ type, size = '100%' }) => {
  const palette = {
    2: { primary: '#669f82', secondary: '#3b634f', core: '#c4dfd0', glow: 'rgba(102,159,130,0.38)' },
    3: { primary: '#bfa054', secondary: '#78612b', core: '#eadbb4', glow: 'rgba(191,160,84,0.38)' },
    4: { primary: '#b35c4e', secondary: '#6e3127', core: '#e6beb8', glow: 'rgba(179,92,78,0.38)' },
  }[type];

  return (
    <svg viewBox="0 0 36 36" style={{ width: size, height: size, filter: `drop-shadow(0 0 4px ${palette.glow})` }} className="overflow-visible select-none">
      <circle cx="18" cy="18" r="12" fill={palette.glow} opacity="0.45" />
      <polygon points="18,6 21,15 30,18 21,21 18,30 15,21 6,18 15,15" transform="rotate(45 18 18) scale(0.78)" fill={palette.secondary} stroke={palette.primary} strokeWidth="0.6" />
      <polygon points="18,2 21.5,14.5 34,18 21.5,21.5 18,34 14.5,21.5 2,18 14.5,14.5" fill={palette.primary} stroke="#181b20" strokeWidth="0.7" />
      <polygon points="18,8 19.8,16.2 28,18 19.8,19.8 18,28 16.2,19.8 8,18 16.2,16.2" fill={palette.core} opacity="0.85" />
      <circle cx="18" cy="18" r="2.2" fill="#e8edf2" />
    </svg>
  );
};

// DiscoveryPlanetSVG: Goal exoplanet
const DiscoveryPlanetSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={`${className} overflow-visible select-none`}>
    <defs>
      <radialGradient id="planetAtmosphere" cx="50%" cy="50%" r="50%">
        <stop offset="55%" stopColor="#7a909e" stopOpacity="0.28" />
        <stop offset="80%" stopColor="#8c7b65" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="planetBody" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#9badb8" />
        <stop offset="38%" stopColor="#6c808e" />
        <stop offset="68%" stopColor="#5c564c" />
        <stop offset="92%" stopColor="#272d34" />
        <stop offset="100%" stopColor="#121519" />
      </radialGradient>
      <linearGradient id="planetRing" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6e6559" stopOpacity="0.15" />
        <stop offset="25%" stopColor="#a39684" stopOpacity="0.75" />
        <stop offset="50%" stopColor="#7c8b94" stopOpacity="0.55" />
        <stop offset="75%" stopColor="#a39684" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#6e6559" stopOpacity="0.15" />
      </linearGradient>
      <clipPath id="planetClip">
        <circle cx="60" cy="60" r="34" />
      </clipPath>
    </defs>
    <circle cx="60" cy="60" r="56" fill="url(#planetAtmosphere)" />
    <g transform="rotate(-22 60 60)">
      <ellipse cx="60" cy="60" rx="56" ry="15" fill="none" stroke="url(#planetRing)" strokeWidth="5.5" strokeDasharray="180 180" strokeDashoffset="180" />
      <ellipse cx="60" cy="60" rx="48" ry="12" fill="none" stroke="#8d8273" strokeWidth="1.6" opacity="0.55" strokeDasharray="150 150" strokeDashoffset="150" />
    </g>
    <g clipPath="url(#planetClip)">
      <circle cx="60" cy="60" r="34" fill="url(#planetBody)" />
      <path d="M 20,46 Q 60,54 100,42 L 100,52 Q 60,64 20,55 Z" fill="#8f7d66" opacity="0.45" />
      <path d="M 20,62 Q 55,70 100,58 L 100,67 Q 55,78 20,70 Z" fill="#7d6c57" opacity="0.42" />
      <path d="M 22,34 Q 60,40 98,32 L 98,38 Q 60,46 22,39 Z" fill="#99a8b3" opacity="0.3" />
      <path d="M 75,26 A 34,34 0 1,1 32,85 A 38,36 0 0,0 75,26 Z" fill="#0b0d10" opacity="0.55" />
    </g>
    <circle cx="60" cy="60" r="34" fill="none" stroke="#9eb0bd" strokeWidth="1" opacity="0.55" />
    <g transform="rotate(-22 60 60)">
      <ellipse cx="60" cy="60" rx="56" ry="15" fill="none" stroke="url(#planetRing)" strokeWidth="5.5" strokeDasharray="180 180" strokeDashoffset="0" />
      <ellipse cx="60" cy="60" rx="49" ry="12.5" fill="none" stroke="#b5a896" strokeWidth="1.4" opacity="0.65" strokeDasharray="155 155" strokeDashoffset="0" />
    </g>
  </svg>
);

// PlayerSpaceshipSVG: Player ship
const PlayerSpaceshipSVG = ({ angle = 0 }) => (
  <div
    className="relative w-full h-full flex items-center justify-center pointer-events-none select-none z-30"
    style={{
      transform: `rotate(${angle}deg) scale(2.55)`,
      transition: 'transform 130ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      filter: 'drop-shadow(0 0 6px rgba(0, 240, 255, 0.95)) drop-shadow(0 0 16px rgba(14, 165, 233, 0.6))',
    }}
  >
    <svg viewBox="0 0 76 50" className="w-full h-full overflow-visible">
      <defs>
        {/* Exhaust gradients */}
        <linearGradient id="thrusterPlumeMain" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.95" />
          <stop offset="65%" stopColor="#0284c7" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="thrusterPlumeCore" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="45%" stopColor="#e0f2fe" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>

        {/* Hull gradients */}
        <linearGradient id="shipHullTop" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#e2e8f0" />
          <stop offset="80%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="shipHullBottom" x1="20%" y1="100%" x2="80%" y2="0%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="45%" stopColor="#e2e8f0" />
          <stop offset="80%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="shipHullDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Neon electric cyan energy conduit lines */}
        <linearGradient id="cyanEnergyStrip" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>

        {/* Crystalline Cyan Visor Canopy */}
        <radialGradient id="canopyReflect" cx="65%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="35%" stopColor="#38bdf8" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </radialGradient>
      </defs>

      {/* Thruster plumes */}
      <g className="animate-pulse">
        {/* Upper Thruster Flame */}
        <polygon points="19,15.5 0,19.1 19,22.7" fill="url(#thrusterPlumeMain)" />
        <polygon points="19,17 6,19.1 19,21.2" fill="url(#thrusterPlumeCore)" />

        {/* Lower Thruster Flame */}
        <polygon points="19,27.3 0,30.9 19,34.5" fill="url(#thrusterPlumeMain)" />
        <polygon points="19,28.8 6,30.9 19,33" fill="url(#thrusterPlumeCore)" />

        {/* Center Auxiliary Booster Flame */}
        <polygon points="21,22.8 4,25 21,27.2" fill="url(#thrusterPlumeMain)" opacity="0.8" />
        <polygon points="21,23.8 8,25 21,26.2" fill="#ffffff" opacity="0.9" />
      </g>

      {/* Engine nozzles */}
      {/* Upper Nozzle */}
      <rect x="17.5" y="15.8" width="5.5" height="6.6" rx="1.5" fill="url(#shipHullDark)" stroke="#00f0ff" strokeWidth="0.7" />
      <ellipse cx="19.5" cy="19.1" rx="1.6" ry="2.4" fill="#38bdf8" />

      {/* Lower Nozzle */}
      <rect x="17.5" y="27.6" width="5.5" height="6.6" rx="1.5" fill="url(#shipHullDark)" stroke="#00f0ff" strokeWidth="0.7" />
      <ellipse cx="19.5" cy="30.9" rx="1.6" ry="2.4" fill="#38bdf8" />

      {/* Wings */}
      {/* Upper Wing Outer Plate */}
      <polygon
        points="36,20 22,5.5 13,9 19,19 28,21"
        fill="url(#shipHullTop)"
        stroke="#0f172a"
        strokeWidth="0.9"
      />
      {/* Upper Wing Carbon Trim & Leading Edge Accent */}
      <polygon points="34,19 23,6.5 19,8.5 29,18" fill="url(#shipHullDark)" />
      <line x1="35" y1="20" x2="22" y2="5.5" stroke="#00f0ff" strokeWidth="1.2" strokeLinecap="round" />

      {/* Lower Wing Outer Plate */}
      <polygon
        points="36,30 22,44.5 13,41 19,31 28,29"
        fill="url(#shipHullBottom)"
        stroke="#0f172a"
        strokeWidth="0.9"
      />
      {/* Lower Wing Carbon Trim & Leading Edge Accent */}
      <polygon points="34,31 23,43.5 19,41.5 29,32" fill="url(#shipHullDark)" />
      <line x1="35" y1="30" x2="22" y2="44.5" stroke="#00f0ff" strokeWidth="1.2" strokeLinecap="round" />

      {/* Wingtip Ion Beacons */}
      <circle cx="21" cy="6" r="1.6" fill="#00f0ff" />
      <circle cx="21" cy="44" r="1.6" fill="#00f0ff" />

      {/* Fuselage */}
      {/* Base Chassis / Shadow Layer */}
      <polygon
        points="64,25 46,16.5 22,15.5 19,25 22,34.5 46,33.5"
        fill="url(#shipHullDark)"
        stroke="#0284c7"
        strokeWidth="0.8"
      />

      {/* Main Dorsal Armor Deck (Unified Seamless Titanium White Plate) */}
      <polygon
        points="64,25 46,17 23,16 19.5,25 23,34 46,33"
        fill="url(#shipHullTop)"
        stroke="#334155"
        strokeWidth="0.5"
      />

      {/* Lower Starboard Chiseled Bevel Shadow (Strokeless 3D lighting facet) */}
      <polygon
        points="64,25 46,33 23,34 19.5,25 64,25"
        fill="url(#shipHullBottom)"
        opacity="0.38"
      />

      {/* Forward Nose Ridge Highlight (In front of cockpit) */}
      <line x1="56" y1="25" x2="63" y2="25" stroke="#ffffff" strokeWidth="1.1" strokeLinecap="round" />

      {/* Insignia */}
      <g transform="rotate(90 29.5 25)">
        <svg x="22" y="16" width="16" height="16" viewBox="41 40 66 59">
          <image href="/apslogoinverted.png" x="0" y="0" width="150" height="150" preserveAspectRatio="xMidYMid meet" />
        </svg>
      </g>

      {/* Canards */}
      <polygon points="48,21.5 54,15.5 43,20" fill="url(#shipHullTop)" stroke="#00f0ff" strokeWidth="0.7" />
      <polygon points="48,28.5 54,34.5 43,30" fill="url(#shipHullBottom)" stroke="#00f0ff" strokeWidth="0.7" />

      {/* Canopy */}
      <polygon
        points="38,25 46,20.5 56,25 46,29.5"
        fill="url(#canopyReflect)"
        stroke="#e0f2fe"
        strokeWidth="0.9"
      />
      {/* Cockpit Specular Arc Reflection */}
      <path
        d="M 42,23.8 Q 47,21.8 52,24.2"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <ellipse cx="48" cy="23.5" rx="2.8" ry="1.1" fill="#ffffff" opacity="0.85" />

      {/* Nose Tip Beacon / Sensor Eye */}
      <circle cx="63" cy="25" r="1.4" fill="#00f0ff" />
    </svg>
  </div>
);

// MazeGrid
const MazeGrid = () => {
  const { ratPosition, mazeLayout, handleMove, isQuestionModalOpen, numRows, numCols } = useContext(GameContext);
  const mazeRef = useRef(null);
  const [playerAngle, setPlayerAngle] = useState(0);

  useEffect(() => { if (mazeRef.current) mazeRef.current.focus(); }, []);
  useEffect(() => { if (!isQuestionModalOpen && mazeRef.current) mazeRef.current.focus(); }, [isQuestionModalOpen]);
  useEffect(() => {
    const handleClick = () => { if (mazeRef.current) mazeRef.current.focus(); };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const isValidMove = (row, col) => {
    if (row < 0 || col < 0 || row >= numRows || col >= numCols) return false;
    return mazeLayout[row][col] !== 1;
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    const { row, col } = ratPosition;
    let newRow = row, newCol = col, newAngle = playerAngle;
    switch (event.key) {
      case 'ArrowUp': case 'w': newRow = row - 1; newAngle = -90; break;
      case 'ArrowDown': case 's': newRow = row + 1; newAngle = 90; break;
      case 'ArrowLeft': case 'a': newCol = col - 1; newAngle = 180; break;
      case 'ArrowRight': case 'd': newCol = col + 1; newAngle = 0; break;
      default: return;
    }
    if (isValidMove(newRow, newCol)) {
      setPlayerAngle(newAngle);
      handleMove(newRow, newCol);
    }
  };

  return (
    <div
      className="relative w-full h-full outline-none overflow-visible"
      tabIndex="0"
      ref={mazeRef}
      onKeyDown={handleKeyDown}
      style={{ background: 'transparent' }}
    >
      <div
        className="relative w-full h-full grid overflow-visible"
        style={{ gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))` }}
      >
        {mazeLayout.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isPlayerHere = ratPosition.row === rowIndex && ratPosition.col === colIndex;
            const isAdjacent = Math.abs(ratPosition.row - rowIndex) + Math.abs(ratPosition.col - colIndex) === 1;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => {
                  if (isAdjacent && cell !== 1) {
                    const dR = rowIndex - ratPosition.row;
                    const dC = colIndex - ratPosition.col;
                    const angle = dR === -1 ? -90 : dR === 1 ? 90 : dC === -1 ? 180 : 0;
                    setPlayerAngle(angle);
                    handleMove(rowIndex, colIndex);
                  }
                }}
                className={`relative w-full h-full flex items-center justify-center${isAdjacent && cell !== 1 ? ' cursor-pointer' : ''}`}
              >
                {cell === 1 && (
                  <div className="w-[90%] h-[90%] flex items-center justify-center">
                    <SpaceDebrisCell row={rowIndex} col={colIndex} />
                  </div>
                )}
                {(cell === 2 || cell === 3 || cell === 4) && !isPlayerHere && (
                  <div className="w-[92%] h-[92%] flex items-center justify-center z-10 animate-pulse">
                    <CosmicStarMarker type={cell} />
                  </div>
                )}
                {cell === 5 && (
                  <div
                    className="absolute z-20 pointer-events-none flex items-center justify-center"
                    style={{
                      width: '320%',
                      height: '320%',
                      top: '90%',
                      left: '100%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <DiscoveryPlanetSVG />
                  </div>
                )}
                {isPlayerHere && <PlayerSpaceshipSVG angle={playerAngle} />}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MazeGrid;
