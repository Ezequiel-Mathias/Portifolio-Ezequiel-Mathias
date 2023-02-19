'use strict'


const ProjectsBackend = [
    

]



const TrainingCardBackend = (cardbackend) => {

    const card = document.createElement('div')

    card.classList.add('container-card')

    card.innerHTML = `
    

    <div class="card-project">
        <h2>${cardbackend.nome}</h2>
        
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
            <p>${cardbackend.tecnologias}</p>


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

const ToLoadCardBackend = (projects) => {
    
    const container = document.querySelector('.container-cards-backend')

    const cards = projects.map(TrainingCardBackend)

    container.replaceChildren(...cards)

}



ToLoadCardBackend(ProjectsBackend)