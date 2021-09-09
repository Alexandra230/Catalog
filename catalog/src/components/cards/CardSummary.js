import React from 'react';
import moment from 'moment';

const CardSummary = ({ card }) => {
  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3">
        <img className="img-fluid" src={card.image} />

        <span className="card-title">{card.title}</span>
        <p className="card-text">{card.content}</p>
        <p>{card.cost}&#8372;</p>
        <p className="grey-text">{moment(card.createAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default CardSummary;
