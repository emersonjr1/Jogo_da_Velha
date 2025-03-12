let classBox = document.querySelectorAll(".boxCol")

let jogadores = {
    X: "image/rock_velha_Remove.png",
    O: "image/velha_rock2_img.png"
}
 
 let jogadasVencedoras = [
    [0, 1, 2 ], [3,4,5], [6,7,8],
    [0, 3, 6], [1,4,7], [2,5,8],
    [0,4,8], [6,4,2]
 ]

 
let jogador = "X";
let tabuleiro = ["","","","","","","","",""];
let jogoAtivo = true;
let contraPC = false;

classBox.forEach(function (box){
    box.addEventListener("click", function(){
        if(jogoAtivo && tabuleiro[box.id] === "") {
        tabuleiro[box.id] = jogador;
        let img = document.createElement("img");
        img.src = jogadores[jogador];
        box.appendChild(img);
        verificarVencedor();
        jogador = jogador === "X" ? "O" : "X";  
        if (jogoAtivo && contraPC && jogador === "O") {
        jogadaPc() 
        }
    }
    })
})
 
function verificarVencedor(){
    for(let jogada of jogadasVencedoras) {
        const [a,b,c] = jogada;
        if (
            tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]){
                jogoAtivo = false;
                alert("Ganhei!! Cadê minha dentadura!");
                return
            }
    }
    if(!tabuleiro.includes("")) {
        jogoAtivo = false;
        alert("Empate");
    }
}
 
const botaoReset = document.getElementById("returnBtn");
botaoReset.addEventListener("click", reiniciarJogo)

function reiniciarJogo() {
    tabuleiro = ["","","","","","","","",""];
    jogador  = "X";
    jogoAtivo = true;
    classBox.forEach((box) => {
        box.innerHTML = "";
        console.log(box)
    })
}