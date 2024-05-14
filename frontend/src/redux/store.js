import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commonApi } from './apiServices/commonApi';
import { setupListeners } from '@reduxjs/toolkit/query'
import globalSlice from './slices/globalSlice';


const rootReducer = combineReducers({
    [commonApi.reducerPath]: commonApi.reducer,
    global: globalSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(commonApi.middleware),
    preloadedState: {},
    devTools: true,
});
setupListeners(store.dispatch);

export default store;
