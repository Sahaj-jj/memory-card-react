/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function Card({ name, handleClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    handleClick();
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div>
        {isClicked ? `${name} is clicked` : `${name} is not clicked`}
      </div>
    </div>
  );
}

export default Card;
