import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const CardDetails = (props) => {
  const { card } = props;
  if (card) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{card.title}</span>
            <p>{card.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {card.authorFirstName} {card.authorLastName}
            </div>
            <div>7th September, 6am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const cards = state.firestore.data.cards;
  const card = cards ? cards[id] : null;
  return {
    card: card,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }]),
)(CardDetails);
