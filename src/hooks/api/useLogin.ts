import { useCallback } from 'react'
import { setCurrentUser, setUser } from '../../utils/cookie'

export default function useLogin() {
  return useCallback(async (user) => {
    setUser(user)
    setCurrentUser(user)
  }, [])
}
