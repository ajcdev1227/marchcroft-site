import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store';

// Define async thunk for fetching content
export const fetchWorkPageContent = createAsyncThunk(
  'workPage/fetchContent',
  async (locale: string) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/api/blogs?populate=image&populate=blogContent&pagination[pageSize]=100&sort[0]=date:desc`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }

    const data = await response.json();
    return data;
  }
);

// Create slice for WorkPage
const workPageSlice = createSlice({
  name: 'workPage',
  initialState: {
    workData: null as { src: string; title: string; content: string }[] | null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkPageContent.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWorkPageContent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.workData = action.payload.data;
      })
      .addCase(fetchWorkPageContent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export const selectWorkPageContent = (state: RootState) => state.workPage.workData;
export const selectWorkPageStatus = (state: RootState) => state.workPage.status;
export const selectWorkPageError = (state: RootState) => state.workPage.error;

export default workPageSlice.reducer;
