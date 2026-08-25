//Forma desnecessária, apenas para mostrar como funciona a lógica do objeto
const nome = "Gabriel";
const sobrenome = "Santos";
const idade = 23;
const passatempos = ["Música", "Filmes", "Esportes"];
const enderecoRua = "Rua Sete";
const enderecoCidade = "Jaboatão";
const enderecoBairro = "Curado 4";

//Objeto, e dentro do objeto contém as propriedades (Criar um array de objetos)
const pessoa = {
    nome: "Gabriel",
    sobrenome: "Santos",
    idade: 23,
    passatempos: ["Música", "Filmes", "Esportes"],
        //Endereço tornou-se objeto para as propriedades contidas nele
        endereco: {
         rua: "Rua sete",
         cidade: "Jaboatão",
         bairro: "Curado 4"}
}
pessoa.nome;//Acessar a propriedade(nome) do objeto(pessoa) 
pessoa.passatempo[0];//Acessar um elemento de uma propriedade
pessoa.endereco.rua;//Acessar uma propriedade de um objeto dentro de uma propriedade

//Criar uma nova propriedade dentro do objeto
pessoa.email = "gabrielsantos@gmail.com";
pessoa.email;
const tarefas = [
    {
        id: 1,
        texto: "Tirar o lixo",
        completo: false
    },
    {
        id: 2,
        texto: "Varrer o chão",
        completo: true
    },
    {
        id: 3,
        texto: "Lavar o carro",
        completo: false
    }
]
//Acessar uma propriedade de um elemento específico 
tarefas[1].texto;

//Formatar um objeto em formato JSON usando o método STRINGIFY
console.log(JSON.stringify(tarefas)); //Imprime uma forma mais fácil de ler o objeto. É uma forma de formatação para o sistema/computador ler