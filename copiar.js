const copiar = document.querySelector('#copiarPromo')

function copywithSucess() {
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
  })
  
  Toast.fire({
  icon: 'success',
  title: 'Cupom copiado para área de transferência'
  })}

function copytoClipboard() {
    navigator.clipboard.writeText("VEMPRARED").then(() => {
        copywithSucess()
    })
}

function discord() {
    window.open('https://discord.gg/redhosting', '_blank');
}