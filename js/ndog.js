const hamburguer = document.querySelector("#burguer");
const barra = document.querySelector("#menu");
const heart = document.querySelector("#heart");

let contador = 0;

hamburguer.onclick = aparecerBarra;

heart.onclick = trocarTela;

function aparecerBarra(){
    contador++;
    if(contador % 2){
        barra.style.display = "flex";
    }
    else{
        barra.style.display = "none";
    }
}

function trocarTela(){
    window.location.href = "../content/nusu.html";
}