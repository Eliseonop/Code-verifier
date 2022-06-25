/**
 * Basic JSON response for Controller
 */
export type BasicResponse = {
  message: string
}
/**
 * Error JSON response for Controller
 */
export type ErrorResponse = {
  error: string
  message: string
}

/**
 * Goodbye JSON response for Controller
 */
export type GoodbyeResponse = {
  message: string
  date: string
}
