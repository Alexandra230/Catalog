import React from 'react';
import CardSummary from './CardSummary';
import { Link } from 'react-router-dom';

const CardList = ({ cards }) => {
  return (
    <div className="row">
      <div className="col">
        {cards &&
          cards.map((card) => {
            return (
              <Link to={'/card/' + card.id} key={card.id}>
                <CardSummary card={card} />;
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
