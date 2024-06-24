const form = document.getElementById('agenda-contato');
const nomeContato = document.getElementById('contato');
const telContato = document.getElementById('telefone');
const totalContatos = document.getElementById('total-contatos');

let nomes = []
let tel = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTotalContatos();
});


function adicionarLinha(){
    if(nomes.includes(nomeContato.value) || tel.includes(telContato.value)) {
        alert(`O nome ${nomeContato.value} ou telefone ${telContato.value} já forão inseridos na lista`)
    } else {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML += `
            <tr>
                <td>${nomeContato.value}</td>
                <td>${telContato.value}</td>
            </tr>
            `
            nomes.push(nomeContato.value);
            tel.push(telContato.value);
            }
        
        nomeContato.value = '';
        telContato.value = '';
}


function atualizarTotalContatos(){
    let somaTotalContatos = nomes.length;
    totalContatos.innerHTML = somaTotalContatos;
}


