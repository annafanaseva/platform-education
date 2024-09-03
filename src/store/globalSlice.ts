import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
  language: string;
}

const initialState: GlobalState = {
  language: 'ru', //TODO взять из lc
};

export const changeLanguageSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<'ru' | 'en'>) => {
      //TODO сделать выбор определенных строк
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = changeLanguageSlice.actions;

export default changeLanguageSlice.reducer;
