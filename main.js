const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(.aba-conteudo);
for(let i=0;i < botoes.length; i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j < botoes.leight; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores=document.querySelectorAll(".contador");
const tempoObjetivo1=newDate("2024-12-31T00:00:00");
const tempoObjetivo2=newDate("2024-10-09T00:00:00");
const tempoObjetivo3=newDate("2025-05-11T00:00:00");
const tempoObjetivo4=newDate("2024-11-30T00:00:00");
let tempoAtual=newDate();
const tempos = [tempoObjetivo1];
const tempos = [tempoObjetivo2];
const tempos = [tempoObjetivo3];
const tempos = [tempoObjetivo4];

function calculaTempo(tempoObjetivo){
    let tempoAtual = newDate();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
}

if(tempoFinal>0) {
    return[dias,horas,minutos,segundos];
}else {
    return[0,0,0,0];
}

function atualizaCronometro(){
    document.getElementByld("dias"+i).textContent= calculaTempo(tempos[i])[0];
    document.getElementByld("dias"+i).textContent= calculaTempo(tempos[i])[1];
    document.getElementByld("dias"+i).textContent= calculaTempo(tempos[i])[2];
    document.getElementByld("dias"+i).textContent= calculaTempo(tempos[i])[3];
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

.comecaCronometro();
