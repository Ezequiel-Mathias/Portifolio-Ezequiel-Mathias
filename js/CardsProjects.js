
'use strict'

const Projects = [
  
  {
        id: '1',
        nome: 'Website-DevInt',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8-vUr_oP6o0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: ['React.js', 'Typescript', 'SASS', 'Node.js' , 'Express.js', 'Docker'],
        breveDescricao: 'Projeto de conclusão de curso do Senai, uma rede social para devs.',
        descricao: 'Uma rede social somente para devs com o objetivo de fazer a conexão de pessoas que vivem nessa imerção tão incrivel que é o desenvolvimento de sistemas. Feito com diferentes tipos de funcionalidades que só a nossa plataforma DevInt tem !, como o compartilhamento de projetos, interação com o github, e muito mais.',
        pagina: '',
        github: 'https://github.com/Leop4rdo/devint-tcc',
    }, 
    
  
]

const TrainingCard = ({ nome, video, tecnologias, descricao, breveDescricao, pagina, github }) => {

    const card = document.createElement('div')

    card.classList.add('container-card')

    card.innerHTML = `
    <div class="card-project">
        ${video}
    </div>

    <div class="container-about-project">

        <div class="about-project">
            <h1>${nome}</h1>

            <div class="description">
                <p> ${breveDescricao}
                </p>
            </div>
            
        </div>

        <div class="container-more-information">
            <div class="more-information">
            <p>Detalhes</p>  
            </div>
            
        </div>

    </div>

    <div class="container-information"> 

        <div class="information"> 

            <div class="container-close-information">
                <img src="./Icons/close.svg" alt="">
            </div>
            
            <h1>${nome}</h1>

            <div class="description">
             <p>${descricao}</p>
            </div>

            <div class="container-technologies">
                
                <div class="technologies">
                    <span>${tecnologias[0]}</span>
                </div>
                <div class="technologies">
                    <span>${tecnologias[1]}</span>
                </div>

                <div class="technologies">
                    <span>${tecnologias[2]}</span>
                </div>

                <div class="technologies">
                    <span>${tecnologias[3]}</span>
                </div>
            
                <div class="technologies">
                    <span>${tecnologias[4]}</span>
                </div>
                <div class="technologies">
                    <span>${tecnologias[5]}</span>
                </div>
                
            </div>

        </div>
    
        <div class="container-buttons"> 
            
            <a href="${pagina}" target="_blank">
                <div class="button-to-access-pages">Página</div>
            </a>

            <a href="${github}" target="_blank">    
                <div class="button-to-access-pages">Github</div>
            </a>    
            
        </div>
    
    </div>


    `

    return card
}


const ToLoadCard = (projects) => {

    const container = document.querySelector('.container-cards-projects')

    const cards = projects.map(TrainingCard)

    container.replaceChildren(...cards)

}

ToLoadCard(Projects)













