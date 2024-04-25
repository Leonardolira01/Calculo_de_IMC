import { Modal } from './modal.js'

//variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

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

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}