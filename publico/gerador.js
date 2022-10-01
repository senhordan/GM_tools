socket = io()

const add_NPC = (NPC)=>{

  let aaa = ''
  console.log(NPC)
  NPC.traits.forEach(obj=>{
    const var_name = Object.keys(obj)[0]
    const text = Object.values(obj)[0]
    try {
      const label = traits[var_name].label
      aaa += `${label}: ${text}`
    } catch(e) {
      if (var_name == 'BIOGRAFIA' || var_name == 'APARÊNCIA' || var_name == 'COMPORTAMENTO') {
        aaa += `${var_name}`
      } else {
        aaa += `${toTitleCase(var_name)}: ${text}`

      }
    }
  })

  NPCs_salvos = query('div.NPCs_salvos')
  NPCs_salvos.innerHTML += [
    `<div data-NPC_nome="${NPC.nome_alternativo}">`,
      `<input type="button" value="✏️">`,
      `<input type="button" value="❌">`,
      `<h4 onclick="func('${NPC.nome_alternativo}')" style="display: inline; margin-left: 1em; user-select: none;">${NPC.nome_alternativo}</h4>`,
      `<p class="descrição" style="display: none;">${NPC.descrição}</p>`,
      `<div class="traços" style="display: none;">${aaa}</div>`,
    `</div>`,
    `<hr>`
  ].join('')
  // query(`[data-NPC_nome="${NPC.nome_alternativo}"] .traços`).innerHTML = aaa

}

func = (a)=>{
  p_descrição = query(`[data-NPC_nome="${a}"] .descrição`)
  div_traços = query(`[data-NPC_nome="${a}"] .traços`)
  if (p_descrição.style.display == 'none') {
    p_descrição.style.display = ''
    div_traços.style.display = ''
  } else {
    p_descrição.style.display = 'none'
    div_traços.style.display = 'none'
  }
  
}

socket.emit('getNPCs')
socket.on('NPCs', (NPCs)=>{
  if (NPCs.length == 1) {
    add_NPC(NPCs[0])
  } else if (NPCs.length > 1) {
    NPCs.forEach(i=>add_NPC(i))
  }
})

// document.onkeyup = function(e) {if (e.ctrlKey && e.which == 66) {
//     // alert("Ctrl + B shortcut combination was pressed");
//   } 
// };

const check = (checkbox, span, variavel, label)=>{
  if (!checkbox.checked) {
    if (label) {
      label.innerText = `${variavel.label}:`
    }
    span.innerHTML = variavel.generate()
  }
}

const create_generate = (variavel, id)=>{
  let div = query(`#${id} [data-empty="true"]`)
  if (div.length == 2) {div = div[0]}
  if (div.length != 0) {
    const checkbox = div.querySelector(`input[type="checkbox"]`)
    const label = div.querySelector(`label`)
    const span = div.querySelector(`span`)
    const input = div.querySelector(`input[type="button"]`)

    div.dataset.empty = 'false'
    div.className = variavel.var_name
    checkbox.className = variavel.var_name

    check(checkbox, span, variavel, label)

    input.onclick = ()=>{
      check(checkbox, span, variavel)
    }
  }
}

const generate = (variavel)=>{
  const div = query(`div.${variavel.var_name}`)
  const checkbox = div.querySelector(`input[type="checkbox"]`)
  const span = query(`div.${variavel.var_name} span`)

  check(checkbox, span, variavel)
  
  div.querySelector('input[type="button"]').onclick = ()=>{
      check(checkbox, span, variavel)
    }
}
let nome_atual
const generate_npc = ()=>{

  select_ancestralidade = query('select.ancestralidade')
  select_genero = query('select.genero')
  checkbox_ancestralidade = query('input[type="checkbox"].ancestralidade')
  checkbox_genero = query('input[type="checkbox"].genero')
  checkbox_nome = query('input[type="checkbox"].nome')
  span = query('div.nome span')

  let genero = random(['male', 'female'])
  if (checkbox_genero.checked) {
    genero = select_genero.value
  }


  let ancestralidade = random(query('select.ancestralidade option')).value

  if (checkbox_ancestralidade.checked) {
    ancestralidade = select_ancestralidade.value
  }

  let nome_e_ancestralidade = ancestralidades[ancestralidade][genero]()

  ancestralidade = nome_e_ancestralidade[0]
  nome = nome_e_ancestralidade[1]

  if (checkbox_nome.checked) {
    nome = span.innerHTML
  }

  // generate_NPC()
  select_genero.value = genero
  select_ancestralidade.value = ancestralidade
  span.innerHTML = nome
}

