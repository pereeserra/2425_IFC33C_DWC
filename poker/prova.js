function jugar() {
    // Define un arreglo 'baralla' con las rutas de las imágenes de todas las cartas de una baraja.
    const baralla = [
        "2_of_clubs.png", "2_of_hearts.png", "2_of_spades.png", "2_of_diamonds.png",
        "3_of_clubs.png", "3_of_hearts.png", "3_of_spades.png", "3_of_diamonds.png",
        "4_of_clubs.png", "4_of_hearts.png", "4_of_spades.png", "4_of_diamonds.png",
        "5_of_clubs.png", "5_of_hearts.png", "5_of_spades.png", "5_of_diamonds.png",
        "6_of_clubs.png", "6_of_hearts.png", "6_of_spades.png", "6_of_diamonds.png",
        "7_of_clubs.png", "7_of_hearts.png", "7_of_spades.png", "7_of_diamonds.png",
        "8_of_clubs.png", "8_of_hearts.png", "8_of_spades.png", "8_of_diamonds.png",
        "9_of_clubs.png", "9_of_hearts.png", "9_of_spades.png", "9_of_diamonds.png",
        "10_of_clubs.png", "10_of_hearts.png", "10_of_spades.png", "10_of_diamonds.png",
        "jack_of_clubs.png", "jack_of_hearts.png", "jack_of_spades.png", "jack_of_diamonds.png",
        "queen_of_clubs.png", "queen_of_hearts.png", "queen_of_spades.png", "queen_of_diamonds.png",
        "king_of_clubs.png", "king_of_hearts.png", "king_of_spades.png", "king_of_diamonds.png",
        "ace_of_clubs.png", "ace_of_hearts.png", "ace_of_spades.png", "ace_of_diamonds.png"
    ];

    // Crea un arreglo vacío para almacenar las cartas seleccionadas aleatoriamente.
    let cartesSeleccionades = [];
    
    // Selecciona 5 cartas aleatorias sin repetir.
    while (cartesSeleccionades.length < 5) {
        // Escoge una carta al azar del arreglo 'baralla'.
        let carta = baralla[Math.floor(Math.random() * baralla.length)];
        // Añade la carta al arreglo si aún no ha sido seleccionada.
        if (!cartesSeleccionades.includes(carta)) {
            cartesSeleccionades.push(carta);
        }
    }

    // Obtiene el contenedor de cartas del HTML donde se mostrarán las cartas seleccionadas.
    let cartesContainer = document.getElementById("cartes");
    // Limpia el contenido anterior del contenedor.
    cartesContainer.innerHTML = "";
    
    // Para cada carta seleccionada, crea un elemento de imagen y lo añade al contenedor.
    cartesSeleccionades.forEach(carta => {
        // Crea un nuevo elemento de imagen.
        let img = document.createElement("img");
        // Define la ruta de la imagen con la carta seleccionada.
        img.src = `cards/${carta}`;
        // Define el ancho de la imagen.
        img.width = 100;
        // Añade la imagen al contenedor de cartas.
        cartesContainer.appendChild(img);
    });

    // Extrae el valor de cada carta (el número o la cara) del nombre del archivo.
    let valors = cartesSeleccionades.map(carta => carta.split("_of_")[0]);

    // Verifica si hay al menos una pareja en las cartas seleccionadas.
    let guanyat = valors.some((valor, index, arr) => arr.indexOf(valor) !== index);

    // Muestra el resultado en el elemento HTML con el ID 'resultat'.
    document.getElementById("resultat").innerText = guanyat ? "Has guanyat amb una parella!" : "No has guanyat.";
}