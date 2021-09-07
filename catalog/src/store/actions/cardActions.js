export const createCard = (card) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('cards')
      .add({
        ...card,
        authorFirstName: 'Alex',
        authorLastName: 'Lunhol',
        authorId: 12345,
        createAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_CARD', card });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_CARD_ERROR', err });
      });
  };
};
