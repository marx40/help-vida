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
let lendo = false;

document.getElementById("lerPagina").addEventListener("click", function(){
    if (lendo){
        speechSynthesis.cancel();
        lendo = false;
    } else{
        const fala = new SpeechSynthesisUtterance(document.body.innerText);
        fala.lang = "pt-BR"
        speechSynthesis.speak(fala);
        lendo = true;
    }

});

const dicas = [
    "Em queimaduras, lave com água fria por 10 minutos.",
    "Nunca use pasta de dente em queimaduras.",
    "Em sangramentos, pressione o local com pano limpo.",
    "Em engasgo, aplique a manobra de Heimlich.",
    "Se alguém desmaiar, mantenha as pernas elevadas.",
    "Ligue 192 em emergências médicas.",
    "Mantenha a calma.",
    "Chame ajuda imediatamente.",
    "Proteja a vítima.",
    "Não faça procedimentos sem conhecimento.",
      "Verifique se o local está seguro antes de ajudar.",
    "Afaste curiosos para dar espaço.",
    "Observe se a vítima está respirando.",
    "Nunca mova vítima com suspeita de fratura.",
    "Mantenha a vítima confortável.",
    "Em desmaios, afrouxe roupas apertadas.",
    "Use luvas se houver sangue.",
    "Converse com a vítima para acalmá-la.",
    "Anote informações importantes para o socorro.",
    "Não dê alimentos ou água à vítima.",
    "Em convulsões, proteja a cabeça da vítima.",
    "Não coloque objetos na boca durante convulsões.",
    "Em cortes, lave com água limpa.",
    "Mantenha o kit de primeiros socorros por perto.",
    "Peça ajuda a pessoas próximas.",
    "Observe sinais de consciência.",
    "Cubra ferimentos com pano limpo.",
    "Evite aglomeração no local.",
    "Acione socorro rapidamente.",
    "Sempre mantenha a calma e aja com cuidado."
];

document.getElementById("btnDica").addEventListener("click", function () {
    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById("dicaTexto").innerText = dicas[indice];
});