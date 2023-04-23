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
	console.log(`Saving ${NPC.nome}...`)
	fs.writeFileSync(`./NPCs/${NPC.nome}.json`, JSON.stringify(NPC))
	// const nome_do_arquivo = NPC.nome_alternativo == '' ? NPC.nome : NPC.nome_alternativo
	// console.log(`Saving ${nome_do_arquivo}...`)
	// fs.writeFileSync(`./NPCs/${nome_do_arquivo}.json`, JSON.stringify(NPC))
}
const delete_NPC = (NPC)=>{
	console.log(`Deleting ${NPC}...`)
	fs.unlink(`./NPCs/${NPC}.json`, err=>{
		if (err) {console.log(err)}
	})
}
const getNPCs = ()=>{
	const NPCs_file = fs.readdirSync('./NPCs/')
	const NPCs = []
	NPCs_file.forEach(file=>{
		NPCs.push(JSON.parse(fs.readFileSync(`./NPCs/${file}`, 'utf-8')))
	})
	return NPCs
}
const get_conditions = ()=>{
	return JSON.parse(fs.readFileSync('./publico/condições/condições.json'))
}
const edit_NPC = (NPC)=>{
	console.log(`Editing ${NPC}`)
}
app.get('/', (req, res)=>{
	io.once('connection', (socket) => {
	  console.log('a user connected');
		socket.on('saveNPC', NPC=>save_NPC(NPC))
		socket.on('deleteNPC', NPC=>delete_NPC(NPC))
		socket.on('editNPC', NPC=>edit_NPC(NPC))
		socket.on('getConditions', ()=>{
			socket.emit('conditions', get_conditions())
		})
		socket.on('getNPCs', ()=>{
			socket.emit('NPCs', getNPCs())
		})
	});
	res.render('index')
})

const porta = 3300
http.listen(porta, ip, ()=>{
	const link = `http://${ip}:${porta}`
	console.log(`Rodando servidor em ${link}`)
})




