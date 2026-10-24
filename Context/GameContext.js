'use client'
import { createContext, useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import axios from 'axios';
export const GameContext = createContext();
import { questions } from '@/data/questions';

// Preloaded audio singletons
let correctAudio = null;
let wrongAudio = null;
let beepAudio = null;

if (typeof window !== "undefined") {
  try {
    correctAudio = new Audio('/sounds/correct.mp3');
    correctAudio.preload = 'auto';
    correctAudio.load();

    wrongAudio = new Audio('/sounds/wrong.mp3');
    wrongAudio.preload = 'auto';
    wrongAudio.load();

    beepAudio = new Audio('/sounds/beep.mp3');
    beepAudio.preload = 'auto';
    beepAudio.load();
  } catch (e) {
    console.error("Audio init error:", e);
  }
}

const playSound = (audio) => {
  if (!audio) return;
  try {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch (e) {}
};

export const GameProvider = ({ children }) => {
  let mazeMatrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 3, 1, 0, 1, 4, 1],
    [1, 0, 1, 0, 2, 0, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 4, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 3, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 3, 1, 0, 1],
    [1, 0, 1, 0, 1, 3, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 4, 1],
    [1, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 3, 0, 0, 0, 0, 0, 2, 1, 0, 5],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  const [mazeLayout, setMazeLayout] = useState(mazeMatrix);
    
  const numRows = mazeLayout.length;          
  const numCols = mazeLayout[0].length; 
  const [ratPosition, setRatPosition] = useState({ row: 5, col: 0 });
  const [lifelines, setLifelines] = useState(3);
  const [score, setScore] = useState(0);
  const [easycnt, setEasycnt] = useState(0);
  const [mediumcnt, setMediumcnt] = useState(0);
  const [hardcnt, setHardcnt] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isGameOver, setIsGameOver] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(null);
  const [diff,setdiff]=useState(0);
  const [showBackButton, setShowBackButton] = useState(false);


  const endGame = async (timeTaken) => {
    if (!gameStarted) return; 
    
    const dateStarted = new Date(gameStarted);
    if (isNaN(dateStarted.getTime())) {
      console.error("Invalid gameStarted timestamp");
      return;
    }
  
    const formattedGameStarted = dateStarted.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(',', ''); 
  
    try {
      const response = await axios.post("/api/game", {
        timeTaken,
        points: score,
        gameStarted: formattedGameStarted,
      });
  
      console.log("Game ended, result saved:", response.data);
  
    } catch (error) {
      console.error("Failed to save game result:", error.response?.data || error.message);
    } finally {
       try {
        await signOut({ callbackUrl: '/' });
      } catch (error) {
        console.error("Error signing out:", error);
      }
    }
  };
  
  
  

   const getQuestion = (difficulty) => {
    setdiff(difficulty);
    let questionSet = [];
    if (difficulty === 2) {
      questionSet = questions.easy || [];
    } else if (difficulty === 3) {
      questionSet = questions.medium || questions.easy || [];
    } else if (difficulty === 4) {
      questionSet = questions.hard || questions.easy || [];
    } else {
      questionSet = questions.easy || [];
    }

    if (!questionSet || questionSet.length === 0) return;

    let unansweredQuestions = questionSet.filter(
      (q) => q && !answeredQuestions.has(q.id)
    );
    if (unansweredQuestions.length === 0) {
      unansweredQuestions = questionSet;
    }

    if (unansweredQuestions.length > 0) {
      const randomQuestion =
        unansweredQuestions[
          Math.floor(Math.random() * unansweredQuestions.length)
        ];
      setCurrentQuestion({ ...randomQuestion, difficulty });
      setIsQuestionModalOpen(true);
    }
  };
  const handleAnswerSubmission = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion?.correctAnswer) {
      setScore(score + (diff - 1) * 10);
      if (diff == 2) {
        setEasycnt(easycnt + 1);
      }
      if (diff == 3) {
        setMediumcnt(mediumcnt + 1);
      }
      if (diff == 4) {
        setHardcnt(hardcnt + 1);
      }
      if (diff == 5) {
        setHardcnt(hardcnt + 3);
      }
      playSound(correctAudio);
    } else {
      setLifelines(lifelines - 1);
      playSound(wrongAudio);
    }
    if (currentQuestion?.id) {
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion.id]));
    }
    const updatedMaze = [...mazeLayout];
    updatedMaze[ratPosition.row][ratPosition.col] = 0;
    setMazeLayout(updatedMaze);
    
    // Modal dismissal
    setTimeout(() => {
      setIsQuestionModalOpen(false);
      setCurrentQuestion(null);
    }, 700);
  };

  // Timer logic
  useEffect(() => {
    if (isGameOver) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0 || lifelines === 0) {
      setIsGameOver(true);
    }

    if (timeLeft === 4) {
      playSound(beepAudio);
    }

    return () => clearInterval(timer);
  }, [timeLeft, lifelines ,isGameOver]);

  
  const handleMove = (newRow, newCol) => {
    // Movement guards
    if (isQuestionModalOpen || isGameOver) return;

    // Destination check (cell 5)
    if (mazeLayout[newRow][newCol] === 5) {
      setScore((prevScore) => prevScore + 90);
      setIsGameOver(true);
      return;
    }

    // Star query (cells 2, 3, 4)
    if ([2, 3, 4].includes(mazeLayout[newRow][newCol])) {
      getQuestion(mazeLayout[newRow][newCol]);
    }

    setRatPosition({ row: newRow, col: newCol });
  };

  const contextValue = {
    endGame,
    setGameStarted,
    ratPosition,
    lifelines,
    score,
    easycnt,
    setEasycnt,
    mediumcnt,
    setMediumcnt,
    hardcnt,
    setHardcnt,
    timeLeft,
    isGameOver,
    setIsGameOver,
    mazeLayout,
    handleMove,
    getQuestion,             
    isQuestionModalOpen,     
    currentQuestion,         
    handleAnswerSubmission,  
    numRows,
    numCols,
    showBackButton,
    setShowBackButton,
    diff,
    setdiff,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};
