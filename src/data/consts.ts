export const BASE_URL = 'http://localhost:5194/'

export enum AppRoutes {
  SIGNIN = '/',
  HOME = '/home',
  NEWS_DETAIL = 'news/get/:id',
  IRRIGATION = 'irrigation',
  VET_DEPARTMENT = 'vet-department',
  ANIMAL_PAGE = 'animal',
  PASTURE = 'pasture',
  PASTURE_PAYMENT = 'pasture-payment',
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
  IRRIGATIONS_LIST_ADMIN = 'irrigations-list',
  IRRIGATIONS_REQUESTS_ADMIN = 'irrigations-requests',
  PASTURE_ADMIN = 'pasture',
  PASTURE_LIST_ADMIN = 'pasture-list',
  PASTURE_CONFIRM_ADMIN = 'pasture-confirm',
  COMPLAINS = 'complains'
}

export enum QueryPath {
  USERS_SIGNIN = 'users/signin',
  GET_ALL_EVENTS = 'news/getall',
  GET_EVENT = 'news/get/',
  EMPLOYEE_GET_ALL = 'employee/getall',
  ROUNDS_CONTROLLER = 'roundscotrolller/getForUser?villageId='
}
