const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
const idades = usuarios.map(item => item.idade);

console.log(idades);

// 2.2

const filter = usuarios.filter(item => item.idade > 18 && item.empresa === "Rocketseat")

console.log(filter);

// 2.3
const findGoogle = usuarios.find(item => item.empresa === "Google");

console.log(findGoogle);

// 2.4
const newIdade = usuarios.map(item => ({ ...item ,idade: item.idade * 2}))
    .filter(item => item.idade < 50);

console.log(newIdade);