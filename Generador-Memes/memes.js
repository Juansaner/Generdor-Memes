
// Arreglo de imagenes 
function cambiarImagen() {
    let imagenes = [
        {
            src: "source/img/meme1.jpg",
            width: "480",
            height: "480"
        },

        {
            src: "source/img/meme2.jpg",
            width: "480",
            height: "480"
        },

        {
            src: "source/img/meme3.jpg",
            width: "480",
            height: "480"
        },

        {
            src: "source/img/meme4.jpg",
            width: "480",
            height: "480"
        },

        {
            src: "source/img/meme5.jpg",
            width: "480",
            height: "480"
        },

        {
            src: "source/img/meme6.jpg",
            width: "480",
            height: "480"
        },

        {
            src: "source/img/meme7.jpg",
            width: "480",
            height: "480"
        },

        {
            src: "source/img/meme8.jpg",
            width: "480",
            height: "480"
        },

        {
            src: "source/img/meme9.jpg",
            width: "768",
            height: "768"
        },

        {
            src: "source/img/meme10.jpg",
            width: "768",
            height: "768"
        }


    ];
// Arreglo de elementos de objetos images 
    let bufferImagenes = [];

    for (const e of imagenes) {
        //se crea un objeto imagen
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes.push(imagen);

    }

    

    let indexImagenAleatoria = generarNumeroAleatorio(imagenes.length);
    let imagenAleatoria = bufferImagenes[indexImagenAleatoria];
   
    // Inserta la imagen en el documento
     let nuevoElementoImagen = document.body.appendChild(imagenAleatoria);
        
    
} 


// Función auxiliar para crear una seleccion aleatoria
// cantidadImagenes: determina el valor máximo que se puede generar en el rango de aleatorios
function generarNumeroAleatorio(cantidadImagenes) {
    return Math.floor(Math.random() * cantidadImagenes);
    
}