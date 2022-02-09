import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userReducer from './user-reducer/user.reducer';

const reducers = combineReducers({
  userReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = any> = ThunkAction<ReturnType, RootState, null, Action<string>>;
