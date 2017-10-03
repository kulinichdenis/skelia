import createReducer from 'create-reducer-map'
import { START_PROGRESS, STOP_PROGRESS } from 'constants/index' 

/* actions */
export const start_progress = () => ({ type: START_PROGRESS })
export const stop_progress = () => ({ type: STOP_PROGRESS })

/* reducers */
const initialState = {
  status: false
}

export default createReducer(initialState, {
  [START_PROGRESS]: () => ({ status: true }),
  [STOP_PROGRESS]: () => ({ status: false })
})
