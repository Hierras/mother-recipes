import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import loginSlice from './registry.js';
import searchSlice from './search.jsx';
import modalSlice from './modal.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';



// // storage
export const store = configureStore({
    reducer: {
       loginSlice,
       searchSlice,
       modalSlice
    },
});