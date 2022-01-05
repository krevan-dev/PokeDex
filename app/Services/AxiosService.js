export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  timeout: 8000,
});

export const myPoke = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/krevan88/pokemon/",
  timeout: 8000,
});
