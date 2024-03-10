const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json()) // Converte o Body em JSON
        .then((jsonBody) => jsonBody.results)// Busca somente o results do JSON
        .catch((error) => console.error(error))
};