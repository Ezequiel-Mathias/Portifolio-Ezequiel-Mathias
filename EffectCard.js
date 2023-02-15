$('.more-information').on('click', function(evento){
 
    const containerInformationWeb = evento.currentTarget.parentElement.children[2]
    
    containerInformationWeb.style.visibility = "visible"
   
 }); 

  $('.container-close-information').on('click', function(evento){
    
   const containerInformationWeb = evento.currentTarget.parentElement.parentElement
    
   containerInformationWeb.style.visibility = "hidden"
    
 });