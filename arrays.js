const vetor = ["A", 10, "oi", 1.5, true]; //assim que criamos um array
const frutas = ["maçãs", "laranjas", "pêras", "Uvas"];
const numeros = [1, 2, 3, 4, 5];

//Obter um valor
frutas[0] //Busquei o elemento e escolhi o índice dentro do array. O resultado será maçãs
frutas[1] // laranjas

//Adicionar um elemento ao array
frutas[4] = "melancias"; //ao imprimir no terminal o elemento[5] > melancias será adicionado ao array frutas, logo se tornará o índice 4
//Alterar o valor de um elemento
frutas[1] = "limões"; // ao imprimir no terminal o elemento[1] será alterado de laranjas>limões

//Adicionar um elemento no final do array
frutas.push("morangos"); //O elemento morangos será adicionado ao final do array
//Adicionar um elemento no incio do array
frutas.unshift("mangas");

//Remover o último elemento do array
frutas.pop();
const fruta_removida = frutas.pop(); //Imprime o elemento que foi removido do array (último elemento)
//Remover o primeiro elemento do array
frutas.shift();
const fruta_removida1 = frutas.shift(); //Imprime o elemento que foi removido do array (primeiro elemento)

//Verificar o índice de um elemento
frutas.indexOf("limões"); //Imprime o índice do elemento limões
//Verificar se a const ou elemento é um Array
Array.isArray(frutas); //O terminal define se true or false