import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async thunk to fetch the privacy policy
export const fetchPrivacyPolicy = createAsyncThunk(
  'privacy/fetchPrivacyPolicy',
  async (locale: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/privacies?filters[title]=privacy&filters[title]=terms-of-service&filters[title]=cookie-policy&locale=${locale}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('privacy', data);

      return data?.data; // Return the entire data array
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// Create a slice for privacy policy
const privacySlice = createSlice({
  name: 'privacy',
  initialState: {
    privacyContent: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrivacyPolicy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrivacyPolicy.fulfilled, (state, action) => {
        state.loading = false;
        state.privacyContent = action.payload;
        // state.error = null;
      })
      .addCase(fetchPrivacyPolicy.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
      });
  },
});

// Selectors for Cookie Policy, Terms of Service, and Privacy Policy
export const selectCookiePolicy = (state: any) =>
  state.privacy.privacyContent?.find((item: any) => item.attributes.title === 'cookie-policy')?.attributes.json;

export const selectTermsOfService = (state: any) =>
  state.privacy.privacyContent?.find((item: any) => item.attributes.title === 'terms-of-service')?.attributes.json;

export const selectPrivacyPolicy = (state: any) =>
  state.privacy.privacyContent?.find((item: any) => item.attributes.title === 'privacy')?.attributes.json;

export default privacySlice.reducer;
