import { pokeApi } from "./AxiosService.js";

class PokeApiService {
  async getAllPokemon() {
    const res = await pokeApi.get("");
    console.log(res.data);
  }
}

export const pokeApiService = new PokeApiService();
