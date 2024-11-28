import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';
import historiesReducer from './historiesSlice'; // Import the histories reducer
import privacyReducer from './privacySlice'; // Import the new privacy reducer
import workPageReducer from './workPageSlice';
import serviceNavReducer from './servicesNavSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
    histories: historiesReducer, // Add the histories reducer
    privacy: privacyReducer, // Add the privacy reducer
    workPage: workPageReducer,
    serviceNav: serviceNavReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
