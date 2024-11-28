import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async thunk to fetch the service navigation
export const fetchServiceNavigation = createAsyncThunk(
  'serviceNav/fetchServiceNavigation',
  async (locale: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services?filters[onNavDisplay]=true&locale=${locale}`,
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
      console.log('service navigation', data);

      return data?.data; // Return the entire data array
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// Create a slice for service navigation
const serviceNavSlice = createSlice({
  name: 'serviceNav',
  initialState: {
    serviceNavContent: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceNavigation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceNavigation.fulfilled, (state, action) => {
        state.loading = false;
        state.serviceNavContent = action.payload;
        // state.error = null;
      })
      .addCase(fetchServiceNavigation.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
      });
  },
});

// Selectors for Service Navigation Content
export const selectGroupedServiceNav = (state: any) => {
    // Filter items where onNavDisplay is true and group by category
    const filteredItems = state.serviceNav.serviceNavContent?.filter(
      (item: any) => item.attributes.onNavDisplay === true
    );
  
    // Group items by category
    const groupedByCategory = filteredItems?.reduce((acc: any, item: any) => {
      const category = item.attributes.category || 'Uncategorized'; // default to 'Uncategorized' if no category
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item?.attributes);
      return acc;
    }, {});
  
    return groupedByCategory;
  };
  
export default serviceNavSlice.reducer;
