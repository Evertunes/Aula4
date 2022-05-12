let = num1 = 10;
let = num2 = 5;

//Adição

function adicao(num1, num2) {
  let resultado = num1 + num2;

  return resultado
}

//Subtração
function subtracao(num1, num2) {
  let resultado = num1 - num2;

 return resultado

  
}

function multiplicacao(num1, num2) {
  let resultado = num1 * num2;

  return resultado;
}

function divisao(num1, num2) {
  let resultado = num1 / num2;

  return resultado
}


//Numero ao quadrado
function quadradoDoNumero(num1) {
  let resultado = num1 ** 2;
 
  return resultado
  //console.log(` O quadrado de ${num1} é ${resultado}`);
}


//Calcula porcentagem
function calculaPorcentagem(num1, num2) {
    //console.log(`${num2} % de ${num1}`)
    return num1 * (num2 / 100)
    }


console.log("------------Teste de Operações / Calculadora ------------");

//console.log(`
//    O Resultado da adição ${num1} com ${num2} ${adicao(num1, num2)}
//    `);

//console.log(`
//    O Resultado da subtração  ${num1} com ${num2} é ${subtracao(num1, num2)}
//    `);


//    console.log(`
//    O Resultado da multiplicação  ${num1} com ${num2} é ${multiplicacao(num1, num2)}
//    `);

//    console.log(`
//    O Resultado da divisão  ${num1} com ${num2} é ${divisao(0, num2)}
//    `);

//    console.log(`
//    O resultado do quadrado de  ${num1} com ${num2} é ${quadradoDoNumero(num1)}
//    `)






