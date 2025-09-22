async function buscarEGerarCodigo() {
    try {
        const resposta = await fetch('https://aisenseapi.com/services/v1/timestamp');
        const dados = await resposta.json();
        const timestamp = dados.timestamp;

        const segundos = Math.floor(timestamp / 10000);
        const codigo = segundos % 10000;
        const codigoFormatado = codigo.toString().padStart(4, '0');

        console.log("Timestamp da API:", timestamp);
        console.log("Código:", codigoFormatado);
    } catch (erro) {
        console.error('Falha ao buscar dados:', erro);
    }
}

setTimeout(() => {
    buscarEGerarCodigo();
    setInterval(buscarEGerarCodigo, 10000);
}, 3000);