
'use strict'

const ProjectsWeb = [

    {
        id: '1',
        nome: 'Projeto de TCC Senai',
        video: '<iframe width="100%" height="80%" src="https://www.youtube.com/embed/8-vUr_oP6o0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: 'React, SASS e Typescript ',
        funcaoExercida: 'FrontEnd',
        descricao: 'Projeto de conclusão de curso do senai, uma rede social para devs, minha função nesse projeto foi desde a prototipação de telas ao consumo de APIS, projeto de código privado.',
        pagina: 'https://ezequiel-mathias.github.io/Consumo-API-Pixabay/',
        github: 'https://github.com/Ezequiel-Mathias/Consumo-API-Pixabay',
    },
    {
        id: '2',
        nome: 'Site Clone Pixabey',
        video: '<iframe width="100%" height="80%" src="https://www.youtube.com/embed/n1Czn608AQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: 'HTML, CSS e Javascript',
        funcaoExercida: 'FrontEnd',
        descricao: 'Site básico criado com a API da pixabey com o intuito de estudar sobre APIS.',
        pagina: 'https://ezequiel-mathias.github.io/Consumo-API-Pixabay/',
        github: 'https://github.com/Ezequiel-Mathias/Consumo-API-Pixabay',
    },


]

const TrainingCardWeb = ({nome , video , tecnologias , descricao, funcaoExercida, pagina, github}) => {

    const card = document.createElement('div')

    card.classList.add('container-card')

    card.innerHTML = `
    <div class="card-project">
        <h2>${nome}</h2>
        ${video}
    </div>

    <div class="more-information">
        <p>Mais informações</p>  
    </div>

    <div class="container-information"> 

        <div class="information"> 

            <div class="container-close-information">
                <img src="./Icons/close.svg" alt="">
            </div>
            
            <h3>Tecnologias:</h3>
            <p>${tecnologias}</p>

            <h3>Função exercida:</h3>
            <p>${funcaoExercida}</p>

            <h3>Breve descrição sobre o projeto:</h3>
            <p>${descricao}</p>

        </div>
    
        <div class="container-buttons"> 
            
        
            <a href="" target="_blank">
                <div class="button-page-or-page-github">Página</div>
            </a>

            <a href="${github}" target="_blank">    
                <div class="button-page-or-page-github">Github</div>
            </a>    
            
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

 


  



 




