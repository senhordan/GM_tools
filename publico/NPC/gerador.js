socket = io()

// Geração
const checkbox_nome = query('.nome input[type="checkbox"]')
const checkbox_ancestralidade = query('.ancestralidade input[type="checkbox"]')
const checkbox_genero = query('.genero input[type="checkbox"]')

const span_nome = query('#nome')
const select_ancestralidade = query('#ancestralidade')
const select_genero = query('#genero')

const button_salvar_NPC = query('#salvar_NPC')

const ancestralidades_neutras = query('.neutral')

const input_nome_alternativo = query('#nome_alternativo')
const input_descrição = query('#descrição')

const limpar_descrição = query('.descrição h2 img')

const elementos = {}

const classes = ['local_de_nascimento', 'pais', 'lar', 'biografia', 'corpo', 'altura', 'acessorio', 'caracteristica', 'humor', 'comportamento']

classes.forEach(i=>{
  elementos[i] = {}
  elementos[i]['checkbox'] = query(`#Gerar_NPC [type="checkbox"].${i}`)
  elementos[i]['button'] = query(`#Gerar_NPC img.${i}`)
  elementos[i]['label'] = query(`#Gerar_NPC label.${i}`)
  elementos[i]['span'] = query(`#Gerar_NPC span.${i}`)
})

const elementos_keys = Object.keys(elementos)

// Salvos

const NPCs_salvos = query('#NPCs_salvos')

const container_de_NPCs_salvos = query('#container_de_NPCs_salvos_descrição')

const container_de_nomes = query('#container_de_NPCs_salvos_nomes')

const tabs_container = query('#tabs_container')

const tabs_NPC_container = query('#tabs_NPC_container')

const NPCs_object = {}

// Funções

const remover_NPC_se_existir = (nome)=>{
  const element = query(`[data-nome="${nome}"]`)
  if (element.length == 0) {
    return false
  } else {
    element.forEach(i=>{i.remove()})
    delete NPCs_object[nome]
    return true
  }
}

const trocar_estado_tab = (container)=>{
  const tabs = container.querySelectorAll('*')
  tabs.forEach(tab=>{
    if (event.target == container) {
    } else if (tab == event.target) {
      if (tab.className.includes('tab_não_selecionada')) {
        tab.className = tab.className.replace('tab_não_selecionada', 'tab_selecionada')
      }
      query(`#${tab.dataset.tab}`).style.display = ''
    } else {
      if (tab.className.includes('tab_selecionada')) {
        tab.className = tab.className.replace('tab_selecionada', 'tab_não_selecionada')
      }
      query(`#${tab.dataset.tab}`).style.display = 'none'
    }
  })
}

const trocar_estado_botões = (container)=>{
  const botões = container.querySelectorAll('*')
  botões.forEach(botão=>{
    if (event.target == container) {
    } else if (botão == event.target) {

      const opacidade = botão.style.opacity
      if (opacidade == 0.6 || opacidade == '') {
        botão.style.opacity = 1
      }else {
        botão.style.opacity = 0.6
      }
      
    } else {
      botão.style.opacity = 0.6
    }
  })
}

const editar_NPC = (nome)=>{
  console.log(`editar ${nome}`)
  tab_NPC_gerar.click()
  classes.forEach(i=>{
    elementos[i].label.innerText = `${NPCs_object[nome][i].label}:`
    elementos[i].span.innerText = NPCs_object[nome][i].span
  })
  span_nome.innerText = nome
  select_ancestralidade.value = NPCs_object[nome].ancestralidade[0]
  select_genero.value = NPCs_object[nome].genero[0]
  input_nome_alternativo.value = NPCs_object[nome].nome_alternativo
  input_descrição.value = NPCs_object[nome].descrição
}

const remover_NPC = (nome)=>{
  console.log(`remover ${nome}`)
  socket.emit('deleteNPC', nome)
  remover_NPC_se_existir(nome)
}

