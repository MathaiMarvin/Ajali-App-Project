// This is where the redux store is created
// Necessary functions for use need to be imported from Redux toolkit
// In this case we need to import configureStore to help in configuring our store
import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemsSlice';


// The rootReducer combines reducers into a single reducer function that can be passed to the Redux createStore function
// It takes an object as an argument; keys are names of the state and values are the reducer functions for each slice
// The itemsReducer has been included as a property of the root reducer
const rootReducer = combineReducers({
    items: itemsReducer,
    // This is where you can place other reducers
});

// Next up we create our Redux store using configureStore
const store = configureStore({
    reducer: rootReducer,
});

export default store

