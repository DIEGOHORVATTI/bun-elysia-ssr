import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

import { openApi, rateLimit } from '@/middlewares'
import { PORT, version } from '@/constants/config'

import { router } from './router'

new Elysia()
  .use(openApi)
  .use(rateLimit)
  .use(staticPlugin())
  .onError(({ code, error }) => {
    if (code === 'NOT_FOUND') return 'Route not found 😭'

    if (code === 'VALIDATION') {
      const { summary, ...primaryError } = error.all[0]

      if ('path' in primaryError)
        return {
          error: `${primaryError.path.slice('/'.length)}: ${summary}`
        }

      return { error: summary }
    }

    return error
  })
  .use(router(__dirname))
  .get('/', () => `API is running 🚀: v${version}`) // Rota principal
  .listen(PORT, ({ url }) => console.info(`🦊 Elysia is running at ${url}`))
