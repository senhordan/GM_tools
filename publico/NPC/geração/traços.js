function random_number(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const traços = {}

traços.local_de_nascimento = [
	['em uma casa', 50],
	['em uma casa de amigos da família', 55],
	['em uma casa de um curandeiro ou uma parteira', 63],
	['em uma carruagem, carroça ou diligência', 64],
	['em um celeiro, estábulo ou galpão', 68],
	['em uma caverna', 70],
	['no campo', 72],
	['em uma floresta', 74],
	['em um templo', 77],
	['em um campo de batalha', 78],
	['no beco ou rua', 80],
	['em um bordel, taverna ou estalagem', 82],
	['em um castelo, fortaleza, torre ou palácio', 84],
	['no lixão ou esgoto', 85],
	['entre pessoas de diferentes raças', 88],
	['a bordo de um barco ou navio', 91],
	['em uma prisão ou nos quartéis-generais de uma organização secreta', 93],
	['em um o laboratório de um sábio', 95],
	['no plano das fadas', 96],
	['no plano das sombras', 97],
	['em um plano astral ou etéreo', 98],
	['em um plano interior de sua escolha', 99],
	['em um plano exterior de sua escolha', 100]
]
traços.pais = [
	['você sabe quem seus progenitores são ou eram', 95],
	['você não sabe quem seus progenitores eram', 100]
]

traços.estilo_de_vida = [
	['miserável', 3, -40],
	['esquálido', 5, -20],
	['pobre', 8, -10],
	['modesto', 12, 0],
	['confortável', 15, 10],
	['rico', 17, 20],
	['aristocrático', 18, 40]
]
traços.lar = [
	['nas ruas', 0],
	['em um casebre', 20],
	['em nenhum lugar permanente; eu era nômade', 30],
	['acampado ou em um vilarejo perto das florestas', 40],
	['em um apartamento em uma vizinhança pobre', 50],
	['em uma casa pequena', 70],
	['em uma casa grande', 90],
	['em uma mansão', 110],
	['em um palácio ou castelo', 111]
]
traços.memoria = [
	['ainda sou assombrado pela minha infância, quando era maltratado pelos meus colegas.', 3],
	['passei maior parte da minha infância sozinho, sem nenhum amigo próximo.', 5],
	['as pessoas me achavam estranho, então tinha poucos amigos.', 8],
	['eu tinha alguns amigos e tive uma infância normal. ', 12],
	['eu tinha muitos amigos, e minha infância foi muito feliz.', 15],
	['eu sempre tive facilidade em fazer amigos, e adorava estar perto das pessoas.', 17],
	['todos me conheciam, e tinha amigos sempre onde eu fosse. ', 18]
]

traços.olhos = ['olhos sonolentos', 'olhos desconfiados', 'olhos lacrimejantes', 'olhos brilhantes', 'olhos frios', 'olhos sorridentes', 'olhos fechados', 'olhos selvagens', 'olhos distantes', 'olhos preguiçosos', 'olhos ferozes', 'olhos atentos', 'olhos escuros', 'olhos encapuzados', 'olhos de duas cores diferentes', 'olhos levemente cruzados', 'olhos largos', 'olhos bonitos', 'olhos lisos', 'olhos penetrantes']

traços.orelhas = ['orelhas demasiado grandes', 'lóbulos longos das orelhas', 'orelhas pequenas', 'orelhas desiguais', 'orelhas peludas', 'orelhas pontiagudas', 'lóbulos curtos das orelhas', 'orelhas de abano', 'orelhas com piecings elaborados', 'orelhas de couve-flor', 'orelhas com tufos de cabelo improváveis']

traços.boca = ['lábios cheios', 'dentuça', 'lábios finos', 'dentes podres', 'dentes tortos', 'um dente partido ou ausente', 'lábios fazendo bico', 'lábios secos e fissurados', 'um ou mais dentes falsos', 'uma boca que fica aberta']

traços.nariz = ['nariz torto', 'nariz bulboso', 'nariz estreito', 'nariz comprido', 'nariz largo', 'nariz angular', 'nariz redondo', 'nariz partido', 'nariz de falcão', 'nariz largo', 'nariz delicado']

traços.queixo = ['um queixo pronunciado', 'um queixo fendido', 'uma covinha no queixo', 'um queixo arredondado', 'uma linha de maxilar afiada', 'um queixo quadrado', 'um queixo redondo', 'uma mordida inferior']

traços.cabelo = ['cabelo espesso', 'cabelo fino', 'cabelo liso', 'cabelo ondulado', 'cabelo encaracolado', 'cabelo duro', 'cabelo oleoso', 'cabelo exuberante', 'cabelo frizado', 'tranças compridas', 'tranças apertadas contra a cabeça', 'cabelo muito comprido','cabelo rebelde', 'um penteado incomum', 'um penteado ultrapassado', 'um penteado de alta manutenção', 'cabelo curto cortado', 'uma cabeça raspada', 'nenhum cabelo']

traços.outros_traços_faciais = ['bochechas altas', 'bochechas apertadas, desenhadas', 'bochechas gordas', 'acne desagradável', 'uma grande mancha', 'uma marca de beleza', 'sardas', 'cicatrizes terríveis']

traços.altura = [' anormalmente baixo', 'baixo em estatura', 'altura média', 'ligeiramente acima da altura média', 'bem acima da altura média', 'anormalmente alto']


traços.corpo = ['fino e delicado', 'de construção média', 'bem musculado', 'ligeiramente obeso', 'grotescamente obeso', 'leve e magro', 'fino e rijo', 'sinuoso e forte', 'flácido e fraco', 'flexo e frouxo', 'fino e frouxo', 'macio e rechonchudo', 'fino e pequenino', 'grande e largo', 'entroncado e forte', 'ossudo', 'largo e pesado', 'coberto de cabelo']

traços.mãos = ['mãos poderosas', 'mãos delicadas', 'mãos ásperas', 'mãos macias', 'um toque leve', 'um toque pesado']

traços.cicatrizes = ['uma cicatriz irregular', 'uma cicatriz roxa escura', 'uma cicatriz vermelha', 'uma cicatriz longa e fina']


traços.tatuagem = ['uma tatuagem de punhal', 'uma tatuagem de flecha', 'uma tatuagem de âncora', 'uma tatuagem de caveira', 'um par de tatuagens de ossos cruzados', 'uma tatuagem de cobra', 'uma tatuagem de escorpião', 'uma teia de aranha tatuagem', 'uma tatuagem de coração', 'uma tatuagem de anel de espinhos', 'uma tatuagem de sereia', 'uma tatuagem de dragão']

traços.joia = [
	['um brinco', 'dois brincos', 'uma pequena corrente %s no pescoço', 'uma corrente grande %s no pescoço', 'uma gargantilha %s apertada no pescoço', 'um broche', 'um anel', 'vários anéis', 'uma pulseira', 'um piercing %s no nariz', 'um medalhão', 'um cinto ornamentado'],
	['aço', 'bronze', 'estanho', 'prata', 'ouro', 'platina', 'cobre', 'gemas'],
	['ametista', 'cristal', 'diamante', 'esmeralda', 'jade', 'obsidiana', 'opala', 'pérola', 'rubi', 'safira', 'topázio', 'turquesa']
]

traços.roupas = ['nova', 'na moda e moderna', 'um pouco antiquada', 'da mais alta qualidade', 'desbotada, mas em bom estado', 'desbotada e remendada', 'rasgado em alguns lugares; botões faltando', 'esfarrapado e desgastado']

traços.quando_calmo = ['compassivo', 'alegre', 'reservado', ' falador', 'desinteressado', ' agressivo', 'desinteressado', 'desejoso', 'enganoso', 'tolo', 'estrito', 'aceitável', ' misericordioso', 'furioso', 'medroso', 'manipulador', 'devoto', 'ganancioso', 'engraçado', 'sombrio', 'divertido-amoroso', 'preguiçoso', 'impulsionado', 'prepotente', 'artístico', 'assertivo', 'livre de cuidados', 'cauteloso', 'confiante', 'atencioso', 'leal', 'sofisticado', 'fraco-arábio']

traços.quando_estressado = [' afastado', 'assassino', 'obsessivo', 'autoritário', 'determinado', ' bravo', 'corajoso', 'covarde', ' beligerante', 'cáustico', 'sem graça', 'argumentativo', 'glutão', 'demasiado protetor', 'furioso', 'covarde', 'meticuloso', 'sarcástico', 'teimoso', 'destrutivo', 'prático', 'insistente', 'fanático', 'secreto', 'escarnecedor', 'corajoso', 'impraticável', 'calculador', 'industrioso', 'manipulador', 'destrutivo', 'compulsivo', 'intolerante']

traços.humor = ['concordante', 'livre de preocupações', 'curioso', 'ansioso', 'amigável', 'feliz', 'esperançoso', 'otimista', 'indiferente', 'aborrecido', 'focado', 'suspeito', 'cansado', ' afastado', ' discordante', 'agitado', 'zangado', 'desanimado', ' sombrio', 'nervoso']


traços.fé = ['crente silencioso', 'observador casual', 'estudante crítico', 'cínico sincero', ' buscador mente-aberta', 'herege quebrado', 'ouvinte cauteloso', 'crente verdadeiro fanático']


traços.defeito = ['inquieto', 'bebe demasiado', 'come demasiado', 'jura frequentemente', 'tem má higiene', 'não resiste a flertar', 'não consegue parar de olhar', 'transpira muito e facilmente', 'é um mentiroso habitual', 'embeleza a verdade', 'exagera detalhes', 'tem um temperamento curto', 'é melodramático', 'fofoca', 'mastiga com a boca aberta', 'fareja muitas vezes audivelmente', 'acredita no que lhe diz', 'é cético em relação a tudo', 'faz pouco contato visual']


traços.biografia = ['acólito', 'acrobata', 'advogado', 'apostador', 'apresentador', 'artesão', 'artista', 'batedor', 'caçador', 'caçador de recompensas', 'charlatão', 'criança de rua', 'criminoso', 'detetive', 'discípulo marcial', 'emissário', 'encantador de animais', 'eremita', 'estudioso', 'funileiro', 'gladiador', 'guarda', 'herbalista', 'lavrador', 'marinheiro', 'médico de campo', 'mercador', 'mineiro', 'nobre', 'nômade', 'operário', 'prisioneiro', 'soldado', 'taverneiro', 'vidente'];

traços.local_de_nascimento.var_name = 'local_de_nascimento'
traços.pais.var_name = 'pais'
traços.lar.var_name = 'lar'
traços.memoria.var_name = 'memoria'
traços.olhos.var_name = 'olhos'
traços.orelhas.var_name = 'orelhas'
traços.boca.var_name = 'boca'
traços.nariz.var_name = 'nariz'
traços.queixo.var_name = 'queixo'
traços.cabelo.var_name = 'cabelo'
traços.outros_traços_faciais.var_name = 'outros_traços_faciais'
traços.altura.var_name = 'altura'
traços.corpo.var_name = 'corpo'
traços.mãos.var_name = 'mãos'
traços.cicatrizes.var_name = 'cicatrizes'
traços.tatuagem.var_name = 'tatuagem'
traços.joia.var_name = 'joia'
traços.roupas.var_name = 'roupas'
traços.quando_calmo.var_name = 'quando_calmo'
traços.quando_estressado.var_name = 'quando_estressado'
traços.humor.var_name = 'humor'
traços.fé.var_name = 'fé'
traços.defeito.var_name = 'defeito'
traços.biografia.var_name = 'biografia'

traços.local_de_nascimento.label = 'Nasceu'
traços.pais.label = 'Pais'
traços.lar.label = 'Lar'
traços.memoria.label = 'Memoria'
traços.olhos.label = 'Olhos'
traços.orelhas.label = 'Orelhas'
traços.boca.label = 'Boca'
traços.nariz.label = 'Nariz'
traços.queixo.label = 'Queixo'
traços.cabelo.label = 'Cabelo'
traços.outros_traços_faciais.label = 'Outros Traços Faciais'
traços.altura.label = 'Altura'
traços.corpo.label = 'Corpo'
traços.mãos.label = 'Mãos'
traços.cicatrizes.label = 'Cicatrizes'
traços.tatuagem.label = 'Tatuagem'
traços.joia.label = 'Joia'
traços.roupas.label = 'Roupas'
traços.quando_calmo.label = 'Quando Calmo'
traços.quando_estressado.label = 'Quando Estressado'
traços.humor.label = 'Humor atual'
traços.fé.label = 'Fé'
traços.defeito.label = 'Defeito'
traços.biografia.label = 'Biografia';

[traços.local_de_nascimento, traços.pais].forEach(variavel=>{
	variavel.generate = ()=>{
		const dado = random_number(1, 101)
		let item = undefined
		variavel.forEach(array=>{
			if (!item) {
				if (dado <= array[1]) {
					item = array[0]
				}
			}
		})
		return item
	}
})

traços.lar.generate = ()=>{
	traços.estilo_de_vida.generate = ()=>{
		const dado = random_number(1, 7) + random_number(1, 7) + random_number(1, 7)
		let item = undefined
		let modificador_lar
		traços.estilo_de_vida.forEach(array=>{
			if (!item) {
				if (dado <= array[1]) {
					item = array[0]
					modificador_lar = array[2]
				}
			}
		})
		return [item, modificador_lar]
	}
	const modificador_lar = traços.estilo_de_vida.generate()[1]
	let dado = random_number(1, 101) + modificador_lar
	let ultimo_numero = traços.lar[traços.lar.length -1][1]
	if (dado > ultimo_numero) {
		dado = ultimo_numero
	}
	let item = undefined
	traços.lar.forEach(array=>{
		if (!item) {
			if (dado <= array[1]) {
				item = array[0]
			}
		}
	})
	return `Estilo de vida ${traços.estilo_de_vida.generate()[0]} ${item}`
}

traços.memoria.generate = ()=>{
	const dado = random_number(1, 7) + random_number(1, 7) + random_number(1, 7)
	let item = undefined
	traços.memoria.forEach(array=>{
		if (!item) {
			if (dado <= array[1]) {
				item = array[0]
			}
		}
	})
	return item
}

traços.acessorio = [traços.tatuagem, traços.roupas, traços.joia]

traços.caracteristica = [traços.olhos, traços.orelhas, traços.cabelo,traços.boca, traços.queixo, traços.outros_traços_faciais, traços.mãos, traços.cicatrizes]

traços.comportamento = [traços.quando_calmo, traços.quando_estressado, traços.fé, traços.defeito];

[traços.acessorio, traços.caracteristica, traços.comportamento]
	.forEach(variavel=>{
		variavel.variavel_aleatoria = function (){
			return random(variavel)
		}
		variavel.generate = function () {
			vari = this.variavel_aleatoria()
			variavel.label = vari.label
			variavel.var_name = vari.var_name
			return vari.generate()
		}
		// variavel.label = variavel_aleatoria.label
		// variavel.var_name = variavel_aleatoria.var_name
});

[traços.olhos, traços.orelhas, traços.boca, traços.queixo, traços.cabelo, traços.outros_traços_faciais, traços.altura, traços.corpo, traços.mãos, traços.cicatrizes, traços.tatuagem, traços.roupas, traços.quando_calmo, traços.quando_estressado, traços.humor, traços.fé, traços.defeito, traços.biografia]
	.forEach(variavel=>{
		variavel.generate = ()=>{
			return random(variavel)
		}
})

traços.joia.generate = ()=>{
	const joias = traços.joia[0]
	const materiais = traços.joia[1]
	const gemas = traços.joia[2]
	const joia_escolhida = random(joias)
	let material = random(materiais)
	let item = ''
	if (material == 'gemas') {
		material = random(gemas)
	}
	if (joia_escolhida.indexOf('%s') != -1) {
		item = joia_escolhida.replace('%s', `de ${material}`)
	} else {
		item = `${joia_escolhida} de ${material}`
	}
	return item
}



