import React, { useState } from 'react';
import { Header } from './components/Header';
import { Score } from './components/Score';
import { CardsContainer } from './components/CardsContainer';

export const App = () => {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className=" overflow-x-hidden">
      <Header />
      <Score score={score} highscore={highscore} />
      <CardsContainer
        setScore={setScore}
        score={score}
        setHighscore={setHighscore}
        highscore={highscore}
      />
    </div>
  );
};
