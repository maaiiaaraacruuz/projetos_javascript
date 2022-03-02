const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn () {
    lamp.src = './imagens/lampada_acesa.jpg';
}

function lampOff () {
    lamp.src = './imagens/lampada_normal.jpg'
}

function lampQuebrada () {
    lamp.src = './imagens/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampQuebrada);