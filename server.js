const express = require('express')
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


const save_NPC = (NPC)=>{
	console.log(`Saving ${NPC.nome_alternativo}...`)
	fs.writeFileSync(`./NPCs/${NPC.nome_alternativo}.json`, JSON.stringify(NPC))
}
const deleteNPC = (NPC)=>{
	console.log(`Deleting ${NPC}...`)
	fs.unlink(`./NPCs/${NPC}.json`)
}
const getNPCs = ()=>{
	const NPCs_file = fs.readdirSync('./NPCs/')
	const NPCs = []
	NPCs_file.forEach(file=>{
		NPCs.push(JSON.parse(fs.readFileSync(`./NPCs/${file}`, 'utf-8')))
	})
	return NPCs
}

app.get('/', (req, res)=>{
	io.once('connection', (socket) => {
	  console.log('a user connected');
		socket.on('saveNPC', NPC=>save_NPC(NPC))
		socket.on('deleteNPC', NPC=>delete_NPC(NPC))
		socket.on('getNPCs', ()=>{
			socket.emit('NPCs', getNPCs())
		})
	});
	res.render('gerador')
})


http.listen(3000, ip, ()=>{
	console.log('Rodando servidor em http://'+ip+':3000')
})




