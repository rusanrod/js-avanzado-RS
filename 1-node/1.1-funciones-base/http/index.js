const http = require('http')
const net = require('net')
const { URL } = require('url')
const { callbackify } = require('util')

// Crear un servidor
const server = http.createServer(callback)

// Levanta un servidor
server.listen()

// Métodos del objeto request (solicitud)
request.path
request.method
request.host
request.protocol

// Métodos del objeto response (respuesta)
response.getHeaders()
response.req
response.statusCode
response.statusMessage
// response.write(chunk[, encoding][, callback])
response.end()
