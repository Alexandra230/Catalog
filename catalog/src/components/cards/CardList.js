import React from 'react';
import CardSummary from './CardSummary';
import { Link } from 'react-router-dom';

const CardList = ({ cards }) => {
  return (
    <div className="card-list section">
      {cards &&
        cards.map((card) => {
          return (
            <Link t={'/card/' + card.id}>
              <CardSummary card={card} key={card.id} />;
            </Link>
          );
        })}
    </div>
  );
};

export default CardList;
