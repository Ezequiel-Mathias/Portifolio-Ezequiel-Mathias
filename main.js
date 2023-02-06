'use strict'

const projcts = [
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

const CreateCard = (projects) => {

    const card = document.createElement('div')

    card.classList.add('container-card-project')

    card.innerHTML = `
    

    <div class="card-project">
        <h2>${projects.nome}</h2>
        
    </div>

    <div class="more-information">
        <p>Mais informações</p>
    </div>
    
        

    `

    return card
}

const ToLoadCard = (projects) => {
    const container = document.querySelector('.container-cards-frontend-web')

    const cards = projects.map(CreateCard)

    container.replaceChildren(...cards)

}

ToLoadCard(projcts)


//Effect card more information

/* const MoreInformation = () => {

    console.log('aaaaa')
    document.querySelector(".container-card-project").innerHTML = `
    
    <div class="teste"> </div>

 `
    

}


document.addEventListener('click' , MoreInformation) */