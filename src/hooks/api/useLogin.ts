import { useCallback } from 'react'
import { setCurrentUser, setUser } from '../../utils/cookie'
import { http } from '../../utils/axios'
import { QueryPath } from '../../data/consts'

export default function useLogin() {
  return useCallback(async (user) => {
    setUser(user)
    setCurrentUser(user)
    const { data } = await http.post(QueryPath.USERS_SIGNIN, user)
    return data
  }, [])
}
