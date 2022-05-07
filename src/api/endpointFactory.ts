import { AnimeCalendarAPI } from "src/interfaces/animeCalendarApi";
import { EndpointFactoryMethods } from "src/interfaces/endpointFactoryMethods";
import { EndpointType } from "src/enums/endpointType";
import { EndpointStructure } from "../interfaces/endpointStructure";
import { AnimeEndpoints } from "./endpoints/animesEndpoints";
import { UserEndpoints } from "./endpoints/userEndpoints";

export class EndpointFactory implements EndpointFactoryMethods {
  private api: AnimeCalendarAPI;

  constructor(api: AnimeCalendarAPI) {
    this.api = api;
  }

  getEndpoint(endpoint: EndpointType): EndpointStructure {
    switch (endpoint) {
      case EndpointType.Animes:
        return new AnimeEndpoints(this.api);
      case EndpointType.User:
        return new UserEndpoints(this.api);
    }
  }
}
