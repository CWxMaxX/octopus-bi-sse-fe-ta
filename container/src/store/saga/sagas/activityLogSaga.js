
import getUserLogs from "../../../api/userLogApi";
import { fetchActivityLogData, fetchActivityLogDataFailure, fetchActivityLogDataSuccess } from "../../reducers/activityLog/activityLogSlice";

import { call, put, takeLatest } from "redux-saga/effects";


//ActivityLog
// Worker Saga
function* fetchActivityLogSaga() {
  try {
    const data = yield call(getUserLogs);
    yield put(fetchActivityLogDataSuccess(data)); // Dispatch success action
  } catch (error) {
    yield put(fetchActivityLogDataFailure(error.message)); // Dispatch failure action
  }
}

// Watcher Saga
export function* watchActivityLogSaga() {
  yield takeLatest(fetchActivityLogData.type, fetchActivityLogSaga);
}

