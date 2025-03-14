import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    statCardData: {},
    userActivityLogData: [],
  },
  loading: false,
  error: null,
};

const activityLogSlice = createSlice({
  name: "activityLog",
  initialState,
  reducers: {
    setActivityLogData: (state, action) => {
      state.data = action.payload;
      state.loading = true;
      state.error = null;
    },
    fetchActivityLogData: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchActivityLogDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchActivityLogDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setActivityLogData,
  fetchActivityLogData,
  fetchActivityLogDataSuccess,
  fetchActivityLogDataFailure,
} = activityLogSlice.actions;

export default activityLogSlice.reducer;
