if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(reg => alert('Registro de SW exitoso \n' + reg))
  .catch(err => alert('Error al tratar de registrar el sw\n' + err))
}