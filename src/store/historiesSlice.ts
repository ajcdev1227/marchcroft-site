// historiesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchHistories = createAsyncThunk(
  'histories/fetchHistories',
  async (locale: string, { rejectWithValue }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/histories?locale=${locale}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log('Data: ', data.data, 'Locale: ', locale)
    return data?.data;
  }
);

const historiesSlice = createSlice({
    name: 'histories',
    initialState: {
        workHistory: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHistories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHistories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.workHistory = action.payload; // Assuming payload.data is an array
            })
            .addCase(fetchHistories.rejected, (state, action) => {
                state.status = 'failed';
                // state.error = action.error.message;
            });
    },
    reducers: {}
});

// export const selectHistories = (state) => state.histories;
export default historiesSlice.reducer;
