import { mainFunctions } from "./main.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, preco,imagem, id) {
    const produto = document.createElement('li');
    produto.className = "produtos__item";
    produto.setAttribute('data-id', id)
    produto.innerHTML = `
        <div class="card" data-card>
            <img src="${imagem}" alt="Imagem do Produto">
            <div class="card-container--info">
                <p id="nome">${nome}</p>
                <div class="card-container--value">
                    <p>Preço: $${preco}</p>
                    <img src="./assets/icon_lixeira.png" alt="Ícono de eliminación" class="lixeira">
                </div>
            </div>
        </div>`

    const btnDelete = produto.querySelector(".lixeira");
    btnDelete.addEventListener('click', () => {
            mainFunctions.deletaProduto(id)
        }
    );
    return produto;
    
}

async function printarProdutos() {
    try {
        const listaDeprodutos = await mainFunctions.listaProdutos();
        console.log(listaDeprodutos)
        listaDeprodutos.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)))
        
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar a lista de produtos. </h2>`
    }
    
}


printarProdutos();

