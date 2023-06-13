import React from 'react';
import { Header } from './components/Header';
import { Score } from './components/Score';
import { CardsContainer } from './components/CardsContainer';

export const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <Score />
      <CardsContainer />
    </div>
  );
};
