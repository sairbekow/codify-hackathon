export const BASE_URL = 'http://localhost:5194/'

export enum AppRoutes {
  SIGNIN = '/',
  HOME = '/home',
  ADMIN = '/admin',
  REGIONS = 'regions',
  PAYMENTS = 'payments',
  USERS = 'users',
  VILAGE_HISTORY = 'vilage-history',
  EMPLOYEES = 'employees',
  CONTACTS = 'contacts',
  VACANCIES = 'vacancies',
  IRRIGATIONS_LIST = 'irrigations-list',
  IRRIGATIONS_REQUESTS = 'irrigations-requests',
  WATER = 'water',
  FIELD = 'field',
  COMPLAINS = 'complains',
  VET_DEP = 'vet-department'
}

export enum QueryPath {
  USERS_SIGNIN = 'users/signin',
  GET_ALL_EVENTS = 'news/getall',
  GET_EVENT = 'news/get'
}
