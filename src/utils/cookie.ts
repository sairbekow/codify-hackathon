import Cookie from 'js-cookie'
import { IUser, IUserResponse } from '../data/models'

export const setUser = (user: IUser): void => {
  Cookie.set(user.pin, user.password, { expires: 365 })
}

export const getUser = (pin: string): string | undefined => {
  return Cookie.get(pin)
}

export const setCurrentUser = (username: string): void => {
  Cookie.set('current_user', username , { expires: 1 })
}

export const getCurrentUser = (): string | undefined => {
  return Cookie.get('current_user')
}

export const removeCurrentUser = (): void => {
  Cookie.remove('current_user')
}
