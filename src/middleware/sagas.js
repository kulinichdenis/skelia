import { call, put, takeEvery, select } from 'redux-saga/effects'
import { FETCH_USER, LOG_OUT, DEFAUTL_USER_STATE, SEND_EMAIL } from 'constants/index'
import { fetchUserSuccess, fetchUserError, defaultUserState,
  setDraftId, setPrices, emailStatus } from 'reducers/user'
import { start_progress, stop_progress } from 'reducers/progress'
import { authUser, getDrafts, logoutUser, url, requestCreator } from 'utils/apiClient'
import { tokenSelector, draftSelector, emailSelector } from 'utils/helpers'
import { mainData, dataPrice, emailData } from 'utils/fakeData'
import history from 'utils/history'

function* fetchUser(action) {
  yield put(start_progress())
  try {
    const auth = yield call(requestCreator, action.payload, url.auth)
    yield put(fetchUserSuccess(auth.data))
    const result = yield call(requestCreator, mainData, url.drafts)
    const { draftId } = result.data
    yield put(setDraftId(draftId))
    const price = yield call(requestCreator, dataPrice, url.prices(draftId))
    yield put(setPrices(price.data.prices))
    yield put(stop_progress())
    yield history.push('/user')
  } catch(error) {
    yield put(fetchUserError('Problem with authorization, repeat please'))
    yield put(stop_progress())
  }
}

function* logout(action) {
  const token = yield select(tokenSelector)
  try {
    const result = yield call(logoutUser, token)
    yield put(defaultUserState())
    yield history.push('/')
  } catch(error) {
    yield put(fetchUserError('Problem with logout'))
    yield history.push('/')
  }
}

function * sendEmail() {
  const draft = yield select(draftSelector)
  const { email } = yield select(emailSelector)

  yield put(start_progress())
  try {
    const requestEmail = yield call(requestCreator, emailData, url.email(draft))
    if(requestEmail.status === 200 || requestEmail.statusTetx === 'OK' ) {
      yield put(emailStatus(`Your email: ${email} send success`))
    } else {
      yield put(emailStatus(`Your email: ${email} doesn't send`))  
    }
  } catch(error) {
    yield put(emailStatus(`Your email: ${email} doesn't send`))
  }
  yield put(stop_progress())
}


function* userSaga() {
  yield takeEvery(FETCH_USER, fetchUser)
  yield takeEvery(LOG_OUT, logout)
  yield takeEvery(SEND_EMAIL, sendEmail)
}

export default userSaga