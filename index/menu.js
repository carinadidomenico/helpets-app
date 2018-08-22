const hamburguer = document.querySelector("#hamburguer");
const barra = document.querySelector("#menu");

let contador = 0;

hamburguer.onclick = aparecerBarra;

function aparecerBarra(){
    contador++;
    if(contador % 2){
        barra.style.display = "flex";
    }
    else{
        barra.style.display = "none";
    }
}
