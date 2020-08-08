// Procurar o botão
document.querySelector("#add-time")
  .addEventListener('click', cloneField)
// Quando clicar no botãoptimize

// Executar uma ação
function cloneField(){
  //Duplicar campos. Mas que campos?
  fields = document.querySelector('.schedule-item').cloneNode(true)

  // Colocar na página: onde?
  document.querySelector('#schedule-items').appendChild(fields)
}
