cartaArray = [];
//embaralhaAsCartas[];

//prompt
let numeroCartas = prompt("Digite o número de cartas que deseja jogar: (números pares entre 4 e 14)");
while (numeroCartas % 2 !== 0 || numeroCartas < 4 || numeroCartas > 14 || isNaN(numeroCartas)) {
    numeroCartas = prompt("Não atende as regras: (números pares entre 4 e 14)");
}

//
function adicionarCartas() {
    const ul = document.querySelector('.cards')
    for (i = 0; i < numeroCartas; i++) {

        ul.innerHTML = ul.innerHTML + ` 
       <li class="card-facedown" onclick="transition(this)"> 
           <img src="./gifsCards/front.png">        
       </li>
       `;
        cartaArray.push(ul);
    }
}
console.log(cartaArray);

//virar as cartas
function transition() {
    const cartaVirada = document.querySelector('.card-facedown');
    cartaVirada.classList.add('transicao');
}


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa