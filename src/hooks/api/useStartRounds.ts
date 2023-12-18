import { useCallback } from 'react'
import { http } from '../../utils/axios'
import { QueryPath } from '../../data/consts'

export default function useStartRounds() {
  return useCallback(async (params: any) => {
    const { data } = await http.post(QueryPath.ROUNDS_CONTROLLER_START, params)
    return data
  }, [])
}
