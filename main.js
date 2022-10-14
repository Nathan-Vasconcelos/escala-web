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
    if(chegada.value !== '' && almocoIda.value !== '' && almocoVolta.value !== '' && saida.value !== '') {
        somarHoraDia();
        adicionarLinha();
    } else {
        alert ('Informe os horários!');
    }

    //somarHoraDia();
    //somarHora(subtrairHoraDia(evento.target.parentNode.parentNode.cells));
    //console.log(evento.target.parentNode.parentNode.cells);
    //adicionarLinha();
})

function adicionarLinha() {
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

    const novoBotao = document.createElement('td');
    novoBotao.classList.add('btn');
    //novaLinha.appendChild(novoBotao);

    const botaoRemover = document.createElement('button');
    botaoRemover.innerHTML = 'Remover';
    botaoRemover.classList.add('btn-remover');
    novoBotao.appendChild(botaoRemover);
    novaLinha.appendChild(novoBotao);

    tabela.appendChild(novaLinha);

    botaoRemover.addEventListener('click', (evento) => {
        subtrairHora(subtrairHoraDia(evento.target.parentNode.parentNode.cells));
        removerLinha(evento.target.parentNode);
    })
}

function somarHoraDia() {
    let [horaChegada, minutoChegada] = chegada.value.split(':').map(v => parseInt(v));
    let totalMinutosChegada = minutoChegada + (horaChegada * 60);
    //console.log(horaChegada);
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

    //totalHorasSemanais += horasDiaria;

    //hs.innerHTML = totalHorasSemanais;
    somarHora(horasDiaria);
}

function removerLinha(elemento) {
    elemento.parentNode.remove();
}

function subtrairHoraDia(listaHorarios) {
    let [horaChegada, minutoChegada] = listaHorarios[1].textContent.split(':').map(v => parseInt(v));
    let totalMinutosChegada = minutoChegada + (horaChegada * 60);

    let [horaAlmocoIda, minutoAlmocoIda] = listaHorarios[2].textContent.split(':').map(v => parseInt(v));
    let totalMinutosAlmocoIda = minutoAlmocoIda + (horaAlmocoIda * 60);

    let [horaAlmocoVolta, minutoAlmocoVolta] = listaHorarios[3].textContent.split(':').map(v => parseInt(v));
    let totalMinutosAlmocoVolta = minutoAlmocoVolta + (horaAlmocoVolta * 60);

    let [horaSaida, minutoSaida] = listaHorarios[4].textContent.split(':').map(v => parseInt(v));
    let totalMinutosSaida = minutoSaida + (horaSaida * 60);

    let horasDiaria = ((totalMinutosAlmocoIda - totalMinutosChegada) + (totalMinutosSaida - totalMinutosAlmocoVolta)) / 60;

    //totalHorasSemanais -= horasDiaria;

    //hs.innerHTML = totalHorasSemanais;
    return horasDiaria;
}

function somarHora(horasDiaria) {
    totalHorasSemanais += horasDiaria;

    hs.innerHTML = totalHorasSemanais;

    console.log(totalHorasSemanais);
}

function subtrairHora(horasDiaria) {
    totalHorasSemanais -= horasDiaria;
    hs.innerHTML = totalHorasSemanais;
}
