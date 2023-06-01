$('.more-information').on('click', function (evento) {

  const containerInformation = evento.currentTarget.parentElement.parentElement.parentElement.children[2]

  containerInformation.style.visibility = "visible"
  
  const ButtonPaginaHref = containerInformation.children[1].children[0].attributes.href.nodeValue
  const ButtonGithubHref = containerInformation.children[1].children[1].attributes.href.nodeValue

  if (!ButtonPaginaHref) {
    containerInformation.children[1].children[0].children[0].style.display = "none"
    containerInformation.children[1].style.gap = "0px"
  }
  if (!ButtonGithubHref) {
    containerInformation.children[1].children[1].children[0].style.display = "none"
    containerInformation.children[1].style.gap = "0px"
  }

  // Doing the treatment, if a span has undefined data in the empty case, I give it a display none

  $('.technologies').map((index, value) => {
    const TechnologiesSpan = value.children[0].innerHTML;

    if( TechnologiesSpan == 'undefined')
      value.style.display = "none"

  }) 

  
});

// Closing the card

$('.container-close-information').on('click', function (evento) {

  const containerInformation = evento.currentTarget.parentElement.parentElement

  containerInformation.style.visibility = "hidden"

});

