let personagens = []

function adicionarPersonagem(){

let nome = document.getElementById("nomePersonagem").value

if(nome === "") return

personagens.push({
nome:nome,
efeitos:[]
})

document.getElementById("nomePersonagem").value=""

render()
}

function editarPersonagem(index){

let novoNome = prompt("Novo nome do personagem")

if(!novoNome) return

personagens[index].nome = novoNome

render()
}

function deletarPersonagem(index){

if(confirm("Remover personagem?")){
personagens.splice(index,1)
render()
}

}

function adicionarEfeito(index){

let nome = prompt("Nome do efeito")
let duracao = parseInt(prompt("Duração inicial"))

if(!nome || !duracao) return

personagens[index].efeitos.push({
nome:nome,
duracao:duracao
})

render()
}

function aumentarEfeito(p,e){

personagens[p].efeitos[e].duracao++

render()
}

function diminuirEfeito(p,e){

personagens[p].efeitos[e].duracao--

if(personagens[p].efeitos[e].duracao<=0){
personagens[p].efeitos.splice(e,1)
}

render()
}

function removerEfeito(p,e){

personagens[p].efeitos.splice(e,1)

render()
}

function passarTurno(){

personagens.forEach(p=>{

p.efeitos.forEach(e=>{
e.duracao--
})

p.efeitos = p.efeitos.filter(e=>e.duracao>0)

})

render()
}

function resetarTudo(){

if(confirm("Resetar tudo?")){
personagens=[]
render()
}

}

function render(){

let container = document.getElementById("personagens")

container.innerHTML=""

personagens.forEach((p,pIndex)=>{

let div = document.createElement("div")

div.className="personagem"

let html=`

<div class="nomePersonagem">

<h2>${p.nome}</h2>

<button class="btn editar"
onclick="editarPersonagem(${pIndex})">
<i class="fa-solid fa-pen"></i>
</button>

<button class="btn deletar"
onclick="deletarPersonagem(${pIndex})">
<i class="fa-solid fa-trash"></i>
</button>

</div>

<button class="btn adicionar"
onclick="adicionarEfeito(${pIndex})">
<i class="fa-solid fa-plus"></i>
Efeito
</button>

`

p.efeitos.forEach((e,eIndex)=>{

html+=`

<div class="efeito">

<span>${e.nome}</span>

<button class="btn adicionar"
onclick="aumentarEfeito(${pIndex},${eIndex})">+</button>

<span>${e.duracao}</span>

<button class="btn deletar"
onclick="diminuirEfeito(${pIndex},${eIndex})">-</button>

<button class="btn deletar"
onclick="removerEfeito(${pIndex},${eIndex})">
<i class="fa-solid fa-trash"></i>
</button>

</div>

`

})

div.innerHTML=html

container.appendChild(div)

})

}