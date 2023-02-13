'use strict'


const ProjectsMobile = [
    {
        id: '1',
        nome: 'SProjetos Mobile',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Projetos Mobile',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Projetos Mobile',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Projetos Mobile',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

]



const TrainingCardMobile = (cardmobile) => {

    const card = document.createElement('div')

    card.classList.add('container-card')

    card.innerHTML = `
    

    <div class="card-project">
        <h2>${cardmobile.nome}</h2>
        
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
            <p>${cardmobile.tecnologias}</p>

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

const ToLoadCardMobile = (projects) => {
    
    const container = document.querySelector('.container-cards-mobile')

    const cards = projects.map(TrainingCardMobile)

    container.replaceChildren(...cards)

}



ToLoadCardMobile(ProjectsMobile)
