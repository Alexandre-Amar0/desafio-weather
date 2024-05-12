
async function getEndereco() {
    const cep = document.getElementById('inputCEP').value;
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('tdLogradouro').value = data.logradouro;
        document.getElementById('tdBairro').value = data.bairro;
        document.getElementById('tdLocalidade').value = data.localidade;
    }
    catch(error){
        alert(error.alert);
    }
}
async function getPrevision() {
    const lat = document.getElementById('inputLat').value;
    const lon = document.getElementById('inputLon').value;
    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('inputResultadoPrevisao').value = `${data.hourly.temperature_2m[0]}° C`;
    }
    catch(error){
        alert(error.alert);
    }
}
