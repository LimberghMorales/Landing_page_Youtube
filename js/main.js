let buscar = () => {
    let input_search = document.getElementById("buscador");
    if (input_search.classList.contains("oculto")) {
        input_search.classList.remove("oculto");
        input_search.classList.add("visible");
    } else {
        input_search.classList.remove("visible");
        input_search.classList.add("oculto");
    }
}