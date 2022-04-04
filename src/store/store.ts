import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSliceReducer from './slices/usersSlice';
import postsSliceReducer from './slices/postsSlice';

const rootReducer = combineReducers({
    usersSliceReducer,
    postsSliceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }))
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];