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

  const vars_appearance2 = [tatuagem, roupas, joia]
  create_generate(vars_appearance2[random_number(0, vars_appearance2.length)], 'NPC_appearance');

  const vars_appearance1 = [olhos, orelhas, boca, queixo, outros_traços_faciais, mãos, cicatrizes]
  create_generate(vars_appearance1[random_number(0, vars_appearance1.length)], 'NPC_appearance');

  const vars_behavior = [quando_calmo, quando_estressado, fé, defeito]
  create_generate(vars_behavior[random_number(0, vars_behavior.length)], 'NPC_behavior');

    ;

  [local_de_nascimento, pais, lar, biografia, corpo, altura, cabelo, humor].forEach(variavel=>{generate(variavel)});
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

  let span_option
  let NPC = ''
  query('h2:not(.descrição), div[class] label, span, select').forEach(i=>{
    label = i.innerText
    tag = i.localName
    if (tag == 'h2') {
      label = label.toUpperCase()
      NPC += `${label}\n`
    } else {
      if (tag == 'select') {
        label = i.querySelector(`option[value="${i.value}"]`).innerText
      } else {
        label = `${label}`
      }
      if (!span_option) {
        span_option = label
      } else {
        NPC += `  ${span_option} ${label}\n`
        span_option = ''
      }
    }
  })
  const descrição = query('.descrição textarea').value
  const nome_alternativo = query('.descrição input').value

  console.log(nome_alternativo)
  console.log(descrição)
  console.log(NPC)
}