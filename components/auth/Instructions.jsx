import React from 'react';

export const Instructions = () => (
  <section className="instructions-panel">
    <div className="instructions-content space-y-2">
      <p className="!mt-0 text-xs font-semibold uppercase tracking-[0.35em] text-[#aeb3bf]">APS presents</p>
      <h2>Game Instructions</h2>

      <p><strong>Objective:</strong> Guide the astronaut through the maze to reach the destination, collecting stars by answering questions along the way. Choose the optimal path to maximize your star count and reach the end within the time limit.</p>

      <p><strong>How to Play:</strong></p>
      <p>1. Use the <strong>arrow keys</strong> to move the astronaut up, down, left, or right within the maze.</p>
      <p>2. On some paths, you’ll encounter questions:</p>

      <ul className="list-none pl-3 space-y-1">
        <li><strong>1 Easy Question :</strong> Awards <strong>10 Points</strong></li>
        <li><strong>1 Medium Question:</strong> Awards <strong>20 Points</strong></li>
        <li><strong>1 Hard Question:</strong> Awards <strong>30 Points</strong></li>
        <li><strong>Reaching Destination:</strong> Awards <strong>90 Points</strong></li>
      </ul>

      <p>3. The maze has multiple paths leading to the destination. Choose your path wisely to reach the destination with the highest possible star count.</p>

      <p><strong>Game Rules:</strong></p>
      <p>1. You have a total of <strong>10 minutes</strong> to complete the maze.</p>
      <p>2. Your spacecraft starts with <strong>100% Vitality</strong>. Each wrong answer depletes one-third of your spacecraft vitality. Game over if all vitality is lost before reaching the destination.</p>

      <p><strong>Goal:</strong> Complete the maze in the shortest time, maximize your star count, and make it to the end without completely depleting your spacecraft vitality!</p>
    </div>
  </section>
);
