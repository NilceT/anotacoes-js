const nome = "Gabriel";
const sobrenome = "Santos";
const idade = 23;

//concatenação
const apresentacao1 = ("Meu nome é " + nome + " " + sobrenome + "e eu tenho " + idade + " anos.");
//template de string
const apresentacao2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;

//Descobrir a quantidade de caracteres de uma string
const s = "Olá mundo!";
s.length // length não é um método, é uma propriedade e não precisa de ()

//método utilizado para tornar MAIÚSCULOS os caracteres da string
s.toUpperCase() //toUpperCase é um método, causa ação e precisa de ()
//método utilizado para tornar MINÚSCULOS os caracteres da string
s.toLowerCase() //toLowerCase é um método, precisa de ()
s.substring(0, 5) //Método para fatiar os índices de uma string. Sempre contamos começando por 0. A contagem é sempre o primeiro caractere e o último. OBS: O último índice não será incluido na contagem.
s.split("u") //método split serve como DIVISOR de string, ele divide a string e no terminal ele manda as partes divididas da string (vetor). Caso dentro das "" não seja identificado o caractere da string, ele usará o espaço como divisor. 