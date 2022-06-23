var btn = document.getElementById('btn');
var data;

btn.onclick = () => {
    var data_inic = document.getElementById('data_inic').value;
    var data_fin = document.getElementById('data_fin').value;
    var data_restricao = document.getElementById('data_restricao').checked;
    var data_recuperado = document.getElementById('data_recuperado').checked;
}

fetch('')
    .then(response => {
        return response.json()
            .then(data => data);
    }).then((data) => {

    }).catch((err) => { });
