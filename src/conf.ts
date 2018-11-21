/**
 * @file this file should contain all the constants used across the service which are not
 * part of the .env file
 * export const SOME_CONSTANT = 'some_value'
 */
export const SERVER_PORT: number = 9413

export const ERRORS_LIST: Object = {
  'ERR_FORBIDDEN': {
    'message': 'You are not authorised to access this resource',
    'statusCode': 403,
  },
}
