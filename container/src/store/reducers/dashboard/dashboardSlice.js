import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statCardData: {
    dailyActiveUsers: {
      count: 1300,
      date: "18 Mar 2020",
    },
    monthlyActiveUsers: {
      count: 6003,
      date: "18 Mar 2020",
    },
    dailyPerActiveUser: {
      count: 230,
      date: "18 Mar 2020",
    },
  },
  userActivityLineChartData: {
    yAxis: [
      4500, 5200, 6100, 7000, 6800, 7200, 8100, 9000, 8700, 9400, 10200, 11000,
    ],
    xAxis: [
      "1 Sep",
      "2 Sep",
      "3 Sep",
      "4 Sep",
      "5 Sep",
      "6 Sep",
      "7 Sep",
      "8 Sep",
      "9 Sep",
      "10 Sep",
      "11 Sep",
      "12 Sep",
    ],
  },
  dailyActiveUsersPieChartData: {
    chartData: [
      { name: "Staff", y: 151 },
      { name: "Students", y: 200 },
      { name: "Students", y: 200 },
      { name: "Other", y: 200 },
    ],
    countsByAuthMethod: [
      { name: "Microsoft", count: 1000 },
      { name: "Internal", count: 1000 },
      { name: "Email", count: 1000 },
    ],
  },
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setDashboardData: (state, action) => {
            state.statCardData = action.payload.statCardData;
            state.userActivityLineChartData = action.payload.userActivityLineChartData;
            state.dailyActiveUsersPieChartData = action.payload.dailyActiveUsersPieChartData;
        },
        clearDashboardData: (state) => {
            state.statCardData = {};
            state.userActivityLineChartData = {};
            state.dailyActiveUsersPieChartData = {};
        }
    }
});


export const { setDashboardData, clearDashboardData } = dashboardSlice.actions;
export default dashboardSlice.reducer;