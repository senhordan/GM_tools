const express = require('express')
const session = require('express-session')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')
const ip = require('ip').address()
const fs = require('fs')

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/publico', express.static(path.join(__dirname, 'publico')))

app.set('views', path.join(__dirname, 'publico'))

app.get('/', (req, res)=>{
	res.render('gerador')
	io.on('connection', (socket) => {
	  console.log('a user connected');
	});

})
// const ip = '10.0.0.245' // ip addr

http.listen(3000, ip, ()=>{
	console.log('Rodando servidor em http://'+ip+':3000')
})




