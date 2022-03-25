import React from 'react';
import Scoreboard from './Scoreboard';

function Header({ score, bestScore }) {
  return (
    <div className="header">
      <div className="heading">
        <div className="title">Rick And Morty</div>
        <div className="sub-heading">Memory Game</div>
      </div>
      <Scoreboard score={score} bestScore={bestScore} />
    </div>
  );
}

export default Header;
