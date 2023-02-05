'use strict'

const projcts = [
    {
        id: '1',
        nome: 'Teste',
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
            <video controls width="417px" src="./Videos-Projects/Web.mp4" type="Web/mp4"></video>
        </div>

        <div class="more-information">
            <p>Mais informações</p>
        </div>

    `

    return card
}

const ToLoadCard = (projects) => {
    const container = document.querySelector('.card')

    const cards = projects.map(CreateCard)

    container.replaceChildren(...cards)

}

ToLoadCard(projcts)



