import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import fetchImages from './fetchImages';
import { shuffleArray, sampleArrayFromRange } from './utils';

function App() {
  const url = 'https://rickandmortyapi.com/api/character';
  const idArray = sampleArrayFromRange(1, 825, 10);
  const cardsArray = [];

  const [cards, setCards] = useState(cardsArray);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(async () => {
    const cardsList = await fetchImages(url, idArray);
    setCards(cardsList.map((character) => ({
      name: character.name,
      id: character.id,
      image: character.image,
      isClicked: false,
    })));
  }, []);

  const reset = () => {
    setScore(0);
    setCards(shuffleArray([...cards])
      .map((card) => ({ ...card, isClicked: false })));
  };

  const handleCardClick = (cardId) => {
    if (cards.find((card) => card.id === cardId).isClicked) { reset(); } else {
      setScore(score + 1);
      setBestScore(Math.max(score + 1, bestScore));
      setCards(shuffleArray([...cards])
        .map((card) => (card.id === cardId ? { ...card, isClicked: true } : card)));
    }
  };

  const renderCards = () => cards.map((card) => (
    <Card
      name={card.name}
      key={card.id}
      id={card.id}
      image={card.image}
      handleClick={handleCardClick}
    />
  ));

  return (
    <div className="main">
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="cards-container">
        {renderCards()}
      </div>
    </div>
  );
}

export default App;
