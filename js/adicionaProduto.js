import { mainFunctions } from "./main.js";

const formulario = document.querySelector("[data-formulario]");
const btnLimpar = document.querySelector(".form__botoes__limpar")

async function criarProduto(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const preco = document.querySelector("[data-preco]").value;
    const nome = document.querySelector("[data-nome]").value;
    try {
        await mainFunctions.criaProduto(nome, preco, imagem);
    } catch (e) {
        alert(e);
    }
    
}

btnLimpar.addEventListener('click', () => formulario.reset())

formulario.addEventListener("submit", evento => criarProduto(evento));