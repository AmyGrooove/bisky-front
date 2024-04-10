const APP_URL = process.env.APP_URL ?? "https://bisky.one/"
const API_URL = process.env.API_URL ?? ""

const NEXT_AUTH_SECRET = process.env.NEXT_AUTH_SECRET ?? ""

const IS_DEVELOPMENT = process.env.IS_DEVELOPMENT === "true" ?? false

export { APP_URL, API_URL, NEXT_AUTH_SECRET, IS_DEVELOPMENT }
