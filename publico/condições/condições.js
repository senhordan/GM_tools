// const requisitar_condições = ()=>{}
const container_de_condições_grupos = query('#container_de_condições_grupos')
const container_de_condições_nomes = query('#container_de_condições_nomes')
const container_de_condições_descrição = query('#container_de_condições_descrição')
const container_de_condições_citações = query('#container_de_condições_citações')
const div_condições = query('#Condições')
const input_pesquisar_condição = query('#pesquisar_condição')

socket.emit('getConditions')
socket.on('conditions', (objs_condições)=>{

  objs_condições.forEach(condição=>{
      const grupo = condição.condição.grupo
      const condição_nome = condição.condição.nome
      const condição_descrição = condição.condição.descrição
      container_de_condições_descrição.innerHTML += [
        `<div data-condição="${condição_nome.toLowerCase()}" style="display: none;">`,
          `<h2>${condição_nome}</h2>`,
          `${condição_descrição}`,
        `</div>`,
      ].join('')
      container_de_condições_nomes.innerHTML += "<button data-condição=\""+condição_nome.toLowerCase()+"\" data-grupo=\""+grupo+"\" onclick=\"mostrar_esconder_condição('"+condição_nome.toLowerCase()+"')\">"+condição_nome+"</button>"

  })

})

const adicionar_hrefs = (condição, div)=>{
  div.querySelectorAll('a').forEach(ancora=>{
    citação = ancora.innerText
    if (citação.match(/.*a$/)) {
      citação = citação.replace(/a$/, 'o')
    }
    ancora.href = `#${citação}`

  })
}

const mostrar_citação = (condição, div)=>{
  // console.log([condição, div])
  container_de_condições_citações.innerHTML = ''
  let citações_condição = []
  div.querySelectorAll('a').forEach(em=>{
    if (em) {
      citação = em.innerText
      if (citação.match(/.*a$/)) {
        citação = citação.replace(/a$/, 'o')
      }
      citações_condição.push(citação)
    }
  })
  citações_condição = [...new Set(citações_condição)]
  if (citações_condição.length != 0) {
    citações_condição.forEach(citação_condição=>{
      container_de_condições_citações.innerHTML += `<div id="${citação_condição}">${query(`div[data-condição="${citação_condição}"]`).innerHTML}</div>`
    })
  }

}

const mostrar_esconder_condição = (nome)=>{
  const div = query(`div[data-condição="${nome}"]`)
  const div_status = div.style.display

  if (div_status == 'none') {
    container_de_condições_descrição.querySelectorAll('div[data-condição]:not([style="display: none;"])').forEach(i=>{
      i.style.display = 'none'
    })
    mostrar_citação(nome, div)
    adicionar_hrefs(nome, div)
    div.style.display = ''
    container_de_condições_descrição.scrollIntoView()
  } else {
    div.style.display = 'none'
      container_de_condições_citações.innerHTML = ''

  }
}

const filtrar_condições = (valor)=>{
  valor = input_pesquisar_condição.value.toLowerCase()
  container_de_condições_nomes.querySelectorAll('*').forEach(botão_nome=>{
      const nome = botão_nome.innerText.toLowerCase()
      const botão_data_grupo = botão_nome.dataset.grupo

      if (valor.includes('#')) {
        container_de_condições_grupos.style.display = ''
        grupo = valor.replace('#', '')
        if (botão_data_grupo.includes(grupo)) {
          botão_nome.style.display = ''
        } else {
          botão_nome.style.display = 'none'
        } 

      } else {
        container_de_condições_grupos.style.display = 'none'
        if (nome.includes(valor)) {
          botão_nome.style.display = ''
        } else {
          botão_nome.style.display = 'none'
        } 

      }
    })

}

// container_de_condições_citações
container_de_condições_grupos.querySelectorAll('*').forEach(elemento_grupo=>{
  const grupo = elemento_grupo.dataset.grupo
  elemento_grupo.onclick = ()=>{
    input_pesquisar_condição.value = `#${grupo}`
    filtrar_condições()
  }
})

input_pesquisar_condição.oninput = ()=>{
  filtrar_condições()
}

container_de_condições_nomes.onclick = (event)=>{
  trocar_estado_botões(container_de_condições_nomes)
}

window.onkeydown = async (event)=>{
  const tecla = event.key
  // console.log(event)
  // console.log(tecla)
  if (tecla == 't' && event.target != input_pesquisar_condição) {
    try {
      container_de_condições_nomes.querySelector('[style="opacity: 1;"]').click()
      await new Promise(resolve => setTimeout(retsolve, 100));
      input_pesquisar_condição.focus()
    } catch(e) {
    }
  }
}

citações = query('#container_de_condições_descrição em')

tab_regras.onclick = async ()=>{
  await new Promise(resolve => setTimeout(resolve, 100));
  input_pesquisar_condição.focus()
}
if (tab_regras.className.includes('tab_selecionada')) {
  input_pesquisar_condição.focus()
}