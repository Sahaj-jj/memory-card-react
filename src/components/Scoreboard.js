import React from 'react';

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score">{`Score : ${score}`}</div>
      <div className="best-score">{`Best Score : ${bestScore}`}</div>
    </div>
  );
}

export default Scoreboard;
