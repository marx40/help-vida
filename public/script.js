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





let perguntaAtual = 1;
let respondeuCorreto = false; 
let acertos = 0;
// ==========================================
document.getElementById('btnResponder').addEventListener('click', function() {
    const resposta = document.getElementById('quiz').value;

    if (resposta === '') {
        document.getElementById('resultado').innerText = 'Por favor, selecione uma resposta.';
        respondeuCorreto = false;
        return;
    }

    if (resposta === 'errada') {
        document.getElementById('resultado').innerText = 'Resposta incorreta. Tente novamente!';
        respondeuCorreto = false; // Continua travado
    } else if (resposta === 'correta') {
        if (!respondeuCorreto){
            acertos = acertos + 1;
            document.getElementById('contadorAcertos').innerText = acertos;
        }
        respondeuCorreto = true; // Libera o botão próximo
        
        if (perguntaAtual === 7) {
            document.getElementById('resultado').innerText = 'Resposta correta! Fim do Quiz! Você acertou ' + acertos + ' de 7 perguntas.';
            document.getElementById('proximo').disabled = true;
            
        } else {
            document.getElementById('resultado').innerText = 'Resposta correta! Clique em Próxima Pergunta.';
        }
    }
});

// ==========================================
// 2. AÇÃO DO BOTÃO PRÓXIMO
// ==========================================
document.getElementById('proximo').addEventListener('click', function() {
    // SÓ DEIXA IR SE APERTOU O BOTÃO VERIFICAR E ACERTOU
    if (!respondeuCorreto) {
        document.getElementById('resultado').innerText = 'Você precisa verificar e acertar a resposta antes de avançar!';
        return; 
    }

    // Reseta a trava para a próxima pergunta obrigar a verificar de novo
    respondeuCorreto = false;

    // Avança o número da pergunta
    perguntaAtual = perguntaAtual + 1;

    // Limpa a seleção e a mensagem anterior
    document.getElementById('quiz').value = '';
    document.getElementById('resultado').innerText = '';

    // Modifica o HTML dependendo da pergunta atual
    if (perguntaAtual === 2) {
        document.getElementById('pergunta').innerText = 'O que fazer em caso de hemorragia?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Aplicar torniquete imediatamente';
        document.getElementById('opcao2').value = 'correta';
        document.getElementById('opcao2').innerText = 'Pressionar o local com pano limpo';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Deitar a pessoa e elevar as pernas';

    } else if (perguntaAtual === 3) {
        document.getElementById('pergunta').innerText = 'O que fazer em caso de afogamento?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Colocar a pessoa de cabeça para baixo';
        
        document.getElementById('opcao2').value = 'errada';
        document.getElementById('opcao2').innerText = 'Dar água para a pessoa beber';
        document.getElementById('opcao3').value = 'correta';
        document.getElementById('opcao3').innerText = 'Chamar socorro e iniciar reanimação se necessário';

    } else if (perguntaAtual === 4) {
        document.getElementById('pergunta').innerText = 'Qual o primeiro passo ao presenciar uma possível parada cardíaca?';
        document.getElementById('opcao1').value = 'correta';
        document.getElementById('opcao1').innerText = 'Verificar a segurança do local e chamar o socorro (192)';
        document.getElementById('opcao2').value = 'errada';
        document.getElementById('opcao2').innerText = 'Iniciar as compressões sem checar a vítima';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Jogar água fria no rosto da pessoa';

    } else if (perguntaAtual === 5) {
        document.getElementById('pergunta').innerText = 'O que deve ser colocado imediatamente sobre uma queimadura de calor?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Pasta de dente ou manteiga';
        document.getElementById('opcao2').value = 'errada';
        document.getElementById('opcao2').innerText = 'Gelo diretamente sobre a ferida';
        document.getElementById('opcao3').value = 'correta';
        document.getElementById('opcao3').innerText = 'Água corrente em temperatura ambiente';

    } else if (perguntaAtual === 6) {
        document.getElementById('pergunta').innerText = 'Como agir diante de uma suspeita de fratura fechada no braço?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Puxar o membro para colocar o osso no lugar';
        document.getElementById('opcao2').value = 'correta';
        document.getElementById('opcao2').innerText = 'Imobilizar o membro na posição que ele se encontra';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Passar pomada para dor e massagear';

    } else if (perguntaAtual === 7) {
        document.getElementById('pergunta').innerText = 'O que fazer primeiro ao socorrer alguém que está sofrendo um choque elétrico?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Puxar a pessoa pelas mãos imediatamente';
        document.getElementById('opcao2').value = 'errada';
        document.getElementById('opcao2').innerText = 'Jogar água para apagar possíveis faíscas';
        document.getElementById('opcao3').value = 'correta';
        document.getElementById('opcao3').innerText = 'Desligar a chave geral de energia ou afastar a vítima com um objeto de madeira seco';
    }
});

