import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reduser';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'development',
});

const persistor = persistStore(store);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { store, persistor };
