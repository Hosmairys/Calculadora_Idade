// Algoritmo:

// 1. Pegar os valores
// 2. Calcular a Idade
//       a. Com base no ano
//       b. Com mês (EXTRA)
//       c. Com dia (EXTRA)+

// 3. Gerar a faixa etária

//     Resultado            Faixa
//     0 à 12                Criança
//     13 à 17                Adolescente
//     18 à 65               Adulto
//     Acima de 65         Idoso


// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;


//FUNÇÂO Principal
function calculadoraIdade(event) {
    
    console.log("oi!");
    event.preventDefault();

    let dadosUsuario = pegarValores();

    let idade = calcular(dadosUsuario.dia, dadosUsuario.mes, dadosUsuario.ano);
    
    let classificarIdade = classificar(idade);
    console.log(classificarIdade);

    let dadosUsuarioAtualizado = organizarObjeto(dadosUsuario, classificarIdade, idade);
}

// Passo 1 - Pegar os valores
function pegarValores() {
    let nomeRecibido = document.getElementById("nome").value.trim();

    let diaNacimentoRecibida = parseInt(document.getElementById("dia-nascimento").value);

    let mesNacimentoRecibida = parseInt(document.getElementById("mes-nascimento").value);

    let anoNacimentoRecibido = parseInt(document.getElementById("ano-nascimento").value);

    let dadosUsuario = {
        nome: nomeRecibido,
        dia: diaNacimentoRecibida,
        mes: mesNacimentoRecibida,
        ano: anoNacimentoRecibido
    }

    console.log(dadosUsuario);

    return dadosUsuario;
}


// Passo 2 - Calcular a Idade
function calcular(dia, mes, ano) {
    let anoAtual = new Date().getFullYear();
    // console.log(anoAtual);
    let idade = anoAtual - ano

    console.log(idade);
    
    return idade;
}

// Passo 3 - Gerar a faixa etária
function classificar(idade) {
    if (idade < 12) {
        return "Criança"
    }else if (idade < 17 ) {
        return "Adolescente"
    }else if (idade < 65) {
        return "Adulto"
    } else {
        return "Idoso"
    }
}

// Passo 4 - Organizar o objeto pessoa para salvar na lista
function organizarObjeto(dadosUsuario, classificarIdade, idade) {
    let dataHoraAtual = Intl.DateTimeFormat("pt-BR", { timeStyle: "long", dateStyle: "short" }).format(Date.now())

    let dadosUsuarioAtualizado = {
        ... dadosUsuario, 
        idade: idade,
        clasificacao: classificarIdade,
        dataCadastro: dataHoraAtual 
    }

    return dadosUsuarioAtualizado
    console.log(dadosUsuarioAtualizado);
}
