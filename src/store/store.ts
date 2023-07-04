import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PersonSlice } from "./features/personSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    person: PersonSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = () =>
  useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
