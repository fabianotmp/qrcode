const horario = document.querySelector('span');

async function iniciarRelogio() {
    try {
        const resposta = await fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo');
        const dados = await resposta.json();
        let tempoAtual = new Date(dados.datetime);

        setInterval(() => {
            tempoAtual.setSeconds(tempoAtual.getSeconds() + 1);

            const horas = String(tempoAtual.getHours()).padStart(2, '0');
            const minutos = String(tempoAtual.getMinutes()).padStart(2, '0');
            const segundos = String(tempoAtual.getSeconds()).padStart(2, '0');

            horario.textContent = `${horas}:${minutos}:${segundos}`;
        }, 1000);

    } catch (erro) {
        console.error('Falha ao buscar horário:', erro);
    }
}

iniciarRelogio();