const generate_all = ()=>{

  emptys = query('[data-empty="false"]')
  if (emptys.length > 1) {
    emptys.forEach(element=>{
      element.dataset.empty = 'true'
    })
  };

  generate_npc()

  const vars_appearance2 = [traços.tatuagem, traços.roupas, traços.joia]
  create_generate(vars_appearance2[random_number(0, vars_appearance2.length)], 'NPC_appearance');

  const vars_appearance1 = [traços.olhos, traços.orelhas, traços.boca, traços.queixo, traços.outros_traços_faciais, traços.mãos, traços.cicatrizes]
  create_generate(vars_appearance1[random_number(0, vars_appearance1.length)], 'NPC_appearance');

  const vars_behavior = [traços.quando_calmo, traços.quando_estressado, traços.fé, traços.defeito]
  create_generate(vars_behavior[random_number(0, vars_behavior.length)], 'NPC_behavior');

    ;

  [traços.local_de_nascimento, traços.pais, traços.lar, traços.biografia, traços.corpo, traços.altura, traços.cabelo, traços.humor].forEach(variavel=>{generate(variavel)});
}


query('select.genero').onchange = ()=>{
  if (query('select.genero').value == neutral) {
    query('[data-neutral="false"]').forEach(element=>{
      element.style.display = 'none'
     })
    query('select.ancestralidade').value = 'elfo'
    // toggle_ancestry()
  } else {
    query('[data-neutral="false"]').forEach(element=>{
      element.style.display = ''
    })
  }
}

toggle_all.onclick = ()=>{
  query(`input[type="checkbox"]`).forEach(checkbox=>{
    if (toggle_all.checked) {
      checkbox.checked = true
    } else {
      checkbox.checked = false
    }
  })
}

query('input[type="checkbox"].nome').onclick = ()=>{
  if (query('input[type="checkbox"].nome').checked) {
    query('input[type="checkbox"].ancestralidade').checked = true
    query('input[type="checkbox"].genero').checked = true
  } else {
    query('input[type="checkbox"].ancestralidade').checked = false
    query('input[type="checkbox"].genero').checked = false
  }
}

query('input[type="checkbox"].ancestralidade').onclick = ()=>{
  if (query('input[type="checkbox"].nome').checked) {
    query('input[type="checkbox"].ancestralidade').click()
  }
}

query('input[type="checkbox"].genero').onclick = ()=>{
  if (query('input[type="checkbox"].nome').checked) {
    query('input[type="checkbox"].genero').click()
  }
}

regenerate.onclick = ()=>{
  generate_all()
}

generate_all()

const salvar_NPC = ()=>{

  let label
  let div
  const NPC = {}
  traits = []
  query('#NPC_container label, #NPC_container span, #NPC_container select, #NPC_container h2')  
    .forEach(i=>{
    text = i.innerText
    tag = i.localName
    if (tag == 'h2') {
      text = text.toUpperCase()
       traits.push({[text]:text})
       // console.log(i.closest('div'))
    } else {
      if (tag == 'select') {
        text = i.querySelector(`option[value="${i.value}"]`).innerText
      } 
      if (!label) {
        label = text
        div = i.closest('div').className
      } else {
        traits.push({[div]:text})
        // traits.push(div)
        // traits += `<p><label style="margin-left: 1em;">${label}</label> <span>${text}</span></p>`
        label = ''
      }
    }
  })
  NPC.traits = traits
  NPC.descrição = query('.descrição textarea').value
  // age >= 21 ? "Beer" : "Juice"
  NPC.nome_alternativo = query('.descrição input').value == '' ? query('.nome span').innerText : query('.descrição input').value
  // NPC.nome_alternativo = query('.descrição input').value
  NPC.nome = query('.nome span').innerText

  // socket.emit('saveNPC', NPC)
  // console.log(NPC.nome_alternativo)
  // console.log(NPC.descrição)
  // console.log(NPC.traços)
  query('.descrição input').value = ''

  if (query('.nome span').innerText != nome_atual) {
    add_NPC(NPC)
    nome_atual = query('.nome span').innerText
  }

}