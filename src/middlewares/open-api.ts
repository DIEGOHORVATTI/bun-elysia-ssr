import { swagger } from '@elysiajs/swagger'

import { version } from '@/constants/config'

export const openApi = swagger({
  path: '/docs',
  exclude: [`/docs`, `/docs/json`],
  scalarConfig: {
    theme: 'kepler',
    favicon: 'https://static1.smartbear.co/swagger/media/assets/swagger_fav.png'
  },
  documentation: {
    info: {
      version,
      title: 'Bun + Elysia | 2025',
      description: `This is the API documentation for the Bun + Elysia project.`
    }
  }
})
