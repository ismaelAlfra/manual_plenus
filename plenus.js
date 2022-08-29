// let seta = document.querySelector("#seta");
// let setaVoltar = document.querySelector("#seta-voltar")
// let parte1 = document.querySelector(".parte1");
// let seta1 = parte1.querySelector("#seta");

// let parte2 = document.querySelector(".parte2");
// let seta2 = parte2.querySelector("#seta");
// let setaVoltar2 = parte2.querySelector("#seta-voltar");

// let parte3 = document.querySelector(".parte3");
// let seta3 = parte3.querySelector("#seta");
// let setaVoltar3 = parte3.querySelector("#seta-voltar");

// let parte4 = document.querySelector(".parte4");
// let seta4 = parte4.querySelector("#seta");
// let setaVoltar4 = parte4.querySelector("#seta-voltar");

// let parte5 = document.querySelector(".parte5");
// let setaVoltar5 = parte5.querySelector("#seta-voltar");

// seta1.addEventListener("click", function(){
//     console.log("clicou");
//     parte1.style.width = "0";
  
// })
// setaVoltar2.addEventListener("click", function(){
//     parte1.style.width = "100%";
// })
// seta2.addEventListener("click", function(){
//     console.log("clicou");
//     parte2.style.width = "0";
  
// })
// setaVoltar3.addEventListener("click", function(){
//     parte2.style.width = "100%";
// })
// seta3.addEventListener("click", function(){
//     console.log("clicou");
//     parte3.style.width = "0";

// })
// setaVoltar4.addEventListener("click", function(){
//     parte3.style.width = "100%";
// })
// seta4.addEventListener("click", function(){
//     console.log("clicou");
//     parte4.style.width = "0";

// })
// setaVoltar5.addEventListener("click", function(){
//     parte4.style.width = "100%";
// })
let elementos = document.querySelectorAll(".anima");
let nav = document.querySelector(".nav-barra");
let opcao = nav.querySelectorAll("h2");
let cont1 = document.querySelector("#conteudo1");
let partes1 = cont1.querySelectorAll("#partes");
console.log(partes1);
let cont4 = document.querySelector("#conteudo4");
let partes = cont4.querySelectorAll("#partes");
let voltar = cont4.querySelectorAll("#seta-voltar");
let prox = document.querySelectorAll("#seta");

function slide(secao){
    for(let i = 0; i < secao.length; i++){
        if(secao[i].children[1].children[0].addEventListener("click", function(){
            console.log("clicou");
            secao[i].style.width = "0";
        })){
        }
    }
    for(let i = 0; i < secao.length; i++){
        if(secao[i].children[0].children[0].addEventListener("click", function(){
            console.log("clicou");
            secao[i-1].style.width = "100%";
        })){
        }
    }
    
}

function slideSoTxt(secao){
    for(let i = 0; i < secao.length; i++){
        if(secao[i].children[0].children[1].addEventListener("click", function(){
            console.log("clicou");
            secao[i-1].style.width = "100%";
        })){
        }
    }
    for(let i = 0; i < secao.length; i++){
        if(secao[i].children[0].children[0].addEventListener("click", function(){
            console.log("clicou");
            secao[i].style.width = "0";
        })){
        }
    }
    
}

function posicao(){
    let topo = window.pageYOffset + 400;
    elementos.forEach(function(conteudos){
        // console.log("Em relação ao topo"+conteudos.offsetTop);
        // console.log("Em relação ao fundo"+conteudos.offsetBottom);
        if(topo > conteudos.offsetTop && topo < conteudos.offsetTop + conteudos.offsetHeight){
            conteudos.style.maxWidth = "100%";
            conteudos.style.opacity = "1"
            for(i of opcao){
                if(i.id == conteudos.childNodes[1].firstElementChild.firstElementChild.innerHTML){
                    i.classList.add("aumentar");
                }
                else{
                    i.classList.remove("aumentar");
                }
            }
        }
        
        else{
            conteudos.style.maxWidth = "0";
            conteudos.style.opacity = "0";

        }
        if(topo <= 770){
            opcao[0].classList.remove("aumentar");
        }
    })
        

    
    
}
let cont3 = document.querySelector("#conteudo3");
let partes3 = cont3.querySelectorAll("#partes");
console.log(partes3);

slide(partes3);
slide(partes);
slideSoTxt(partes1);
window.addEventListener("scroll", function(){
   posicao();
})