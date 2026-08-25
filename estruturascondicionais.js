
//Expressão BOOLEANA. o == é um operador lógico de igualdade
//o ELSE está envolvivo com a condição IF, caso o código da condição IF não seja ativada, o ELSE responderá com o código contido na própria estrututa.
/* if (x == y){
    console.log("X é igual a Y");
} else {
    console.log("X não é igual a Y");
} 
*/ 
const x = 10;
const y = 20;
if (x > y){
    console.log("X é maior que Y");
} else if (x == y){
    console.log("X é igual a Y");
} else if (x < y){
    console.log("X é menos que Y");
}
const cor = "Azul";

switch (cor){
    case "Azul":
        console.log("A cor é azul");
        break;
    case "Vermelho": 
        console.log("A cor é vermelho");
        break;
    case "Verde": 
        console.log("A cor é verde");
        break;
    default:
        console.log("A cor não é azul, nem vermelho, nem verde");
}
const contador = 5;

switch (contador) {
    case 5:
        console.log("5");
    case 4:
        console.log("4");
    case 3:
        console.log("3");
    case 2:
        console.log("2");
    case 1:
        console.log("1");
    default: 
        console.log("BOOOOOOMMM!!");
}
const sexo = "M";
switch (sexo) {
    case "M":
    case "m":
        console.log("O sexo é masculino");
        break;
    case "F":
    case "f":
        console.log("O sexo é feminino");
        break;
    default:
        console.log("Inválido");
}

//Podemos fazer assim
let numero;
if (cor == "vermelho"){
    numero = 10;
} else {
    numero = 20;
}
//Ou utilizando Operador ternário
let numero2 = cor == "vermelho" ? 10 : 20; //Temos a variável, a condição, a pergunta e a resposta para VERDADEIRO OU FALSO
    console.log(numero2);
    
