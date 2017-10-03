import axios from 'axios'
import { pipe } from 'ramda'

const baseUrl = 'https://qover-test.apigee.net'
const APIKEY = 'vuRSkbbMpqujS0F2yhkuFnDVJ32znJIN'

const apiKey = (basePath) => `${basePath}apikey=${APIKEY}` 
const auth = (base) => `${base}/authentication/authenticate?`
const drafts = (base) => `${base}/be/motor/gap/drafts?` 
const logout = (base) => `${base}/authentication/logout?`

const protectHeadres = (token) => ({
  'Content-Type': 'application/json',
  'Qover-Api-Version': '1.0',
  'Authorization': `Bearer ${token}`
})

const commonHeaders = () => ({
  'Qover-Api-Version': '1.0',
  'Contet-Type': 'application/json'
})

export const authUser = (data) => {
  return axios.post(pipe(auth, apiKey)(baseUrl), data, {
    headers: commonHeaders()
  })
}

export const getDrafts = (token) => {
  return axios({
    method: 'post',
    url: pipe(drafts, apiKey)(baseUrl),
    headers: protectHeadres(token) 
  })
}

export const logoutUser = (token) => {
 return axios({
    method: 'post',
    url: pipe(logout, apiKey)(baseUrl),
    headers: protectHeadres(token) 
  }) 
} 
