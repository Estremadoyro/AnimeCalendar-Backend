import { AnimeCalendarAPI } from "src/interfaces/animeCalendarApi";
import { EndpointStructure } from "../../interfaces/endpointStructure";

export class AnimeEndpoints implements EndpointStructure {
  animes: string = "animes";
  api: AnimeCalendarAPI;

  constructor(api: AnimeCalendarAPI) {
    this.api = api;
  }

  endpoint(): string {
    return `/${this.api.path}/${this.animes}`;
  }
}
