// Funções e métodos;
// Estruturas de repetição;
// Escopos.

const stack = {
    javaScripts: 'JavaScript',
    HTML: 'HTML',
    CSS: 'CSS',
    ReactNative: 'ReactNative'

}

const usuarios = [
    {nome: 'Danielle', tecnologias : ['HTML', 'CSS', 'JavaScript']},
    {nome: 'Vando', tecnologias : ['HTML', 'CSS', 'JavaScript', 'ReactNative']},
    {nome: 'Taise', tecnologias : ['MySQL', 'HTML', 'JavaScript']}
]

for (let i of usuarios) {

    let minhasTecnologias = [];

    i.tecnologias.map((valor, index) => {
        if(index === 0){
            minhasTecnologias.push(valor)
        } else if(index === i.tecnologias.length -1){
            minhasTecnologias.push(' e ' +  valor)

        }else {
            minhasTecnologias.push(', ' +  valor)
        }
    })

    console.log(i.nome, 'trabalha com', minhasTecnologias.join(''));
}

//busca se trabalha com determinada tecnologia

function checaSeUsuarioUsaATecnologia(usuario,tecnologia) {
    if(usuario.tecnologias.indexOf(tecnologia) !== -1){
        return true;
    }
}

for (let i = 0; i < usuarios.length; i++) {
    var tecnologia = stack.ReactNative;
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaATecnologia(usuarios[i],tecnologia);

    if (usuarioTrabalhaComCSS) {
      console.log( usuarios[i].nome, `trabalha com ${tecnologia}`);
    }
}

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9],
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0],
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9],
  },
];

usuarios.map((usuario) => {
  console.log(    `${usuario.nome} possui saldo ${      reduce(usuario.receitas) - reduce(usuario.despesas) > 0        ? "POSITIVO"        : "NEGATIVO"    } de ${(reduce(usuario.receitas) - reduce(usuario.despesas)).toFixed(2)}`  );
});

function reduce(array) {
  return array.reduce((a, b) => a + b);
}
