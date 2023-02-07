
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

    <div class="more-information">
        <p>Mais informações</p>
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