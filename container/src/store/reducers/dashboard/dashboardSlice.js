import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statCardData : {
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
    userActivityLineChartData : {},
    dailyActiveUsersPieChartData : {},
}

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