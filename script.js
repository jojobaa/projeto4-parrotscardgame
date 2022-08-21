cartaArray = [];
 let clicou = 0;
 let acertou = 0;
const cards = document.querySelector('.cards');
gifs = [
    "bobross","bobross",
     "explody", "explody",
     "fiesta",  "fiesta",
     "metal", "metal", 
     "revertit", "revertit",
     "triplets",  "triplets", 
     "unicorn","unicorn"  
];

//......................................................................................
let numeroCartas = Number(prompt("Digite o número de cartas que deseja jogar: (números pares entre 4 e 14)"));
while (numeroCartas % 2 !== 0 || numeroCartas < 4 || numeroCartas > 14 || isNaN(numeroCartas)) {
    numeroCartas = prompt("Não atende as regras: (números pares entre 4 e 14)");
}


//.......................................................................................
const ul = document.querySelector('.cards')
for (i = 0; i < numeroCartas; i++) {

         let ul = ` 
       <div class="card-facedown" onclick="transition(this)">
           <div class="pngCard"> 
              <img src="./gifsCards/front.png">
           </div>
           <div class="gifCard gifNone">
              <img src="./gifsCards/${gifs[i]}parrot.gif">
            </div>
       </div>
       `;
    cartaArray.push(ul);
}

//...........................................................................................virar as cartas
function transition(index) {
    index.classList.add('transicao');
    clicou ++;

    if(cardSelecionada === undefined){
        cardSelecionada = index;
    }
    else{
        pares(cardSelecionada, index);
    }
}

cartaArray.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}
cards.innerHTML = cartaArray.join('');

//.............................................................................................
let cardSelecionada;
function pares (primeiroCard, segundoCard){
    cardSelecionada = undefined;
    if(primeiroCard.innerHTML === segundoCard.innerHTML){
        primeiroCard.removeAttribute('onclick');
        segundoCard.removeAttribute('onclick');
        acertou += 2;

        if(numeroCartas === acertou){
            setTimeout (() =>{
                alert(`Você ganhou em ${clicou} jogadas!`);
                jogarNovamente()
            }, 1000)
        }
    }
   
    else{
        setTimeout(() => {
            primeiroCard.classList.remove("transicao");
            segundoCard.classList.remove("transicao");
        }, 1000)
    }
}

//................................................................................................
function jogarNovamente(){
    const msgFinal = prompt("Deseja jogar novamente? (digite sim ou não)");

    if(msgFinal === "sim"){
        window.location.reload();
    }
    else{
        alert("tchau!");
    }
}
