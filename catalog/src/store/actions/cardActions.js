export const createCard = (card) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('cards')
      .add({
        ...card,

        authorId: authorId,
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
