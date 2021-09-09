import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import CardList from '../cards/CardList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
class Dashboard extends Component {
  render() {
    const { cards, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <CardList cards={cards} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.firestore.ordered.cards,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'cards' }]),
)(Dashboard);
