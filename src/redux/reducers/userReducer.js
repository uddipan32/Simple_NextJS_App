import axios from 'axios'
import { createAsyncThunk, createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk(
  "stores/users", async (token, thunkAPI) => {
      try {
          const response = await axios.get('/api/users');
          return response.data;
        } catch (error) {
          console.log(error)
          return thunkAPI.rejectWithValue({ error: error.message });
        }
});

const userSlice = createSlice({
   name: "userData",
   initialState: {
    userData: [],
      loading: "idle",
      error: "",
   },
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchUser.pending, (state) => {
         state.userData = [];
          state.loading = "loading";
      });
      builder.addCase(
        fetchUser.fulfilled, (state, { payload }) => {
            state.userData = payload;
            state.loading = "loaded";
      });
      builder.addCase(
        fetchUser.rejected,(state, action) => {
            state.userData = "error";
            state.error = action.error.message;
      });
   }
});


export const selectUser = createSelector(
  (state) => ({
    userData: state.userData,
    loading: state.userData.loading,
  }), (state) =>  state
);

export default userSlice;