function exemploCallback(numero, callback) {
  const nomeServiço = 'Serviço de multiplicação';
  setTimeout(() => {
    callback(numero * 10, nomeServiço)
  }, 3000);
}

console.log('Início da execução');
exemploCallback(25, function(resultado, funcao) {
  console.log('Função Assíncrona');
  console.log(funcao);
  console.log(resultado);
  console.log('Fim da função assíncrona');
})
console.log('Fim da execução síncrona do código');