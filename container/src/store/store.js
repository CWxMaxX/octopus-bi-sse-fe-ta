import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducers/dashboard/dashboardSlice";
import activityLogReducer from './reducers/activityLog/activityLogSlice'

const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        activityLog: activityLogReducer,
    },
});

export default store;