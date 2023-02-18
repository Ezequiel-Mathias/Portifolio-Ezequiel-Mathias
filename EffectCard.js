$('.more-information').on('click', function(evento){
 
    const containerInformationWeb = evento.currentTarget.parentElement.children[2]
    
    containerInformationWeb.style.visibility = "visible"

   
   
 }); 

  $('.container-close-information').on('click', function(evento){
    
   const containerInformationWeb = evento.currentTarget.parentElement.parentElement
    
   containerInformationWeb.style.visibility = "hidden"
    
 });

 /* containerInformationWeb.children[1].children[0] */

 //pegando o que tem no href do botão 
 $('.button-page-or-page-github').on('click', function(evento){
    
 console.log(evento.currentTarget.parentElement.attributes.href.nodeValue)
   
});