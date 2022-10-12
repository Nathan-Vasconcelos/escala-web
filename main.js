const tabela = document.getElementById('corpoTabela');
const botaoAdicionar = document.getElementById('btnAdicionar');
let hs = document.getElementById('hs');
let totalHorasSemanais = 0;

const dia = document.getElementById('dia');
const chegada = document.getElementById('chegada');
const almocoIda = document.getElementById('almocoIda');
const almocoVolta = document.getElementById('almocoVolta');
const saida = document.getElementById('saida');

botaoAdicionar.addEventListener('click', () => {
    //console.log('Adicionando linha na tabela');
    calculaHorasDiaria()
    adicionarLinha();
})

function adicionarLinha() {
    /*console.log(dia.value);
    console.log(chegada.value);
    console.log(almocoIda.value);
    console.log(almocoVolta.value);
    console.log(saida.value);*/

    const novaLinha = document.createElement('tr');
    tabela.appendChild(novaLinha);

    const dadoDia = document.createElement('td');
    dadoDia.innerHTML = dia.value;
    //tabela.appendChild(dadoDia);
    novaLinha.appendChild(dadoDia);

    const dadoChegada = document.createElement('td');
    dadoChegada.innerHTML = chegada.value;
    //tabela.appendChild(dadoChegada);
    novaLinha.appendChild(dadoChegada);

    const dadoAlmocoIda = document.createElement('td');
    dadoAlmocoIda.innerHTML = almocoIda.value;
    //tabela.appendChild(dadoAlmocoIda);
    novaLinha.appendChild(dadoAlmocoIda);

    const dadoAlmocoVolta = document.createElement('td');
    dadoAlmocoVolta.innerHTML = almocoVolta.value;
    //tabela.appendChild(dadoAlmocoVolta);
    novaLinha.appendChild(dadoAlmocoVolta);

    const dadoSaida = document.createElement('td');
    dadoSaida.innerHTML = saida.value;
    //tabela.appendChild(dadoSaida);
    novaLinha.appendChild(dadoSaida);

    tabela.appendChild(dadoDia);
    tabela.appendChild(dadoChegada);
    tabela.appendChild(dadoAlmocoIda);
    tabela.appendChild(dadoAlmocoVolta);
    tabela.appendChild(dadoSaida);
}

function calculaHorasDiaria() {
    let [horaChegada, minutoChegada] = chegada.value.split(':').map(v => parseInt(v));
    //console.log(horaChegada);
    //console.log(minutoChegada);
    let totalMinutosChegada = minutoChegada + (horaChegada * 60);
    //console.log(totalMinutosChegada);

    let [horaAlmocoIda, minutoAlmocoIda] = almocoIda.value.split(':').map(v => parseInt(v));
    let totalMinutosAlmocoIda = minutoAlmocoIda + (horaAlmocoIda * 60);
    //console.log(totalMinutosAlmocoIda);

    let [horaAlmocoVolta, minutoAlmocoVolta] = almocoVolta.value.split(':').map(v => parseInt(v));
    let totalMinutosAlmocoVolta = minutoAlmocoVolta + (horaAlmocoVolta * 60);
    //console.log(totalMinutosAlmocoVolta);

    let [horaSaida, minutoSaida] = saida.value.split(':').map(v => parseInt(v));
    let totalMinutosSaida = minutoSaida + (horaSaida * 60);
    //console.log(totalMinutosSaida);

    let horasDiaria = ((totalMinutosAlmocoIda - totalMinutosChegada) + (totalMinutosSaida - totalMinutosAlmocoVolta)) / 60;
    //console.log(horasDiaria);

    totalHorasSemanais += horasDiaria;

    hs.innerHTML = totalHorasSemanais;

    console.log(totalHorasSemanais);
}
