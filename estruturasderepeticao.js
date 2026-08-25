let contador = 0;
while (contador < 3){
    console.log("miau");
    contador += 1;
}
for (let i = 0; i <= 10; i++) {
    console.log(`Número de repetição for: ${i}`);
}
const tarefas = [
    { 
        id: 1,
        texto: "Tirar o lixo",
        completo: false,
    },
    {
        id: 2,
        texto: "Jantar com esposa",
        completo: false,
    },
    {
        id: 3,
        texto: "Reunião com o chefe",
        completo: true,
    },
];
for (let i = 0; i < tarefas.length; i++) { //Usamos para discorrer a constante/vetor
    console.log(`Tarefa ${i}: ${tarefas[i].texto}`);//Acessamos o vetor tarefa, logo acessamos o elemento texto dentro de tarefa
} // Ou algo mais simples que acessa diretamente o texto 
for (let tarefa of tarefas) { //Para determinado elemento do vetor X, execute o próximo bloco de código.
    console.log(tarefa.texto);
}