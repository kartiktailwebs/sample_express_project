// var createError = require('http-errors')
// var express = require('express')
// var path = require('path')
// var cookieParser = require('cookie-parser')
// var logger = require('morgan')
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser'
import logger from 'morgan'
// Define project routes
import indexRouter from './routes/index.js'

// Define constant variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

// if we are using other name like templates and all that time we have to uncomment this code.
// app.set('views', path.join(__dirname, 'views'))
// view engine setup
app.set('view engine', 'hbs')

// view use
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// router
app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
