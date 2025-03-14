import { all } from "redux-saga/effects";
import { watchDashboardSaga } from "./sagas/dashboardSaga";
import { watchActivityLogSaga } from "./sagas/activityLogSaga";

// Root Saga
export default function* rootSaga() {
  yield all([
    watchDashboardSaga(),
    watchActivityLogSaga(),
  ]);
}
