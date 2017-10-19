import { createAction, handleActions } from 'redux-actions'
import { START_PROGRESS, STOP_PROGRESS } from 'constants/index' 

/* actions */
export const start_progress = createAction(START_PROGRESS)
export const stop_progress = createAction(STOP_PROGRESS)

/* reducers */
const initialState = {
  status: false
}

export default handleActions({
  [START_PROGRESS]: () => ({ status: true }),
  [STOP_PROGRESS]: () => ({ status: false })
}, initialState)
