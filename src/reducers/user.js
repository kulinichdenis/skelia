import { createAction, handleActions } from 'redux-actions'
import { 
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  LOG_OUT,
  DEFAUTL_USER_STATE,
  SEND_EMAIL,
  SET_PRICES,
  SET_DRAFT_ID,
  SET_USER_EMAIL,
  EMAIL_STATUS
} from 'constants/index'

/* actions */
export const fetchUserSuccess = createAction(FETCH_USER_SUCCESS)
export const fetchUserError = createAction(FETCH_USER_ERROR)
export const setDraftId = createAction(SET_DRAFT_ID)
export const setPrices = createAction(SET_PRICES)
export const sendEmail = createAction(SEND_EMAIL)
export const setUserEmail = createAction(SET_USER_EMAIL)
export const emailStatus = createAction(EMAIL_STATUS)
export const defaultUserState = createAction(DEFAUTL_USER_STATE)
export const logout = (meta) => ({ type: LOG_OUT, meta }) 
export const fetchUser = (payload, meta) => ({ type: FETCH_USER, payload, meta })

/* reducers */
const initialState = {
  data: { token: '', userId: '' },
  error: '',
  emailStore: { statusText: '', email: '' },
  draftId: '',
  prices: []
}

export default handleActions({
  [FETCH_USER_SUCCESS]: (state, { payload }) => {
    return { ...state, data: payload }
  },
  [FETCH_USER_ERROR]: (state, { payload }) => {
    return { data: initialState.data, error: payload }
  },
  [SET_PRICES]: (state, { payload }) => {
    return { ...state, prices: payload }
  },
  [SET_DRAFT_ID]: (state, { payload }) => {
    return { ...state, draftId: payload }
  },
  [SET_USER_EMAIL]: (state, { payload }) => {
    return { ...state, emailStore: { ...state.emailStore, email: payload }}
  },
  [EMAIL_STATUS]: (state, { payload }) => {
    return { ...state, emailStore: { ...state.emailStore, statusText: payload }}
  },
  [DEFAUTL_USER_STATE]: () => ({ ...initialState })
}, initialState)
