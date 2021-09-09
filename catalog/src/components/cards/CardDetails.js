import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const CardDetails = (props) => {
  const { card, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (card) {
    return (
      <div className="container section card-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <img className="img-fluid" src={card.image} />
            <span className="card-title">Item name: {card.title}</span>
            <p>About: {card.content}</p>
            <p>Cost: {card.cost}&#8372;</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{moment(card.createAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading cards...</p>
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
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }]),
)(CardDetails);
