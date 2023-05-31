
'use strict'

const ProjectsWeb = [

 

    
    {
        id: '3',
        nome: 'Consumo API via cep',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9oc0hkJylss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: ['teste1'],
        funcaoExercida: 'FrontEnd',
        descricao: 'Simples consumo de API pública via cep',
        pagina: 'https://ezequiel-mathias.github.io/ConsumoAPI-Cep/',
        github: 'https://github.com/Ezequiel-Mathias/ConsumoAPI-Cep',
    },


    {
        id: '3',
        nome: 'Consumo API via cep',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9oc0hkJylss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tecnologias: ['teste1222' , 'teste2'],
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
                <p> ${descricao}
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
                    <span>${tecnologias[0]}</span>
                </div>
                <div class="technologies">
                    <span>${tecnologias[1]}</span>
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