// ==========================================
// 3. AÇÃO DO BOTÃO VOLTAR PRO INÍCIO
// ==========================================
document.getElementById('btnInicio').addEventListener('click', function() {
    perguntaAtual = 1;
    respondeuCorreto = false;
    acertos = 0;
    document.getElementById("contadorAcertos").innerHTML = acertos;

    // Restaura as informações da Pergunta 1 original do HTML
        document.getElementById('pergunta').innerText = 'O que fazer em caso de engasgo?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Dar água imediatamente';
        document.getElementById('opcao2').value = 'correta';
        document.getElementById('opcao2').innerText = 'Incentivar a tossir';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Deitar a pessoa';

    // Limpa a tela
    document.getElementById('quiz').value = '';
    document.getElementById('resultado').innerText = 'Quiz reiniciado! Boa sorte.';
});











/*

// Variável para saber qual pergunta está ativa (vai de 1 até 7)
let perguntaAtual = 1;

// ==========================================
// 1. AÇÃO DO BOTÃO RESPONDER
// ==========================================
document.getElementById('btnResponder').addEventListener('click', function() {
    const resposta = document.getElementById('quiz').value;

    if (resposta === 'errada') {
        document.getElementById('resultado').innerText = 'Resposta incorreta. Tente novamente!';
    } else if (resposta === 'correta') {
        // Verifica se chegou na última pergunta
        if (perguntaAtual === 7) {
            document.getElementById('resultado').innerText = 'Resposta correta! Fim do Quiz! Parabéns por concluir!';
            
        } else {
            document.getElementById('resultado').innerText = 'Resposta correta! Clique em Próxima Pergunta.';
        }
    } else {
        document.getElementById('resultado').innerText = 'Por favor, selecione uma resposta.';
    }
});

// ==========================================
// 2. AÇÃO DO BOTÃO PRÓXIMO
// ==========================================
document.getElementById('proximo').addEventListener('click', function() {
    const resposta = document.getElementById('quiz').value;

    // Só deixa avançar se o usuário tiver respondido 'correta'
    if (resposta !== 'correta') {
        document.getElementById('resultado').innerText = 'Você precisa acertar antes de avançar!';
        return; 
    }

    // Avança o número da pergunta
    perguntaAtual = perguntaAtual + 1;

    // Limpa a seleção e a mensagem anterior para a nova pergunta
    document.getElementById('quiz').value = '';
    document.getElementById('resultado').innerText = '';

    // Modifica o HTML dependendo da pergunta atual
    if (perguntaAtual === 2) {
        // PERGUNTA 2 (Hemorragia)
        document.getElementById('pergunta').innerText = 'O que fazer em caso de hemorragia?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Aplicar torniquete imediatamente';
        document.getElementById('opcao2').value = 'correta';
        document.getElementById('opcao2').innerText = 'Pressionar o local com pano limpo';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Deitar a pessoa e elevar as pernas';

    } else if (perguntaAtual === 3) {
        // PERGUNTA 3 (Afogamento)
        document.getElementById('pergunta').innerText = 'O que fazer em caso de afogamento?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Colocar a pessoa de cabeça para baixo';
        document.getElementById('opcao2').value = 'correta';
        document.getElementById('opcao2').innerText = 'Chamar socorro e iniciar reanimação se necessário';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Dar água para a pessoa beber';

    } else if (perguntaAtual === 4) {
        // PERGUNTA 4 (Parada Cardíaca)
        document.getElementById('pergunta').innerText = 'Qual o primeiro passo ao presenciar uma possível parada cardíaca?';
        document.getElementById('opcao1').value = 'correta';
        document.getElementById('opcao1').innerText = 'Verificar a segurança do local e chamar o socorro (192)';
        document.getElementById('opcao2').value = 'errada';
        document.getElementById('opcao2').innerText = 'Iniciar as compressões sem checar a vítima';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Jogar água fria no rosto da pessoa';

    } else if (perguntaAtual === 5) {
        // PERGUNTA 5 (Queimadura)
        document.getElementById('pergunta').innerText = 'O que deve ser colocado imediatamente sobre uma queimadura de calor?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Pasta de dente ou manteiga';
        document.getElementById('opcao2').value = 'errada';
        document.getElementById('opcao2').innerText = 'Gelo diretamente sobre a ferida';
        document.getElementById('opcao3').value = 'correta';
        document.getElementById('opcao3').innerText = 'Água corrente em temperatura ambiente';

    } else if (perguntaAtual === 6) {
        // PERGUNTA 6 (Fratura)
        document.getElementById('pergunta').innerText = 'Como agir diante de uma suspeita de fratura fechada no braço?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Puxar o membro para colocar o osso no lugar';
        document.getElementById('opcao2').value = 'correta';
        document.getElementById('opcao2').innerText = 'Imobilizar o membro na posição que ele se encontra';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Passar pomada para dor e massagear';

    } else if (perguntaAtual === 7) {
        // PERGUNTA 7 (Choque Elétrico)
        document.getElementById('pergunta').innerText = 'O que fazer primeiro ao socorrer alguém que está sofrendo um choque elétrico?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Puxar a pessoa pelas mãos imediatamente';
        document.getElementById('opcao2').value = 'errada';
        document.getElementById('opcao2').innerText = 'Jogar água para apagar possíveis faíscas';
        document.getElementById('opcao3').value = 'correta';
        document.getElementById('opcao3').innerText = 'Desligar a chave geral de energia ou afastar a vítima com um objeto de madeira seco';
    }
    document.getElementById("voltar").addEventListener("click", function voltar(){
                perguntaAtual = 1;

                document.getElementById('pergunta').innerText = 'O que fazer em caso de engasgo?';
        document.getElementById('opcao1').value = 'errada';
        document.getElementById('opcao1').innerText = 'Dar água imediatamente';
        document.getElementById('opcao2').value = 'correta';
        document.getElementById('opcao2').innerText = 'Incentivar a tossir';
        document.getElementById('opcao3').value = 'errada';
        document.getElementById('opcao3').innerText = 'Deitar a pessoa';
                document.getElementById('quiz').value = "";
            })
});



*/






























