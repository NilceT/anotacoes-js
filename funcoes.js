function dizer_ola_pedro() {
    console.log("Olá Pedro");
}

function dizer_ola_luiz() {
    console.log("Olá Luiz");
}

function dizer_ola_carlos() {
    console.log("Olá Carlos");
}
dizer_ola_pedro();
dizer_ola_luiz();
dizer_ola_carlos();

function dizer_ola(nome) {
    console.log("Olá " + nome);
}

dizer_ola("Pedro");
dizer_ola(); //Isso aqui reproduz "Undefined"

function se_apresentar(nome, idade="?") {
    console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos");
    
}

se_apresentar("Maria", 25);
se_apresentar("Bruno", 24);
se_apresentar("Davi");

function criar_nome_completo(nome, sobrenome, sexo) {
    sexo = sexo.toUpperCase();
    if (sexo=="M") {
        return `Sr. ${nome} ${sobrenome}`;
    } else if (sexo=="F") {
        return `Sra. ${nome} ${sobrenome}`;
    } else {
        return `${nome} ${sobrenome}`;
    }
     
}
const nomeCompleto = criar_nome_completo("Pedro", "Silva", "m");
const nomeCompleto2 = criar_nome_completo("Maria", "Helena", "F");
console.log(nomeCompleto);
console.log(nomeCompleto2);

//Funções Seta]
const dizer_oi = () => console.log("Oi");
dizer_oi();

const dizer_oi_tudo_bem = () => {
    console.log("Oi!");
    console.log("Tudo bem?");
}
dizer_oi_tudo_bem();
const somar = (x, y) => {
    return x + y;
}
const resultado = somar(10, 15);
