import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import shuffleArray from './utils';

function App() {
  const cardsArray = [
    { name: 'First', id: crypto.randomUUID(), isClicked: false },
    { name: 'Second', id: crypto.randomUUID(), isClicked: false },
    { name: 'Third', id: crypto.randomUUID(), isClicked: false },
    { name: 'Fourth', id: crypto.randomUUID(), isClicked: false },
    { name: 'Fifith', id: crypto.randomUUID(), isClicked: false },
    { name: 'Sixth', id: crypto.randomUUID(), isClicked: false },
  ];

  const [cards, setCards] = useState(cardsArray);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetScore = () => {
    setScore(0);
    setCards(shuffleArray([...cardsArray]));
  };

  const handleCardClick = (cardId) => {
    if (cards.find((card) => card.id === cardId).isClicked) { resetScore(); } else {
      setScore(score + 1);
      setBestScore(Math.max(score + 1, bestScore));
      setCards(shuffleArray([...cards])
        .map((card) => (card.id === cardId ? { ...card, isClicked: true } : card)));
    }
  };

  const renderCards = () => cards.map((card) => (
    <Card name={card.name} key={card.id} id={card.id} handleClick={handleCardClick} />
  ));

  return (
    <div>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="cards-container">
        {renderCards()}
      </div>
    </div>
  );
}

export default App;
