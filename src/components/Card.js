/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function Card({ name, id, handleClick }) {
  const handleCardClick = () => {
    handleClick(id);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div>
        {name}
      </div>
    </div>
  );
}

export default Card;
