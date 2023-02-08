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

    <div class="more-information-mobile">
        <p>Mais informações</p>
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
