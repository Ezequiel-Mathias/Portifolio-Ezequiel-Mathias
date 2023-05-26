
'use strict'

const ProjectsWeb = [

    {
        id: '1',
        nome: 'Projeto de TCC Senai',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/n1Czn608AQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: 'React, SASS e Typescript ',
        funcaoExercida: 'FrontEnd',
        descricao: 'Site básico criado com a API da pixabey com o intuito de estudar sobre APIS.',
        pagina: '',
        github: '',
    },

    {
        id: '2',
        nome: 'Site Clone Pixabey',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/n1Czn608AQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: 'HTML, CSS e Javascript',
        funcaoExercida: 'FrontEnd',
        descricao: 'Site básico criado com a API da pixabey com o intuito de estudar sobre APIS.',
        pagina: 'https://ezequiel-mathias.github.io/Consumo-API-Pixabay/',
        github: 'https://github.com/Ezequiel-Mathias/Consumo-API-Pixabay',
    },

    {
        id: '3',
        nome: 'Consumo API via cep',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9oc0hkJylss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: 'HTML, CSS e Javascript',
        funcaoExercida: 'FrontEnd',
        descricao: 'Simples consumo de API pública via cep',
        pagina: 'https://ezequiel-mathias.github.io/ConsumoAPI-Cep/',
        github: 'https://github.com/Ezequiel-Mathias/ConsumoAPI-Cep',
    },


]

const TrainingCardWeb = ({ nome, video, tecnologias, descricao, funcaoExercida, pagina, github }) => {

    const card = document.createElement('div')

    card.classList.add('container-card')

    card.innerHTML = `
    <div class="card-project">
        ${video}
    </div>

    <div class="container-about-project">

        <div class="about-project">
            <h1>Website Adopet</h1>

            <div class="description">
                <p> ${descricao} skdajd kdsjlksdja ksalkdsçla lçkasçlksdaç klasdçlska
                dsjka~çldjs kljadsçlds jksd jksadlk jksa slkja saojdkajsd kj jashkdsh kasdlçkjkdsal jhnaslkdjsa ksadçlsdkç
                sadkdlsçaka dlkjasçlksdja ajdslkasj ksjadlkdjsa kjlasdkldjs jklalkjsda kljasdlkjdsald lksdjalkasdj
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
             <p>${descricao} skdajd dsjka~çldjs kljadsçlds jksd jksadlk jksa slkja saojdkajsd kj jashkdsh kasdlçkjkdsal jhnaslkdjsa </p>
            </div>

            

            <div class="container-technologies">
                <div class="technologies">
                    <span>React.js</span>
                </div>
                <div class="technologies">
                    <span>SASS</span>
                </div>
                <div class="technologies">
                    <span>Node.js</span>
                </div>
                <div class="technologies">
                    <span>Docker</span>
                </div>

                <div class="technologies">
                    <span>Javascript</span>
                </div>
                <div class="technologies">
                    <span>Next.js</span>
                </div>
                <div class="technologies">
                    <span>React.js</span>
                </div>
                <div class="technologies">
                    <span>React.js</span>
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


const ToLoadCardWeb = (projects) => {

    const container = document.querySelector('.container-cards-projects')

    const cards = projects.map(TrainingCardWeb)

    container.replaceChildren(...cards)

}

ToLoadCardWeb(ProjectsWeb)













