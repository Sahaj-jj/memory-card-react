/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function Card({
  name, id, image, handleClick,
}) {
  const handleCardClick = () => {
    handleClick(id);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={image} alt="character" />
      <div className="name">
        {name}
      </div>
    </div>
  );
}

export default Card;
