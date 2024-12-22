import { Elysia } from 'elysia'

const router = new Elysia({ prefix: '/', tags: ['Home'] }).get('/', () => 'Hello World')

export default router
