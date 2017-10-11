import createReducer from 'create-reducer-map'
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
} from 'constants'

/* actions */
export const fetchUser = (payload, meta) => ({ type: FETCH_USER, payload, meta })
export const fetchUserSuccess = (payload) => ({ type: FETCH_USER_SUCCESS, payload })
export const fetchUserError = (payload) => ({ type: FETCH_USER_ERROR, payload })
export const setDraftId = (payload) => ({ type: SET_DRAFT_ID, payload })
export const setPrices = (payload) => ({ type: SET_PRICES, payload }) 
export const sendEmail = (payload) => ({ type: SEND_EMAIL, payload })
export const setUserEmail = (payload) => ({ type: SET_USER_EMAIL, payload }) 
export const emailStatus = (payload) => ({ type: EMAIL_STATUS, payload })
export const logout = (meta) => ({ type: LOG_OUT, meta }) 
export const defaultUserState = () => ({ type: DEFAUTL_USER_STATE }) 

/* reducers */
const initialState = {
  data: { token: '', userId: '' },
  error: '',
  emailStore: { statusText: '', email: '' },
  draftId: '',
  prices: []
}

export default createReducer(initialState, {
  [FETCH_USER_SUCCESS]: (state, payload) => {
    return { ...state, data: payload }
  },
  [FETCH_USER_ERROR]: (state, payload) => {
    return { data: initialState.data, error: payload }
  },
  [SET_PRICES]: (state, payload) => {
    return { ...state, prices: payload }
  },
  [SET_DRAFT_ID]: (state, payload) => {
    return { ...state, draftId: payload }
  },
  [SET_USER_EMAIL]: (state, payload) => {
    return { ...state, emailStore: { ...state.emailStore, email: payload }}
  },
  [EMAIL_STATUS]: (state, payload) => {
    return { ...state, emailStore: { ...state.emailStore, statusText: payload }}
  },
  [DEFAUTL_USER_STATE]: () => ({ ...initialState })
})
