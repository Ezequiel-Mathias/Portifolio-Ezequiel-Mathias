'use strict'


const ProjectsBackend = [
    {
        id: '1',
        nome: 'SProjetos Backend',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Projetos Backend',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Projetos Backend',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Projetos Backend',
        video: 'teste',
        tecnologias: 'teste, teste',
        funcaoExercida: 'FrontEnd',
        descricao: 'lsda,k~çsdakkkkkkkkkkkkk',
        pagina: '',
        github: '',
    },

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
    
    `

    return card
}

const ToLoadCardBackend = (projects) => {
    
    const container = document.querySelector('.container-cards-backend')

    const cards = projects.map(TrainingCardBackend)

    container.replaceChildren(...cards)

}

ToLoadCardBackend(ProjectsBackend)