import React, { useState } from 'react';

export const Card = (props) => {
  const [selected, setSelected] = useState(false);
  const shuffleCards = props.shuffleCards;
  const cards = props.cards;

  const handleClick = () => {
    shuffleCards(cards);
  };

  return (
    <div
      className=" w-60 h-60 bg-teal-600 flex justify-center items-center hover:bg-teal-700 hover:cursor-pointer transition-all ease-linear duration-200 select-none"
      onClick={handleClick}
    >
      <h1 className="font-montserrat text-8xl text-white">{props.title}</h1>
    </div>
  );
};
