// const requisitar_condições = ()=>{}
const container_de_condições_nomes = query('#container_de_condições_nomes')
const container_de_condições_descrição = query('#container_de_condições_descrição')
let grupos = {}
const div_condições = query('#Condições')

socket.emit('getConditions')
socket.on('conditions', (objs_condições)=>{

  objs_condições.forEach(obj=>{
    const nome_do_grupo = obj.condição.grupo
    if (grupos[nome_do_grupo]) {
      grupos[nome_do_grupo].push(obj)
    } else {
      grupos[nome_do_grupo] = []
      grupos[nome_do_grupo].push(obj)
    }
  })


  Object.keys(grupos).forEach(grupo=>{
    grupos[grupo].forEach(condição=>{
      const condição_nome = condição.condição.nome
      const condição_descrição = condição.condição.descrição
      // console.log(condição_descrição)
      container_de_condições_descrição.innerHTML += [
        `<div data-condição="${condição_nome}" style="display: none;">`,
          `${condição_descrição}`,
        `</div>`,
      ].join('')
      container_de_condições_nomes.innerHTML += "<button data-condição=\""+condição_nome+"\" data-grupo=\""+grupo+"\" class=\"btn-rdn\" onclick=\"mostrar_esconder_condição('"+condição_nome+"')\">"+condição_nome+"</button>"

    })
  })

})


const mostrar_esconder_condição = (nome)=>{
  const div = query(`div[data-condição="${nome}"]`)
  const div_status = div.style.display

  if (div_status == 'none') {
    container_de_condições_descrição.querySelectorAll('div[data-condição]:not([style="display: none;"])').forEach(i=>{
      i.style.display = 'none'
    })
    div.style.display = ''
  } else {
    div.style.display = 'none'
  }
}