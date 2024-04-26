import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//Fechar a janela de erro ao digitar no campo
//evento é de nome input
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

// 3 maneiras de criar e atribuir função a um evento:
// 1 - form.onsubmit = function() {}

// 2 - form.onsubmit = () => {}
//     form.onsubmit = (event) => {

// 3 - form.onsubmit = handleSubmit
//     function handleSubmit() {
//
//     }

// Vou escolher a número 2:
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
      AlertError.open()
      return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}