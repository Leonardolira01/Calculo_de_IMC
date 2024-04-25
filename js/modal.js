export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open() {
      Modal.wrapper.classList.add('open')
  },
  close() {
      Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}
//ou posso fazer assim, quando a arrow tem apenas uma linha, posso tirar as chaves:
// modalBtnClose.onclick = () => modalWrapper.classList.remove('open')
