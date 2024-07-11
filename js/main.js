async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        header: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível adicionar o produto");
    }    
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id) {
    const deletar = document.querySelectorAll(".produtos__item");
    console.log(deletar)
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE", 
        headers: {
            'Content-Type': 'application/json'
        },

    });
}

export const mainFunctions = {
    listaProdutos,
    criaProduto,
    deletaProduto
}







