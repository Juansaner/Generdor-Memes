const boton = document.getElementsByClassName('boton');
const arrayImagenes = ["meme1.jpg", "meme2.jpg", "meme3.jpg", "meme4.jpg", "meme5.jpg", "meme6.jpg", "meme7.jpg", "meme8.jpg", "meme9.jpg", "meme10.jpg"]
const imagenActual = ["meme1.jpg"]

for (let index = 0; index < boton.length; index++) {
    const element = boton[index];
    element.addEventListener("click", cambiarImagen);
}

function cambiarFondo(button){
    
}