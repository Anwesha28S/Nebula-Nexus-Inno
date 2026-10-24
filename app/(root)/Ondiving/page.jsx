'use client';
import React, { useContext, useEffect } from 'react';
import MazeGrid from '@/components/MazeGrid';
import Sidebar from '@/components/Sidebar';
import QuestionModal from '@/components/QuestionModal';
import GameOverModal from '@/components/GameOverModal';
import RegistrationStars from '@/components/auth/RegistrationStars';
import { GameContext } from '@/Context/GameContext';

const Ondiving = () => {
  const { setGameStarted } = useContext(GameContext);

  useEffect(() => {
    const startTime = new Date();
    setGameStarted(startTime);
    console.log('Game started at:', startTime);
  }, [setGameStarted]);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden select-none flex flex-col lg:flex-row items-center justify-between px-4 py-3 lg:px-10 lg:py-6"
      style={{
        background:
          'radial-gradient(ellipse at 76% 40%, rgba(44, 48, 64, .27), transparent 42%), radial-gradient(ellipse at 18% 82%, rgba(27, 30, 39, .26), transparent 38%), linear-gradient(135deg, #0b0c10 0%, #101116 52%, #090a0e 100%)',
        color: '#dce3ea',
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.55,
          backgroundImage:
            'radial-gradient(1px 1px at 12px 19px, rgba(255,255,255,.8) 98%, transparent), radial-gradient(1px 1px at 80px 72px, rgba(210,218,235,.7) 98%, transparent), radial-gradient(1.3px 1.3px at 150px 40px, rgba(255,255,255,.65) 98%, transparent), radial-gradient(1px 1px at 190px 130px, rgba(255,255,255,.58) 98%, transparent)',
          backgroundSize: '230px 190px',
        }}
      />

      <RegistrationStars />

      {/* Maze arena */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full h-full overflow-visible">
        <div
          className="relative overflow-visible"
          style={{
            width: 'min(66vw, 84vh * (35 / 23))',
            aspectRatio: '35 / 23',
          }}
        >
          <MazeGrid />
        </div>

        {/* Controls */}
        <div className="mt-2 flex items-center gap-4 text-[11px] text-[#7c8794] tracking-wider">
          <span>NAVIGATE: ARROW KEYS / WASD</span>
          <span>•</span>
          <span>COLLECT STARS TO DECODE NEXUS QUERIES</span>
        </div>
      </div>

      {/* Sidebar HUD */}
      <Sidebar />

      {/* Modals */}
      <GameOverModal />
      <QuestionModal />
    </div>
  );
};

export default Ondiving;
