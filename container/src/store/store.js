import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducers/dashboard/dashboardSlice";
import activityLogReducer from './reducers/activityLog/activityLogSlice'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        activityLog: activityLogReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;