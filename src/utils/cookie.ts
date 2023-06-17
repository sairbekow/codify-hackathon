import Cookie from 'js-cookie'

interface IUser {
  pin: string
  password: string
}

export const setUser = (user: IUser): void => {
  Cookie.set(user.pin, user.password, { expires: 365 })
}

export const getUser = (pin: string): string | undefined => {
  return Cookie.get(pin)
}

export const setCurrentUser = (user: IUser): void => {
  Cookie.set('current_user', user.pin, { expires: 1 })
}

export const getCurrentUser = (): string | undefined => {
  return Cookie.get('current_user')
}

export const removeCurrentUser = (): void => {
  Cookie.remove('current_user')
}
