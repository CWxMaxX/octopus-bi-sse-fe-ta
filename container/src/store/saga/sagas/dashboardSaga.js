import getDashboardData from "../../../api/dashboardApi";
import {
  fetchDashboardData,
  fetchDashboardDataFailure,
  fetchDashboardDataSuccess,
} from "../../reducers/dashboard/dashboardSlice";

import { call, put, takeLatest } from "redux-saga/effects";



//Dashboard
// Worker Saga
function* fetchDashboardSaga() {
  try {
    const data = yield call(getDashboardData);
    yield put(fetchDashboardDataSuccess(data)); // Dispatch success action
  } catch (error) {
    yield put(fetchDashboardDataFailure(error.message)); // Dispatch failure action
  }
}

// Watcher Saga
export function* watchDashboardSaga() {
  yield takeLatest(fetchDashboardData.type, fetchDashboardSaga);
}

