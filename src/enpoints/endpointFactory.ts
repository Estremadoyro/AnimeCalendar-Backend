import { AnimeCalendarAPI } from "src/api";
import { EndpointType } from "src/enumTypes/endpointEnum";
import { EndpointStructure } from "../interfaces/endpointStructure";
import { AnimeEndpoints } from "./animesEndpoints";
import { UserEndpoints } from "./userEndpoints";

export interface EndpointFactoryMethods {
  getEndpoint(endpoint: EndpointType): EndpointStructure;
}

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
