const cardsPosts = [
    {
        card_id: '1',
        img: 'utils/arduino.jpg',
        title: 'Arduino - Curso Completo',
        description: 'Esse treinamento visa capacitar o aluno a aprender o Arduino, que é uma plataforma de prototipagem eletrônica de hardware livre e de placa única, projetada com um microcontrolador ...',
        hours: '10 horas',
        month: '6 meses',
        modules: '6 modulos',
    },
    {
        card_id: '2',
        img: 'utils/circuito.jpg',
        title: 'Aprenda - Circuitos Eletrônicos',
        description: 'Entender o funcionamento dos principais componentes eletrônicos, com 5 projetos com esses componentes interagindo entre eles para explicação dos conceitos principais, 5 Projetos que visam explicar o ...',
        hours: '10 horas',
        month: '6 meses',
        modules: '6 modulos',
    },
    {
        card_id: '3',
        img: 'utils/iot.jpg',
        title: 'Automação Residencial - IOT',
        description: 'Programação de Dispositivos Arduino e ESP8266, Configuração de Assistentes de Voz Alexa, Internet das Coisas, Automação Residencial, Utilização do Sistema autodomo, Instalação de Dispositivos Inteligentes ...',
        hours: '10 horas',
        month: '6 meses',
        modules: '6 modulos',
    },
    {
        card_id: '4',
        img: 'utils/industry4.0.jpg',
        title: 'Express Indústria 4.0',
        description: 'Entender sobre a Indústria 4.0 no contexto atual e estar atualizado com as principais tendências nternet das coisas, Computação em nuvem, Big Data, Robótica, Manufatura Digital, Seguraça digital ...',
        hours: '10 horas',
        month: '6 meses',
        modules: '6 modulos',
    },
    {
        card_id: '5',
        img: 'utils/bigData.jpg',
        title: 'Big Data Fundamentos',
        description: 'Entender sobre a Indústria 4.0 no contexto atual e estar atualizado com as principais tendências nternet das coisas, Computação em nuvem, Big Data, Robótica, Manufatura Digital, Seguraça digital ...',
        hours: '10 horas',
        month: '6 meses',
        modules: '6 modulos',
    },
    {
        card_id: '6',
        img: 'utils/componentes.jpg',
        title: 'Arquiteto IOT',
        description: 'Compreender a infraestrutura básica de uma solução de IoT, Entender as limitações dos dispositivos utilizados para a coleta de dados, Definir os melhores protocolos de comunicação com base na aplicação ...',
        hours: '10 horas',
        month: '6 meses',
        modules: '6 modulos',
    },

];

const loadPostst = () => {

    const sectionCards = document.querySelector('div.box-container');

    cardsPosts.map(post => {
        sectionCards.innerHTML += `
        <div class="box">
            <img src=${post.img} alt="Curso">
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                </div>
                <a href="#" class="title">${post.title}</a>
                <p>${post.description}</p>
                <div class="info">
                    <h3> <i class="far fa-clock"></i> ${post.hours} </h3>
                    <h3> <i class="far fa-calendar-alt"></i> ${post.month} </h3>
                    <h3> <i class="fas fa-book"></i> ${post.modules} </h3>
                </div>
            </div>
        </div>  
    `
    });
}

loadPostst();