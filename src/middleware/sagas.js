import { call, put, takeEvery, select } from 'redux-saga/effects'
import { FETCH_USER, LOG_OUT, DEFAUTL_USER_STATE } from 'constants/index'
import { fetchUserSuccess, fetchUserError, defaultUserState } from 'reducers/user'
import { start_progress, stop_progress } from 'reducers/progress'
import { authUser, getDrafts, logoutUser } from 'utils/apiClient'
import { tokenFromUserData } from 'utils/helpers'

function* fetchUser(action) {
  yield put(start_progress())
  try {
    const auth = yield call(authUser, action.payload)
    yield put(fetchUserSuccess(auth.data))
    yield put(stop_progress())
    yield action.meta.push('/user')
  } catch(error) {
    yield put(fetchUserError('Problem with authorization, repeat please'))
    yield put(stop_progress())
  }
}

function* logout(action) {
  const token = yield select(tokenFromUserData)
  try {
    const result = yield call(logoutUser, token)
    yield put(defaultUserState())
    yield action.meta.push('/')
  } catch(error) {
    yield put(fetchUserError('Problem with logout'))
    yield action.meta.push('/')
  }
}

function* userSaga() {
  yield takeEvery(FETCH_USER, fetchUser)
  yield takeEvery(LOG_OUT, logout)
}

export default userSaga