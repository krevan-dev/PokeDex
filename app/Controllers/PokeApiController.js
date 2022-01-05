import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";

function _drawAllPokemon() {
  const apiPoke = ProxyState.apiPoke;
  let template = "";
  apiPoke.forEach(p => template += `<li class="selectable text-capitalize">${p.name}</li>`);
  document.getElementById("all-poke").innerHTML = template;
}

async function _getAllPokemon() {
  try {
    await pokeApiService.getAllPokemon();
  } catch (error) {
    console.error(error);
  }
}

export class PokeApiController {
  constructor() {

    ProxyState.on('apiPoke', _drawAllPokemon)

    _getAllPokemon();
  }
}
