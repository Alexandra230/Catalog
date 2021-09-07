import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import CardList from '../cards/CardList';
import { connect } from 'react-redux';
import { compose } from 'redux';
class Dashboard extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4">
            <CardList cards={cards} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.firestore.ordered.cards,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'cards' }]),
)(Dashboard);
