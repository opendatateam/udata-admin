/* eslint semi: ['error', 'never'] */
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const httpProxy = require('http-proxy')
const webpackConfig = require('./webpack.config')
const config = require('./config.json')

const proxy = httpProxy.createProxyServer({})

proxy.on('proxyReq', (proxyReq) => proxyReq.setHeader('X-API-KEY', config.API_KEY))

const app = express()

app.use('/api/1', (req, res) => proxy.web(req, res, { changeOrigin: true, target: config.API_ROOT_URL }))

app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: '/dist'
}))
app.use('/', express.static(__dirname + '/public'))
app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(5000)
