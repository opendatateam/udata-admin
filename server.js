/* eslint semi: ['error', 'never'] */
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')

const app = express()

app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: '/dist'
}))

app.use('/', express.static(__dirname + '/public'))
app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(5000)
