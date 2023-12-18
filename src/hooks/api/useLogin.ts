import { useCallback } from 'react'
import { setCurrentUser, setUser } from '../../utils/cookie'
import { http } from '../../utils/axios'
import { QueryPath } from '../../data/consts'
import { IUser } from '../../data/models'

export default function useLogin() {
  return useCallback(async (user: IUser) => {
    setUser(user)
    const { data } = await http.post(QueryPath.USERS_SIGNIN, user)
    setCurrentUser(data.fullname)
    return data
  }, [])
}
