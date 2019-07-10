/*  Jogo do Galo
    
    Jogo do Galo
    9 quadrados
    a1 a2 a3
    b1 b2 b3
    c1 c2 c3

    2 jogadores: 
    | jogador 1 - x - player1.png √
    | jogador 2 - o - player1.png √
    
    1 Jogador de cada vez 
    | mudar de jogador a cada jogada √
    | contar os click (se o valor do click for impar jogador 1 | se for par jogador 2) √
    | mudar de jogador a cada click √ ???
    | adicionar imagem a cada jogador √
    | não poder clicar novamente no mesmo  ?

    | guardar uma posicao para poder determinar se vai ganhar ??

    Vencer o Jogo
    | jogador fazer linha
    | vencer por chaves ?
    | ver possiveis chaves ?
    | 
    */
  
function startGame() {
    document.getElementById("startGame").className = "jogo";
    document.getElementById("PlayerPlay1").classList.add("PlayerPlay");
    removeStart();
}

function removeStart() {
    var icon = document.getElementById("iconStart");
    icon.classList.remove("Icon--home");
    icon.classList.remove("Icon");

    var title = document.getElementById("titleStart");
    title.classList.remove("Sart--Title");

    var link = document.getElementById("linkStart");
    link.classList.add("EndPlay");
}

var player1 = [document.getElementsByClassName("player1")];
var player2 = [document.getElementsByClassName("player2")];

var player1Win;
var player2Win;

var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

function empate() {
        
    var emp = document.getElementsByClassName("player1");
    if (emp.length == 5) {
        endGame();
        var vencedor3 = document.getElementById("RStartE");
        vencedor3.classList.add("PlayerPlay");
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    }
}

function jogadorVencedor() {
    if (a1.classList[1] + a2.classList[1] + a3.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        //alert('player1 venceu');
    }
    else if (b1.classList[1] + b2.classList[1] + b3.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        
    }
    else if (c1.classList[1] + c2.classList[1] + c3.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        
    }
    else if (a1.classList[1] + b1.classList[1] + c1.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        
    }
    else if (a2.classList[1] + b2.classList[1] + c2.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        
    }
    else if (a3.classList[1] + b3.classList[1] + c3.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        
    }
    else if (c1.classList[1] + c2.classList[1] + c3.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        
    }
    else if (a1.classList[1] + b2.classList[1] + c3.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        
    }
    else if (a3.classList[1] + b2.classList[1] + c1.classList[1] == 'player1player1player1') {
        endGame();
        Player1Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        
    }

    else if (a1.classList[1] + a2.classList[1] + a3.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
        //alert('player2 venceu');
    }
    else if (b1.classList[1] + b2.classList[1] + b3.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    
    }
    else if (c1.classList[1] + c2.classList[1] + c3.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    
    }
    else if (a1.classList[1] + b1.classList[1] + c1.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    
    }
    else if (a2.classList[1] + b2.classList[1] + c2.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    
    }
    else if (a3.classList[1] + b3.classList[1] + c3.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    
    }
    else if (c1.classList[1] + c2.classList[1] + c3.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    
    }
    else if (a1.classList[1] + b2.classList[1] + c3.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    
    }
    else if (a3.classList[1] + b2.classList[1] + c1.classList[1] == 'player2player2player2') {
        endGame();
        Player2Win();
        document.getElementById("PlayerPlay1").classList.add("EndPlay");
        document.getElementById("PlayerPlay2").classList.add("EndPlay");
    
    }
}

var clicks = 0;

function onClick(el) {
    //incrementar clicks
    clicks += 1;
    //console.log('clicks');
    //mostrar
    //document.getElementById("clicks").innerHTML = clicks;
};

function mudarDeJogador(el) {
    //defenir se o click é par ou impar
    if (clicks & 1) {
        console.log('player2');
        //defenir background da div por classe
        el.classList.add("player2");
        document.getElementById("PlayerPlay2").classList.remove("PlayerPlay");
        document.getElementById("PlayerPlay3").classList.add("PlayerPlay");
        
    }
    else {
        console.log('player1');
        //defenir background da div por classe
        el.classList.add("player1");
        document.getElementById("PlayerPlay3").classList.remove("PlayerPlay");
        document.getElementById("PlayerPlay1").classList.remove("PlayerPlay");
        document.getElementById("PlayerPlay2").classList.add("PlayerPlay");
    }
    jogadorVencedor();
    empate();
}

function endGame() {
    //retirar jogo
    var ganhar = document.getElementById("startGame");
    ganhar.classList.add("EndPlay");
    document.getElementById("RStart").classList.add("PlayerPlay");
}

function Player1Win() {
    //mostar vencedor
    var vencedor1 = document.getElementById("Player1Win");
    vencedor1.classList.add("PlayerPlay");
}

function Player2Win() {
    //mostar vencedor
    var vencedor2 = document.getElementById("Player2Win");
    vencedor2.classList.add("PlayerPlay");
}