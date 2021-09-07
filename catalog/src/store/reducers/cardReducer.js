const initState = {
  cards: [
    {
      id: '1',
      //file: 'C:\\fakepath\\20180922_114713.mp4',
      title: 'SSSSS',
      content: 'bla bla bla bla bla0',
    },
    {
      id: '2',
      //file: 'C:\\fakepath\\20180922_114713.mp4',
      title: 'DDD',
      content: 'bla bla bla bla bla0',
    },
    {
      id: '3',
      //file: 'C:\\fakepath\\20180922_114713.mp4',
      title: 'BBB',
      content: 'bla bla bla bla bla0',
    },
  ],
};

const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      console.log('create card', action.card);
      return state;
    case 'CREATE_CARD_ERROR':
      console.log('create card error', action.err);
      return state;
    default:
      return state;
  }
};

export default cardReducer;
