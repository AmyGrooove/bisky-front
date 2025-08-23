import { getDBToken, setDBToken, deleteDBToken } from '../dbCore'

const getAccessToken = () => getDBToken('accessToken')
const getRefreshToken = () => getDBToken('refreshToken')

const setAccessToken = (token: string) => setDBToken('accessToken', token)
const setRefreshToken = (token: string) => setDBToken('refreshToken', token)

const deleteAccessToken = () => deleteDBToken('accessToken')
const deleteRefreshToken = () => deleteDBToken('refreshToken')

export {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  deleteAccessToken,
  deleteRefreshToken,
}