/* document.getElementById("btnResponder").addEventListener("click", function() {
    const resposta = document.getElementById("quiz").value; 
    if (resposta === "errada") {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente!";
 
    } else if (resposta === "correta") {
        document.getElementById("resultado").innerText = "Resposta correta! Parabéns!";

        document.getElementById("proximo").addEventListener("click", proximo);
    
        function proximo() {
            document.getElementById("quiz").value = "";
            document.getElementById("resultado").innerText = "";
            document.getElementById("pergunta").innerText = "O que fazer em caso de hemorragia?";
            document.getElementById("opcao1").value = "errada";
            document.getElementById("opcao1").innerText = "Aplicar torniquete imediatamente";
            document.getElementById("opcao2").value = "correta";
            document.getElementById("opcao2").innerText = "Pressionar o local com pano limpo";
            document.getElementById("opcao3").value = "errada";
            document.getElementById("opcao3").innerText = "Deitar a pessoa e elevar as pernas";

            if (resposta === "errada") {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente!";
 
    } else if (resposta === "correta") {
        document.getElementById("resultado").innerText = "Resposta correta! Parabéns!";
    

                function proximo() {
            document.getElementById("quiz").value = "";
            document.getElementById("resultado").innerText = "";
            document.getElementById("pergunta").innerText = "O que fazer em caso de afogamento?";
            document.getElementById("opcao1").value = "errada";
            document.getElementById("opcao1").innerText = " colocar a pessoa de cabeça para baixo";
            document.getElementById("opcao2").value = "correta";
            document.getElementById("opcao2").innerText = "Chamar socorro e iniciar reanimação se necessário";
            document.getElementById("opcao3").value = "errada";
            document.getElementById("opcao3").innerText = "Dar água para a pessoa beber";
            
            if (resposta === "errada") {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente!";
 
    } else if (resposta === "correta") {
        document.getElementById("resultado").innerText = "Resposta correta! Parabéns!";

            }
        }
    }
}}});

*/