import React from 'react';

export const Card = (props) => {
  const {
    cards,
    title,
    selected,
    shuffleCards,
    setScore,
    score,
    setHighscore,
    highscore,
    resetCards,
    id,
  } = props;

  const handleClick = () => {
    if (!selected) {
      shuffleCards(
        cards.map((card) =>
          card.id === id ? { ...card, selected: true } : card
        )
      );
      setScore((prevScore) => prevScore + 1);
    } else {
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
      resetCards();
      shuffleCards(cards.map((card) => ({ ...card, selected: false })));
    }
  };

  return (
    <div
      className={`w-60 h-60 bg-teal-600 flex justify-center items-center hover:bg-teal-700 hover:cursor-pointer transition-all ease-linear duration-200 select-none ${
        selected ? 'selected' : ''
      }`}
      onClick={handleClick}
    >
      <h1 className="font-montserrat text-6xl text-white">{title}</h1>
    </div>
  );
};
