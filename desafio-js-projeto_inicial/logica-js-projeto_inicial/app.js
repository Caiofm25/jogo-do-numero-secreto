// function calcIMC(altura, peso) {}

function valorFatorial(valor) {
  let count = valor - 1;
  let valorCalculado = valor;
  if (valor === 0 || valor === 1) {
    return 1;
  }
  while (valor > count && count >= 1) {
    valorCalculado *= count;
    count--;
  }
  return valorCalculado;
}

console.log(valorFatorial(5));
