import React, { useState } from 'react';
import { Card } from './Card';

export const CardsContainer = (props) => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Z', selected: false },
    { id: 2, title: 'Q', selected: false },
    { id: 3, title: 'C', selected: false },
    { id: 4, title: 'D', selected: false },
    { id: 5, title: 'A', selected: false },
    { id: 6, title: 'B', selected: false },
    { id: 7, title: 'M', selected: false },
    { id: 8, title: 'E', selected: false },
  ]);

  const shuffleCards = (cards) => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }

    setCards(shuffledCards);
  };

  const resetCards = () => {
    const resetStateCards = cards.map((card) => ({
      ...card,
      selected: false,
    }));
    setCards(resetStateCards);
  };

  return (
    <div className="w-full h-fit mb-8 bg-gray-300 grid grid-cols-4 place-items-center py-10 gap-8">
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            selected={card.selected}
            cards={cards}
            shuffleCards={shuffleCards}
            setScore={props.setScore}
            score={props.score}
            setHighscore={props.setHighscore}
            highscore={props.highscore}
            resetCards={resetCards}
            id={card.id}
            key={card.id}
          />
        );
      })}
    </div>
  );
};
