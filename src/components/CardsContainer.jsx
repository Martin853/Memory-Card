import React, { useState } from 'react';
import { Card } from './Card';

export const CardsContainer = () => {
  const [cards, setCards] = useState(['Z', 'Q', 'C', 'D', 'A', 'B', 'M', 'E']);

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

  return (
    <div className="w-full h-fit mb-8 bg-gray-300 grid grid-cols-4 place-items-center py-10 gap-8">
      {cards.map((title) => {
        return <Card title={title} cards={cards} shuffleCards={shuffleCards} />;
      })}
    </div>
  );
};
