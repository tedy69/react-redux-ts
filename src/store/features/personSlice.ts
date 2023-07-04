import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Person {
  id: number;
  name: string;
  email: string;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.persons.push({
        id: state.persons.length + 1,
        name: action.payload.name,
        email: action.payload.email,
      });
    },
  },
});

export const { addPerson } = PersonSlice.actions;

export default PersonSlice.reducer;