const reordenar_nomes = ()=>{
  const botões_nomes = container_de_nomes.querySelectorAll('*')
  function comparar( a, b ) {
    if ( a.dataset.nome < b.dataset.nome ){
      return -1;
    }
    if ( a.dataset.nome > b.dataset.nome ){
      return 1;
    }
    return 0;
  }
  const reordenado = Array.prototype.slice.call(botões_nomes, 0).sort( comparar )
  botões_nomes.forEach((element, i)=>{
      container_de_nomes.appendChild(reordenado[i])
  })
}

const add_NPC = (NPC)=>{
  remover_NPC_se_existir(NPC.nome)
  NPCs_object[NPC.nome] = NPC

  let caracteristicas = ''
  elementos_keys.forEach(i=>{
    const span = NPC[i].span
    const label = NPC[i].label
    caracteristicas += [
      `<div class="${i}">`,
        `<label>${label}:</label><span>${span}</span>`,
      `</div>`
    ].join('')
  })
  
  container_de_NPCs_salvos.innerHTML += [
      `<div style="display: none;" data-nome="${NPC.nome}">`,
        `<h2>${NPC.nome}<img src="../publico/imgs/edit.png" class="edit"> <img src="../publico/imgs/x.png" class="x"></h2>`,
        `<p>${NPC.nome_alternativo}</p>`,
        `<p>${NPC.descrição}</p>`,
        `<p>${NPC.ancestralidade[1]} ${NPC.genero[1]}</p>`,
        `${caracteristicas}`,
      `</div>`,

  ].join('')

  nome = "<button class=\"btn-rdn\" data-nome=\""+NPC.nome+"\" data-genero=\""+NPC.genero[0]+"\" onclick=\"mostrar_esconder_caracteristicas(`"+NPC.nome+"`)\">"+NPC.nome+"</button>"

  container_de_nomes.innerHTML += nome
  reordenar_nomes()
}

const mostrar_esconder_caracteristicas = (nome)=>{
  const div = query(`div[data-nome="${nome}"]`)
  const div_status = div.style.display

  if (div_status == 'none') {
    container_de_NPCs_salvos.querySelectorAll('div[data-nome]:not([style="display: none;"])').forEach(i=>{
      i.style.display = 'none'
    })
    div.style.display = ''
  } else {
    div.style.display = 'none'
  }
}


const gerar_nome = ()=>{
  let genero = random(['male', 'female'])
  if (checkbox_genero.checked) {
    genero = select_genero.value
  }

  let ancestralidade = random(query('#ancestralidade option')).value

  if (checkbox_ancestralidade.checked) {
    ancestralidade = select_ancestralidade.value
  }

  let nome_e_ancestralidade = ancestralidades[ancestralidade][genero]()

  ancestralidade = nome_e_ancestralidade[0]

  let nome = nome_e_ancestralidade[1]

  if (checkbox_nome.checked) {
    nome = span_nome.innerText
  }
  select_genero.value = genero
  select_ancestralidade.value = ancestralidade
  span_nome.innerText = nome
}

const gerar_descrição = ()=>{
  elementos_keys.forEach(i=>{
    if (!elementos[i].checkbox.checked) {
      elementos[i].span.innerText = traços[i].generate()
      elementos[i].label.innerText = `${traços[i].label}:`
    }
  })
}

socket.emit('getNPCs')
socket.on('NPCs', (NPCs)=>{
  if (NPCs.length == 1) {
    add_NPC(NPCs[0])
  } else if (NPCs.length > 1) {
    NPCs.forEach(i=>add_NPC(i))
  }
})

elementos_keys.forEach(i=>{
  elementos[i].button.onclick = ()=>{
    if (!elementos[i].checkbox.checked) {
      elementos[i].span.innerText = traços[i].generate()
      elementos[i].label.innerText = `${traços[i].label}:`
    }
    // gerar_descrição()
  }
})

gerar_nome()
gerar_descrição()

