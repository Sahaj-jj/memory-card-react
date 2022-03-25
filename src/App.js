import React, { useState } from 'react';
import Card from './components/Card';
import shuffleArray from './utils';

function App() {
  const cardsArray = [
    { name: 'First', id: crypto.randomUUID() },
    { name: 'Second', id: crypto.randomUUID() },
    { name: 'Third', id: crypto.randomUUID() },
  ];

  const [cards, setCards] = useState(cardsArray);

  const handleCardClick = () => {
    setCards(shuffleArray([...cards]));
  };

  const renderCards = () => cards.map((card) => (
    <Card name={card.name} key={card.id} handleClick={handleCardClick} />
  ));

  return (
    <div>
      {renderCards()}
    </div>
  );
}

export default App;
