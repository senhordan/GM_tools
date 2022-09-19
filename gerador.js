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



// const ancestrys = {
//   "anão": anão,
//   "elfo": elfo,
//   "gnomo": gnomo,
//   "goblin": goblin,
//   "halfling": halfling,
//   "humano": humano,
//   "meio_elfo": meio_elfo,
//   "meio_orc": meio_orc
// }

// const neutral_ancestrys = {
//   "elfo": elfo,
//   "gnomo": gnomo,
//   "humano": humano,
//   "meio_orc": meio_orc
// }

// const generos = ['male', 'female']

// const generate_NPC = ()=>{

//   const select_genero = query('select.genero')
//   const select_ancestralidade = query('select.ancestralidade')
//   const span = query('div.nome span')

//   let ancestralidade = random(Object.entries(ancestrys))[0]

//   let genero = random(generos)
//   let checkbox_genero = query('input[type="checkbox"].genero')
//   if (checkbox_genero.checked) {
//     genero = select_genero.value
//     ancestralidade = random(Object.entries(neutral_ancestrys))[0]
//   }

//   let checkbox_ancestralidade = query('input[type="checkbox"].ancestralidade')
//   if (checkbox_ancestralidade.checked) {
//     ancestralidade = select_ancestralidade.value
//   }

//   let nome 
//   let checkbox_nome = query('input[type="checkbox"].nome')
//   if (!checkbox_nome.checked) {
//     select_genero.value = genero

//     // ancestralidade = ancestralidade
//     // span.innerText = ancestrys[ancestralidade][genero]()
//     // 

//     if (ancestralidade == 'humano') {
//       console.log(ancestralidade)
//       nome = ancestrys[ancestralidade][genero]()

//       ancestralidade = nome[0]
//       nome = nome[1]

//     } else {
//       nome = ancestrys[ancestralidade][genero]()
//     }

//     select_ancestralidade.value = ancestralidade
//     span.innerText = nome
//   }

// }

const generate_all = ()=>{

  emptys = query('[data-empty="false"]')
  if (emptys.length > 1) {
    emptys.forEach(element=>{
      element.dataset.empty = 'true'
    })
  };

  // query('select.ancestralidade').value
  

  // generate_NPC()

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
    query('select.ancestralidade').value = 'any'
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

regenerate.onclick = ()=>{
  generate_all()
}

generate_all()