button_salvar_NPC.onclick = async ()=>{
  const NPC = {}
  elementos_keys.forEach(i=>{
    NPC[i] = {}
    // console.log(i.toUpperCase())
    NPC[i].label = traços[i].label
    NPC[i].span = elementos[i].span.innerText
    // console.log(traços[i].label)
    // console.log(elementos[i].span.innerText)
  })
  NPC.nome_alternativo = input_nome_alternativo.value
  NPC.descrição = input_descrição.value
  NPC.nome = span_nome.innerText
  NPC.ancestralidade = [select_ancestralidade.value, select_ancestralidade.querySelector(`[value=${select_ancestralidade.value}]`).innerText]
  NPC.genero = [select_genero.value, select_genero.querySelector(`[value=${select_genero.value}]`).innerText]

  socket.emit('saveNPC', NPC)
  add_NPC(NPC)

  limpar_descrição.click()

  button_salvar_NPC.style.backgroundColor = '#150d99'
  button_salvar_NPC.style.bordercolor = '#00000000'
  query(`#container_de_NPCs_salvos_nomes button[data-nome="${NPC.nome}"]`).style.opacity = 1
  await new Promise(resolve => setTimeout(resolve, 500));
  button_salvar_NPC.style.bordercolor = ''
  button_salvar_NPC.style.backgroundColor = ''
  await new Promise(resolve => setTimeout(resolve, 2000));
  query(`#container_de_NPCs_salvos_nomes button[data-nome="${NPC.nome}"]`).style.opacity = ''
}

tabs_container.onclick = (event)=>{
  trocar_estado_tab(tabs_container)
}

tabs_NPC_container.onclick = (event)=>{
  trocar_estado_tab(tabs_NPC_container)
}

container_de_nomes.onclick = (event)=>{
  trocar_estado_botões(container_de_nomes)
}

// Editar e Remover NPC 
container_de_NPCs_salvos.onclick = (event)=>{
  const botões_editar = container_de_NPCs_salvos.querySelectorAll('.edit')

  botões_editar.forEach(botão_nome=>{
    if (event.target == botão_nome) {
      editar_NPC(botão_nome.closest('div').dataset.nome)
    } 
  })

  const botões_remover = container_de_NPCs_salvos.querySelectorAll('.x')

  botões_remover.forEach(botão_nome=>{
    if (event.target == botão_nome) {
      remover_NPC(botão_nome.closest('div').dataset.nome)
    } 
  })
}


gerar_novamente.onclick = async ()=>{
  gerar_novamente.style.backgroundColor = '#150d99'
  await new Promise(resolve => setTimeout(resolve, 100));
  gerar_novamente.style.backgroundColor = ''
  gerar_nome()
  gerar_descrição()
}

gerar_novo_nome.onclick = ()=>{
  gerar_nome()
}

limpar_descrição.onclick = ()=>{
  input_nome_alternativo.value = ''
  input_descrição.value = ''
}

select_ancestralidade.onchange = ()=>{
  checkbox_ancestralidade.checked = true
}

select_genero.onchange = ()=>{
  if (select_genero.value == neutral) {
    checkbox_ancestralidade.checked = true
    checkbox_genero.checked = true

    ancestralidades_neutras.forEach(element=>{
      element.style.display = 'none'
     })
    select_ancestralidade.value = 'elfo'
    // toggle_ancestry()
  } else {
    ancestralidades_neutras.forEach(element=>{
      element.style.display = ''
    })
  }
}

travar_todos.onclick = ()=>{
  const set_checkbox_status = (status)=>{
    query(`input[type="checkbox"]`).forEach(checkbox=>{
      checkbox.checked = status
    })
  }

  if (travar_todos.dataset.travar == 'true') {
    travar_todos.dataset.travar = false
    set_checkbox_status(false)
  } else {
    travar_todos.dataset.travar = true
    set_checkbox_status(true)
  }

}

checkbox_nome.onclick = ()=>{
  if (checkbox_nome.checked) {
    checkbox_ancestralidade.checked = true
    checkbox_genero.checked = true
  } 
}

checkbox_ancestralidade.onclick = ()=>{
  if (checkbox_nome.checked) {
    checkbox_ancestralidade.click()
  }
}

checkbox_genero.onclick = ()=>{
  if (checkbox_nome.checked) {
    checkbox_genero.click()
  }
}
