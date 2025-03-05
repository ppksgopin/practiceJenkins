import 'regenerator-runtime/runtime';
import 'babel-polyfill';
import http from 'http'
import config from './config'
import app from './app'

const server = http.createServer(app.callback())

server.listen(config.get('server.port'), err => {
  if (err) {
    throw err
  }

  // eslint-disable-next-line no-console
  // console.info(
  //   `${Date(Date.now())}: http://localhost:${server.address().port}/`,
  // )
})
