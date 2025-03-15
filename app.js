// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    nuevoElemento.style.color = "black";
    
    lista.appendChild(nuevoElemento);
    input.value = ""; // Limpiar el input después de añadir
}

// Función para sortear un amigo
function sortearAmigo() {
    let lista = document.getElementById("listaAmigos");
    let amigos = lista.getElementsByTagName("li");
    
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio].textContent;
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style='color: green;'>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}