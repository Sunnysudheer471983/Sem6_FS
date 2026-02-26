import {configureStore} from '@reduxjs/toolkit';
import logsReducer from './store/logsSlice';

const store = configureStore({
    reducer: {
        logs: logsReducer,
    },
});

export default store;
