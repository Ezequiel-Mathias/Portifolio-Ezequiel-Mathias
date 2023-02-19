$('.more-information').on('click', function (evento) {

  const containerInformationWeb = evento.currentTarget.parentElement.children[2]

  containerInformationWeb.style.visibility = "visible"

  const ButtonPaginaHref = containerInformationWeb.children[1].children[0].attributes.href.nodeValue
  const ButtonGithubHref = containerInformationWeb.children[1].children[1].attributes.href.nodeValue

  if (!ButtonPaginaHref) {
    containerInformationWeb.children[1].children[0].children[0].style.display = "none"
    containerInformationWeb.children[1].style.gap = "0px"
  }
  if (!ButtonGithubHref) {
    containerInformationWeb.children[1].children[1].children[0].style.display = "none"
    containerInformationWeb.children[1].style.gap = "0px"
  }
});

$('.container-close-information').on('click', function (evento) {

  const containerInformationWeb = evento.currentTarget.parentElement.parentElement

  containerInformationWeb.style.visibility = "hidden"

});

