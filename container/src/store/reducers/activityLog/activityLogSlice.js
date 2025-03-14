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
    userActivityLogData : [
        {
          username: "JohnDoe",
          activity: "Successfully logged in",
          performedBy: null,
          time: "5 mins ago",
          logId: "1",
        },
        {
          username: "JohnDoe",
          activity: "Viewed dashboard",
          performedBy: null,
          time: "7 mins ago",
          logId: "2",
        },
        {
          username: "JohnDoe",
          activity: "Updated profile information",
          performedBy: "JohnDoe",
          time: "15 mins ago",
          logId: "3",
        },
        {
          username: "JohnDoe",
          activity: "Uploaded a file 'invoice.pdf'",
          performedBy: "JohnDoe",
          time: "25 mins ago",
          logId: "4",
        },
        {
          username: "JohnDoe",
          activity: "Downloaded report 'summary.xlsx'",
          performedBy: "JohnDoe",
          time: "30 mins ago",
          logId: "5",
        },
        {
          username: "JohnDoe",
          activity: "Changed password",
          performedBy: "JohnDoe",
          time: "40 mins ago",
          logId: "6",
        },
        {
          username: "JohnDoe",
          activity: "Created a new project 'Marketing'",
          performedBy: "JohnDoe",
          time: "50 mins ago",
          logId: "7",
        },
        {
          username: "JohnDoe",
          activity: "Added a new team member 'JaneSmith'",
          performedBy: "JohnDoe",
          time: "55 mins ago",
          logId: "8",
        },
        {
          username: "JohnDoe",
          activity: "Removed a team member 'TestUser'",
          performedBy: "JohnDoe",
          time: "1 hour ago",
          logId: "9",
        },
        {
          username: "JohnDoe",
          activity: "Logged out",
          performedBy: null,
          time: "1 hour ago",
          logId: "10",
        },
      ]
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
            state.userActivityLogData = [];
        }
    },
});

export const { setActivityLogData, clearActivityLogData } = activityLogSlice.actions;

export default activityLogSlice.reducer;