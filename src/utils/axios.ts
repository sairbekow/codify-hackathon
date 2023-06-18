import axios from 'axios'
import { BASE_URL } from '../data/consts'

export const http = axios.create({
  baseURL: BASE_URL,
})
