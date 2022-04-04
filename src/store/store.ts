import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSliceReducer from './slices/usersSlice';

const rootReducer = combineReducers({
    usersSliceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }))
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];