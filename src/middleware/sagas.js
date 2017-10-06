import { call, put, takeEvery, select } from 'redux-saga/effects'
import { FETCH_USER,
  LOG_OUT,
  DEFAUTL_USER_STATE,
  SEND_EMAIL
} from 'constants/index'
import { fetchUserSuccess,
  fetchUserError,
  defaultUserState,
  setDraftId,
  setPrices,
  emailStatus
} from 'reducers/user'
import { start_progress, stop_progress } from 'reducers/progress'
import { authUser, getDrafts, logoutUser, url, requestCreator } from 'utils/apiClient'
import { tokenState, draftState, emailSelector } from 'utils/helpers'

const data = { "language" : "nl",
  "partnerReference": [
        {
           "key": "salesId",
            "value":"12345678"
        },       
        {
          "key":"productId",
            "value":"235689"
        }     
    ],
    "policyholder": {
      "address": {
          "city": "Bruxelles",
          "country": "BE",
          "number": "44",
          "street": "Rue des palais"
      },
      "billingAddress": {
          "city" : "Bruxelles",
            "country" : "BE",
            "number" : "45",
            "street" : "Rue   des   palais"                                         
      },
      "person": {
        "birthDate": "1984-12-16",
        "firstName": "John",
        "lastName": "Doe",
        "title": "Mr"
      },
      "contact": {
            "email": "admin@example.com",
            "phone": "+3226592323"
      }        
    },
    "risk": {
      "drivers": [
            {
                "contact": {  
                  "email": "john.doe@example.com",
                  "phone": "+32478595959"    
                }, 
                "numberOfClaimsLast5Years": "0",
                "person" :  {
            "birthDate": "1984-12-16",
            "firstName": "John",
            "lastName": "Doe",
            "title": "Mr"
                }
           }
        ],
        "vehicle" :  {
            "cascoInsurerCompany": "AXA Belgium", 
            "details": {
                "code": "123470",
                "codeType": "NAT",
                "country": "BE",
                "vehicleType": "10"
            },        
            "firstRegistrationYear" :"2017",
            "identification":  {
                "registration": {
                    "country": "BE",
                    "plate": "1-ABC-123"
                }
            },               
            "invoice" :   {
                "isPurchasedInLast6Months": true,
                "purchasedPriceIncludingVat": {
                    "currency": "EUR",
                    "value" : 1500000
               }
            }
        }    
    },
    "terms":   {
      "claimLimit":  {
        "currency":  "EUR",
        "value":  1600000   
      },
        "requestPaperCopy": false,
        "startDate": "2017-12-17",
        "variant": "GAP60"
    }        
}

const dataPrice = {
  "partnerReference": [
    { "key": "salexId",
      "value": "12345678"
    }
  ]
}

const emailData = {
  "partnerReference": [
    {
      "key": "salesId",
      "value": "12345678"
    }, {
      "key": "productId",
      "value": "235689"
    }  
  ],            
  "transport": "EMAIL"
}

function* fetchUser(action) {
  yield put(start_progress())
  try {
    const auth = yield call(requestCreator, action.payload, url.auth)
    yield put(fetchUserSuccess(auth.data))
    const result = yield call(requestCreator, data, url.drafts)
    const { draftId } = result.data // draftId to store
    yield put(setDraftId(draftId))
    const price = yield call(requestCreator, dataPrice, url.prices(draftId))
    yield put(setPrices(price.data.prices))
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

function * sendEmail() {
  const draft = yield select(draftState)
  const { email } = yield select(emailSelector)
  debugger
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