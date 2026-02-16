import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLogs = createAsyncThunk(
    'logs/fetchLogs',
     async () => {
         await new Promise(resolve => setTimeout(resolve, 1000));
         return [
  { id: 1, activity: "Driving:", carbon: 2 },
  { id: 2, activity: "Flying:", carbon: 5 },
  { id: 3, activity: "Electricity Usage:", carbon: 3 },
  { id: 4, activity: "Cycling:", carbon: 0 },
  { id: 5, activity: "Air conditioner:", carbon: 4 },
  { id: 6, activity: "Rockets:", carbon: 7 },
];});
const logsSlice = createSlice({
    name: 'logs',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLogs.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLogs.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchLogs.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }});
    export default logsSlice.reducer;