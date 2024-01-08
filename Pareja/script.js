let staticButton = document.getElementById("botonEstatico");
let staticButtonRect = staticButton.getBoundingClientRect();

function getRandomPosition() {
    let container = document.getElementById("contenedor");
    let button = document.getElementById("botonMovil");
    
    let containerRect = container.getBoundingClientRect();
    let buttonRect = button.getBoundingClientRect();

    let maxTop = containerRect.height - buttonRect.height;
    let maxLeft = containerRect.width - buttonRect.width;

    let randomTop = Math.random() * maxTop;
    let randomLeft = Math.random() * maxLeft;

    return { top: randomTop, left: randomLeft};
}

function moverBoton() {
    let nuevaPosicion = getRandomPosition();
    document.getElementById('botonMovil').style.position = 'absolute';
    document.getElementById('botonEstatico').style.position = 'absolute';
    document.getElementById('botonMovil').style.top = `${nuevaPosicion.top}px`;
    document.getElementById('botonMovil').style.left = `${nuevaPosicion.left}px`;
    document.getElementById('botonEstatico').style.top = `${staticButtonRect.top}px`;
    document.getElementById('botonEstatico').style.left = `${staticButtonRect.left}px`;
}

// Detectar el evento 'mouseenter' sobre el botón móvil
document.getElementById('botonMovil').addEventListener('mouseover', function() {
    moverBoton();
});

function clicEstatico() {
    const img = document.createElement('img');
    img.src = 'https://gifdb.com/images/high/buenos-dias-amor-cute-cartoon-cats-hugging-kissing-bgftg7hyqs6b1dtz.webp';
    img.alt = 'gif-de-amor-uwu';

    document.getElementById('texto').innerText = 'Lo sabía amor, seamos felices, mauuu <3';
    document.getElementById('botonMovil').style.visibility ='hidden';    
    document.getElementById('botonEstatico').style.visibility ='hidden';    
    document.getElementById('seccion').appendChild(img);
}
