"use client";
import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "@/Context/GameContext";

const CosmicStarMarker = ({ type = 2, size = "28px" }) => {
  const palette = {
    2: {
      primary: "#669f82",
      secondary: "#3b634f",
      core: "#c4dfd0",
      glow: "rgba(102, 159, 130, 0.38)",
    },
    3: {
      primary: "#bfa054",
      secondary: "#78612b",
      core: "#eadbb4",
      glow: "rgba(191, 160, 84, 0.38)",
    },
    4: {
      primary: "#b35c4e",
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

const QuestionModal = () => {
  const { isQuestionModalOpen, currentQuestion, handleAnswerSubmission, diff } =
    useContext(GameContext);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [currentQuestion]);

  if (!isQuestionModalOpen || !currentQuestion) {
    return null;
  }

  const questionDiff = currentQuestion.difficulty || diff || 2;
  const diffMeta = {
    2: { label: "EASY", points: "+10 PTS", color: "#669f82" },
    3: { label: "MEDIUM", points: "+20 PTS", color: "#bfa054" },
    4: { label: "HARD", points: "+30 PTS", color: "#b35c4e" },
  }[questionDiff] || { label: "EASY", points: "+10 PTS", color: "#669f82" };

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    handleAnswerSubmission(option);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 select-none animate-fadeIn">
      <div
        className="w-full max-w-xl rounded-xl p-6 md:p-7 relative"
        style={{
          background: "linear-gradient(180deg, #1b2026 0%, #0f1317 100%)",
          border: "1.5px solid #667b8c",
          boxShadow: "0 20px 60px rgba(0,0,0,0.95)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2e3740] pb-3.5 mb-5">
          <div className="flex items-center gap-3">
            <CosmicStarMarker type={questionDiff} size="28px" />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#9cb3c4] font-semibold">
                {currentQuestion.heading || "Astrophysics • Telemetry Sector"}
              </span>
              <span
                className="text-[10px] font-mono tracking-wider font-semibold"
                style={{ color: diffMeta.color }}
              >
                {diffMeta.label} • {diffMeta.points}
              </span>
            </div>
          </div>
          <span className="text-[11px] font-mono tracking-wider text-[#637280]">
            NEXUS QUERY
          </span>
        </div>

        {/* Question */}
        <h3 className="text-base md:text-lg font-medium text-[#e6eef5] mb-6 leading-relaxed">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isAnswerCorrect = option === currentQuestion.correctAnswer;

            let buttonClasses =
              "border-[#3a4550] bg-[#161b20] hover:bg-[#232b33] hover:border-[#7c97ab] text-[#d2dde6]";

            if (selectedAnswer !== null) {
              if (isAnswerCorrect) {
                buttonClasses =
                  "border-[#468265] bg-[#1b2b23] text-[#d8fae8] ring-1 ring-[#468265]";
              } else if (isSelected && !isCorrect) {
                buttonClasses =
                  "border-[#8c463f] bg-[#2d1b19] text-[#fadad7] ring-1 ring-[#8c463f]";
              } else {
                buttonClasses = "border-[#2a3036] bg-[#121519] text-[#717b85] opacity-50";
              }
            }

            return (
              <button
                key={idx}
                disabled={selectedAnswer !== null}
                onClick={() => handleOptionClick(option)}
                className={`w-full text-left px-4 py-3.5 rounded-lg border transition-all flex items-center gap-3.5 cursor-pointer ${buttonClasses}`}
              >
                <span
                  className="w-7 h-7 rounded bg-[#252d35] border border-[#4c5b69] flex items-center justify-center text-xs font-semibold text-[#9cb3c4] flex-shrink-0"
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm font-medium leading-snug">{option}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
