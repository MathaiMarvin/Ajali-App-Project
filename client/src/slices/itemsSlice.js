import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: async (state, action) => {
      try {
        const { title, description, image, video } = action.payload;

        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description, image, video }),
        });

        const newItem = await response.json();

        state.push(newItem);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;
