// Procurar o botão
document.querySelector("#add-time")
  .addEventListener('click', cloneField)
// Quando clicar no botãoptimize

// Executar uma ação
function cloneField(){
  //Duplicar campos. Mas que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  // limpar os novos campos: Que campos?
  const fields = newFieldContainer.querySelectorAll('input')//para limpar os
                                                        //campos no novo horário
  //para cada campo novo, limpar
  fields.forEach(function(field) {
      //pega o field do momento e limpa ele {
      field.value = ""
  })

  // Colocar na página: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
