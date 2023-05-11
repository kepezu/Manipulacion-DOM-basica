const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);


console.log({
    h1, 
    p, 
    parrafito, 
    pid, 
    input,
});

h1.innerHTML = 'Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = ('Escriba su nombre aqui.');

const img = document.createElement('img');
img.setAttribute('src', 'https://i.ytimg.com/vi/J39nCoQTUg0/maxresdefault.jpg');
console.log(img)

pid.append(img);