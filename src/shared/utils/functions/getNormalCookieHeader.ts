import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

const getNormalCookieHeader = async (
  cookies: () => Promise<ReadonlyRequestCookies>,
) =>
  (await cookies())
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join('; ')

export { getNormalCookieHeader }
