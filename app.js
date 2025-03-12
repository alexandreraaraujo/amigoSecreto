let listaAmigos = [];
let amigoSorteado = 0;

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}




function adicionarAmigo() {
        let nome = document.querySelector('input').value
    if (nome === ''){
        window.alert('Você precisa digitar um nome válido.'); 
    } else{
        listaAmigos.push(nome);
        limparCampo();
        console.log(listaAmigos);
    } 
    
   
   //criar a lista com os nomes
   const lista = document.getElementById("listaAmigos");
   lista.innerHTML = "";
   for (let i = 0; i < listaAmigos.length; i++) {
    // 4. Criar um novo elemento <li> para cada amigo
    const item = document.createElement("li");
    // Atribuir o nome do amigo como conteúdo do <li>
    item.textContent = listaAmigos[i];
    // Adicionar o elemento <li> à lista
    lista.appendChild(item);
  }
}


function reiniciarJogo() {
    listaAmigos = []
        document.getElementById('listaAmigos').innerHTML = '';
}

function sortearAmigo(){
    let quantidade=  listaAmigos.length;
    console.log(quantidade);
    let posicao = Math.floor(quantidade* Math.random())
    let text = "O amigo secreto sorteado é: "+listaAmigos[posicao];
    document.getElementById('resultado').innerHTML = text;
    reiniciarJogo();
   
}