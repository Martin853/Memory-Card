import React from 'react';

export const Score = (props) => {
  return (
    <div className="w-screen h-14 flex justify-around items-center">
      <h1 className="font-montserrat text-lg">Score: {props.score}</h1>
      <h1 className="font-montserrat text-lg">
        Highest Score: {props.highscore}
      </h1>
    </div>
  );
};
