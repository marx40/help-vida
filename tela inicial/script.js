const btnAcess = document.getElementById("btnAcess");
const menuAcess = document.getElementById("menuAcess")
let tamanhoFonte = 16;

btnAcess.addEventListener("click", function (){
    menuAcess.classList.toggle("hidden");
});
// modo escuro
document.getElementById("modoEscuro").addEventListener("click", function(){
    document.body.classList.toggle("dark");
});
// aumentar fonte
document.getElementById("aumentarFonte").addEventListener("click", function(){
    if( tamanhoFonte <=20 ){
        tamanhoFonte +=2;
    document.body.style.fontSize = tamanhoFonte + "px";
    }
    
});
// diminuirr fonte
document.getElementById("diminuirFonte").addEventListener("click", function(){
    if (tamanhoFonte > 12){
        tamanhoFonte -=2;
    document.body.style.fontSize = tamanhoFonte + "px";
    }
    
});
document.getElementById("altoContraste").addEventListener("click", function(){
    document.body.classList.toggle("contraste");
});
