/*console.logi = function (e) {
  alert(e)
}*/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(reg => console.log('Registro de SW exitoso \n' + reg, reg))
  .catch(err => console.log('Error al tratar de registrar el sw\n' + err))
}
console.log(8)