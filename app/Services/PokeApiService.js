import { ProxyState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js";

class PokeApiService {
  async getAllPokemon() {
    const res = await pokeApi.get("?limit=100");
    ProxyState.apiPoke = res.data.results;
  }
}

export const pokeApiService = new PokeApiService();
