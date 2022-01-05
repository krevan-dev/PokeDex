import { pokeApiService } from "../Services/PokeApiService.js";

async function _getAllPokemon() {
  try {
    await pokeApiService.getAllPokemon();
  } catch (error) {
    console.error(error);
  }
}

export class PokeApiController {
  constructor() {
    _getAllPokemon();
  }
}
