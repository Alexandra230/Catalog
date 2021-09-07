import React from 'react';

const CardSummary = ({ card }) => {
  return (
    <div className="card  card-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{card.title}</span>
        <p>Posted by sasha</p>
        <p className="grey-text">7th September, 6pm</p>
      </div>
    </div>
  );
};

export default CardSummary;
