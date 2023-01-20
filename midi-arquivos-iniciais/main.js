function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio);

   
   if(elemento != null && elemento.localName === 'audio'){

        elemento.play()

   }

}

const listaDeTeclas = document.querySelectorAll('.tecla')

/*
let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    contador++


}
*/


for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    //Inseridndo efeito na tecla ao clicar com o enter

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }

        console.log(evento)
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
   
}