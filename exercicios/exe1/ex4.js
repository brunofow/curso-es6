const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};
// 4.1
const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2

function mostraInfo( { nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }
mostraInfo({ nome: 'Diego', idade: 23 })
