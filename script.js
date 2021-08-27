document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change",atualizarPreco) //primeiro evento q quero executa e dps a funcao q vai ser executada
document.querySelector("#js").addEventListener("change",atualizarPreco)

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    let preco = qtde * 100;
    if (temJS) preco *= 1.1 

    document.querySelector("#preco").innerHTML =  `R$ ${preco.toFixed(2)}`
}    
