import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer as form } from 'redux-form'
import sagas from 'middleware/sagas'
import { user, progress } from 'reducers'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({ user, progress, form }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas)