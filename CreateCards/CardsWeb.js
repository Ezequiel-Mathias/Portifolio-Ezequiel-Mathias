
'use strict'

const ProjectsWeb = [
    {
        id: '1',
        nome: 'Site Clttone Pixabey',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Site Cltone Pixabey',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Site Cltone Pixabey',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Site Cltone Pixabey',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

]

const TrainingCardWeb = (cardweb) => {

    const card = document.createElement('div')

    card.classList.add('container-card')

    card.innerHTML = `
    

    <div class="card-project">
        <h2>${cardweb.nome}</h2>
        
    </div>

    <div class="more-information-web">
        <p>Mais informações</p>
    </div>
    
    <div class="container-information-web"> 

        <div class="container-close-information">
            <img src="./Icons/close.svg" alt="">
        </div>
        
        <div class="information-web"> 
        <h3>Tecnologias:</h3>
        <p>HTML5, CSS, Javascript</p>


        <h3>Função exercida:</h3>
        <p>FrontEnd</p>

        <h3>Breve descrição sobre o projeto:</h3>
        <p>Projeto muito legal feito por mim kkkkkksdlskdkskds ne não ? dlfçlsdklkdfaçlkdçlfk</p>
        </div>
        

        <div class="container-buttons"> 
        <div class="button-page-or-page-github">Página</div>
        <div class="button-page-or-page-github">Github</div>
        </div>
        
    </div>    

    `

    return card
}




const ToLoadCardWeb = (projects) => {
    const container = document.querySelector('.container-cards-web')

    const cards = projects.map(TrainingCardWeb)

    container.replaceChildren(...cards)

}

ToLoadCardWeb(ProjectsWeb)


/* const btnMoreInformationWeb = document.querySelector('.more-information-web')

const CardInformationWeb = document.querySelector('.container-information-web')

const CloseInformationWeb = document.querySelector('.container-close-information img')

btnMoreInformationWeb.addEventListener('click', function () {

    CardInformationWeb.style.visibility = 'visible'
})

CloseInformationWeb.addEventListener('click', function () {


    CardInformationWeb.style.visibility = 'hidden'

}) */

const CardInformationWeb = document.getElementsByClassName("container-information-web")

$('.more-information-web').click(function(e){
	CardInformationWeb.style.visibility = 'visible'
})



