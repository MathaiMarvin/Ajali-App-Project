//import function from Redux toolkit
import {createSlice} from '@reduxjs/toolkit';

//Define initial state object
const initialState = {
    items: [],
    loading: false,
    error: null,
};

// Define itemsSlice by calling createSlice
// Twoactions have been defined here, addItem-adds new item to the items array
// removeItem-removes an item with the specified id
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
         state.items.push(action.payload);   
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
});

//export the actions and reducer from itemsSlice
export const {addItem, removeItem} = itemsSlice.actions;
export default itemsSlice.reducer;