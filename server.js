/* eslint semi: ['error', 'never'] */
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const httpProxy = require('http-proxy')
const request = require('superagent')
const webpackConfig = require('./webpack.config')
const config = require('./config.json')

const proxy = httpProxy.createProxyServer({})

proxy.on('proxyReq', (proxyReq) => proxyReq.setHeader('X-API-KEY', config.API_KEY))

const app = express()

app.get('/api/1/swagger.json', (req, res, next) => {
  request(config.API_ROOT_URL + '/swagger.json')
    .then(resp => {
      if (!resp.ok || !resp.body || !resp.body.definitions) {
        throw new Error('Bad swagger definition')
      }
      const swagger = resp.body
      swagger.host = undefined
      res.send(swagger)
    })
    .catch(next)
})
app.use('/api/1', (req, res) => proxy.web(req, res, { changeOrigin: true, target: config.API_ROOT_URL }))

app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: '/dist'
}))
app.use('/', express.static(__dirname + '/public'))
app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(5000)
