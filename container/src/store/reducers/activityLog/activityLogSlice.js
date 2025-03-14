import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    statCardData : {
        dailyActiveUsers: {
          count: 1051,
          date: "18 Mar 2020",
        },
        monthlyActiveUsers: {
          count: 60032,
          date: "18 Mar 2020",
        },
        dailyPerActiveUser: {
          count: 23,
          date: "18 Mar 2020",
        },
      },
    userActivityLogData : {},
};

const activityLogSlice = createSlice({
    name: 'activityLog',
    initialState,
    reducers: {
        setActivityLogData: (state, action) => {
            state.statCardData = action.payload.statCardData;
            state.userActivityLogData = action.payload.userActivityLogData;
        },
        clearActivityLogData: (state) => {
            state.statCardData = {};
            state.userActivityLogData = {};
        }
    },
});

export const { setActivityLogData, clearActivityLogData } = activityLogSlice.actions;

export default activityLogSlice.reducer;