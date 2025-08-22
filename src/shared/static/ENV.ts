const ENV = {
  APP_URL: process.env.APP_URL ?? '',
  API_URL: process.env.API_URL ?? '',
  NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET ?? '',
  IS_DEVELOPMENT: process.env.IS_DEVELOPMENT === 'true',
} as const

export { ENV }
