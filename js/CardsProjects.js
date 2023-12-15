
'use strict'

const Projects = [

    {
        id: '0',
        nome: 'Website-DevInt',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8-vUr_oP6o0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: ['React.js', 'Typescript', 'SASS', 'Node.js', 'Express.js', 'Docker'],
        breveDescricao: 'Projeto de conclusão de curso do Senai, uma rede social para devs.',
        descricao: 'Uma rede social somente para devs com o objetivo de fazer a conexão de pessoas que vivem nessa imersão tão incrível que é o desenvolvimento de sistemas. Feito com diferentes tipos de funcionalidades que só a nossa plataforma DevInt tem!, como o compartilhamento de projetos, iteração com Github, e muito mais.',
        pagina: '',
        github: 'https://github.com/Leop4rdo/devint-tcc',
    },

    {
        id: '1',
        nome: 'Lista de tarefas',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yUPHfeGzoSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: ['Javascript', 'HTML5', 'CSS3'],
        breveDescricao: 'Uma lista de tarefas com diferentes funcionalidades.',
        descricao: 'Feita com o uso de local storage e com diferentes funções tais como, editar, apagar, filtrar e criar uma tarefa sua do dia.',
        pagina: 'https://ezequiel-mathias.github.io/To-do-list/',
        github: 'https://github.com/Ezequiel-Mathias/To-do-list',
    },

    {
        id: '2',
        nome: 'MoviesLib',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/recMZvC-jaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: ['React.js', 'Typescript', 'SASS'],
        breveDescricao: 'Consumo API filmes tmdb, com algumas funcionalidades e recursos de pesquisa.',
        descricao: 'Diferentes funções para você procurar aquele filme que você tanto quer ver e saber mais detalhes dele.',
        pagina: 'https://ezequiel-mathias-project-movies-lib-nu.vercel.app/',
        github: 'https://github.com/Ezequiel-Mathias/Project-Movies-Lib',
    },
    {
        id: '3',
        nome: 'Feliz Natal',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/AAqXnQqcYpk?si=asvyVMNCWgLsrKiT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: ['React.js', 'Typescript', 'SASS'],
        breveDescricao: 'Com o intuito de comemoração e a ideia de fazer doações.',
        descricao: 'Nas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.',
        pagina: 'https://feliz-natal-ezequiel-mathias.vercel.app/',
        github: 'https://github.com/Ezequiel-Mathias/Feliz-Natal',
    },
    {
        id: '4',
        nome: 'Página de login',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/CxqA0KYggbw?si=Uj93HjO12ex8TdLf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: ['React.js', 'Typescript', 'SASS'],
        breveDescricao: 'Uma ideia de uma página de login para utilizar em qualquer projeto.',
        descricao: 'Página de login base para ser utilizada de diferentes formas.',
        pagina: 'https://login-page-one-tau.vercel.app/',
        github: 'https://github.com/Ezequiel-Mathias/Login-Page',
    }

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













