import { TTokenKey } from '../../types/IAuthDB'
import { getDBToken, setDBToken, deleteDBToken } from '../dbCore'

const getAccessToken = () => getDBToken('accessToken')
const getRefreshToken = () => getDBToken('refreshToken')

const setAccessToken = (token: TTokenKey) => setDBToken('accessToken', token)
const setRefreshToken = (token: TTokenKey) => setDBToken('refreshToken', token)

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
