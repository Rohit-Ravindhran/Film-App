import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers';

// Redux Persist Config
const persistConfig = {
  // Root?
  key: 'safeTapp',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  // whitelist: ['authReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['user', 'down'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
