import authReducer from './authReducer';
import cardReducer from './cardReducer';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  card: cardReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
