function jugar() {
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

    let cartesSeleccionades = [];
    while (cartesSeleccionades.length < 5) {
        let carta = baralla[Math.floor(Math.random() * baralla.length)];
        if (!cartesSeleccionades.includes(carta)) {
            cartesSeleccionades.push(carta);
        }
    }

    let cartesContainer = document.getElementById("cartes");
    cartesContainer.innerHTML = "";
    cartesSeleccionades.forEach(carta => {
        let img = document.createElement("img");
        img.src = `cards/${carta}`;
        img.width = 100;
        cartesContainer.appendChild(img);
    });

    let valors = cartesSeleccionades.map(carta => carta.split("_of_")[0]);

    let guanyat = valors.some((valor, index, arr) => arr.indexOf(valor) !== index);

    document.getElementById("resultat").innerText = guanyat ? "Has guanyat amb una parella!" : "No has guanyat.";
}