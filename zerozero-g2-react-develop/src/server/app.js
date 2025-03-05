import path from 'path'
import Koa from 'koa'
import morgan from 'koa-morgan'
import favicon from 'koa-favicon'
import serve from 'koa-static'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import compress from 'koa-compress'
import bodyParser from 'koa-bodyparser'
import error from 'koa-error'
import Router from 'koa-router'
import config from './config'
import ssr from './middlewares/ssr'
import redirect from './middlewares/redirect'

const app = new Koa()
const router = new Router()
app.use(bodyParser())

/**
 * v2.10.0
 * 新增passport Line, Facebook Login
 **/
const passport = require('koa-passport');
////config FB, Line Strategy
require('./passport-auth');

const session = require('koa-session')
app.keys = ['secret']
app.use(session({}, app));

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

// Line, FaceBook Login Route
const authRouter = require('./authRouter');
app.use(authRouter.routes());

/**
 * End
 */

app.use(async (ctx, next) => {
  if (ctx.request.headers.host === 'www.artkernel.net') {
    ctx.status = 301
    ctx.redirect(`https://www.artkernel.net${ctx.request.url}`)
  }
  await next()
})

app.use(async (ctx, next) => {
  if ('/alive' == ctx.path) {
    ctx.status = 200;
    ctx.body = 'alive';
  } else {
    await next();
  }
})

app.use(
  redirect([
    {
      match: /^\/trainings\/formation-javascript-es2017/,
      redirect: '/formations/javascript-es2017',
    },
    {
      match: /^\/trainings\/formation-nodejs/,
      redirect: '/formations/nodejs',
    },
    {
      match: /^\/trainings\/formation-react/,
      redirect: '/formations/react',
    },
    {
      match: /^\/trainings\/formation-rxjs/,
      redirect: '/formations/rxjs',
    },
    {
      match: /^\/trainings\/formation-graphql/,
      redirect: '/formations/graphql',
    },
    {
      match: /^\/trainings\/formation-jest/,
      redirect: '/formations/react',
    },
    {
      match: /^\/trainings\/formation-initiation-react/,
      redirect: '/formations/react',
    },
    {
      match: /^\/trainings$/,
      redirect: '/formations',
    },
    {
      match: /^\/story/,
      redirect: '/notre-histoire',
    },
    {
      match: /^\/trainers\/greg-berge/,
      redirect: '/formateurs/greg-berge',
    },
    {
      match: /^\/trainers\/adrien-joly/,
      redirect: '/formateurs/adrien-joly',
    },
    {
      match: /^\/trainers\/thomas-jeanneau/,
      redirect: '/formateurs/thomas-jeanneau',
    },
    {
      match: /^\/creer-app-mac-avec-script-shell/,
      redirect: '/articles/creer-app-mac-avec-script-shell',
    },
    {
      match: /^\/developpez-plus-vite-avec-prettier/,
      redirect: '/articles/developpez-plus-vite-avec-prettier',
    },
    {
      match: /^\/pourquoi-react-est-il-si-populaire/,
      redirect: '/articles/pourquoi-react-est-il-si-populaire',
    },
    {
      match: /^\/articles\/la-license-de-react-est-il-une-menace/,
      redirect: '/articles/la-license-de-react-est-elle-une-menace',
    },
  ]),
)

const PUBLIC = path.join(__dirname, '../../public')

app.use(error())
//app.use(bodyParser())
app.use(serve(PUBLIC, { immutable: true, maxage: 31536000000 }))
app.use(compress({ filter: contentType => /text/i.test(contentType) }))
app.use(conditional())
app.use(etag())

if (config.get('env') !== 'test') {
  app.use(morgan(config.get('server.logFormat')))
}

app.use(favicon(path.join(PUBLIC, 'favicon.ico')))
app.use(router.routes())
app.use(ssr())




export default app
