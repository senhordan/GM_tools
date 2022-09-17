// document.onkeyup = function(e) {if (e.ctrlKey && e.which == 66) {
//     // alert("Ctrl + B shortcut combination was pressed");
//   } 
// };

const create_generate = (variavel, id)=>{
  let div = query(`#${id} [data-empty="true"]`)
  if (div.length == 2) {div = div[0]}
  if (div.length != 0) {
    const checkbox = div.querySelector(`input[type="checkbox"]`)
    if (!checkbox.checked) {
      const label = div.querySelector(`label`)
      const span = div.querySelector(`span`)
      const input = div.querySelector(`input[type="button"]`)

      div.dataset.empty = 'false'
      div.className = variavel.var_name
      checkbox.className = variavel.var_name
      label.innerText = variavel.label
      span.innerText = variavel.generate()

      input.onclick = ()=>{
        if (!checkbox.checked) {
          span.innerHTML = `${variavel.generate()}`
        }
      }
    }
  }
}

const generate = (variavel)=>{
  const div = query(`div.${variavel.var_name}`)
  const checkbox = div.querySelector(`input[type="checkbox"]`)
  if (!checkbox.checked) {
    const span = query(`div.${variavel.var_name} span`)
    span.innerHTML = `${variavel.generate()}`

    div.querySelector('input[type="button"]').onclick = ()=>{
      if (!checkbox.checked) {
        span.innerHTML = `${variavel.generate()}`
      }
    }
  } 
}

const generate_all = ()=>{
  emptys = query('[data-empty="false"]')
  if (emptys.length > 1) {
    emptys.forEach(element=>{
      element.dataset.empty = 'true'
    })
  }

  const vars_appearance2 = [tatuagem, roupas, joia]
  create_generate(vars_appearance2[random_number(0, vars_appearance2.length)], 'NPC_appearance');

  const vars_appearance1 = [olhos, orelhas, boca, queixo, outros_traços_faciais, mãos, cicatrizes]
  create_generate(vars_appearance1[random_number(0, vars_appearance1.length)], 'NPC_appearance');

  const vars_behavior = [quando_calmo, quando_estressado, fé, defeito]
  create_generate(vars_behavior[random_number(0, vars_behavior.length)], 'NPC_behavior');


  [local_de_nascimento, pais, lar, biografia, corpo, altura, cabelo, humor].forEach(variavel=>{generate(variavel)});
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

regenerate.onclick = ()=>{
  generate_all()
}

generate_all()

