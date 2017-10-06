import axios from 'axios'
import { pipe } from 'ramda'

const baseUrl = 'https://qover-test.apigee.net'
const APIKEY = 'vuRSkbbMpqujS0F2yhkuFnDVJ32znJIN'

const apiKey = (basePath) => `${basePath}?apikey=${APIKEY}` 
const auth = (base) => `${base}/authentication/authenticate`
const drafts = (base) => `${base}/be/motor/gap/drafts`
const prices = (base) => (draftId) => `${base}/be/motor/gap/drafts/${draftId}/price-requests` 
const logout = (base) => `${base}/authentication/logout`
const sendEmail = (base) => (draftId) => `${base}/be/motor/gap/drafts/${draftId}/leads`

export const url = {
  auth: pipe(auth, apiKey)(baseUrl),
  drafts: pipe(drafts, apiKey)(baseUrl),
  prices: pipe(prices(baseUrl), apiKey),
  logout: pipe(logout, apiKey)(baseUrl),
  email: pipe(sendEmail(baseUrl), apiKey)
}

const headers = {
  'Qover-Api-Version': '1.0',
  'Contet-Type': 'application/json'
}

const protectHeaders = (token) => ({
  'Qover-Api-Version': '1.0',
  'Contet-Type': 'application/json',
  'Authorization': `Bearer ${token}` 
})

export const requestCreator = (data, url, method='post') => axios({ method, url, data, headers })

export const logoutUser = (token) => {
 return axios({
    method: 'post',
    url: pipe(logout, apiKey)(baseUrl),
    headers: protectHeaders(token) 
  }) 
}
