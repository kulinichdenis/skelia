import createReducer from 'create-reducer-map'
import { 
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  LOG_OUT,
  DEFAUTL_USER_STATE
} from 'constants/index'

/* actions */
export const fetchUser = (payload, meta) => ({ type: FETCH_USER, payload, meta })
export const fetchUserSuccess = (payload) => ({ type: FETCH_USER_SUCCESS, payload })
export const fetchUserError = (payload) => ({ type: FETCH_USER_ERROR, payload })
export const logout = (meta) => ({ type: LOG_OUT, meta }) 
export const defaultUserState = () => ({ type: DEFAUTL_USER_STATE }) 

/* reducers */
const initialState = {
  data: { token: null, userId: null },
  error: ''
}

export default createReducer(initialState, {
  [FETCH_USER_SUCCESS]: (state, payload) => {
    return { ...state, data: payload }
  },
  [FETCH_USER_ERROR]: (state, payload) => {
    return { data: initialState.data, error: payload }
  },
  [DEFAUTL_USER_STATE]: () => ({ ...initialState })
})
