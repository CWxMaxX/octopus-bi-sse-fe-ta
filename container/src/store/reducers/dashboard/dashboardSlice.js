import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    statCardData: {
      
    },
    userActivityLineChartData: {
      yAxis: [],
      xAxis: [],
    },
    dailyActiveUsersPieChartData: {
      chartData: [],
      countsByAuthMethod: [],
    },
  },
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardData: (state, action) => {
      state.data = action.payload;
      state.loading = true;
      state.error = null;
    },
    fetchDashboardData: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDashboardDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDashboardDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDashboardData,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,
  setDashboardData,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
