import { AnimeCalendarAPI } from "src/api";
import { EndpointStructure } from "../interfaces/endpointStructure";

export class UserEndpoints implements EndpointStructure {
  user: string = "user";
  api: AnimeCalendarAPI;

  constructor(api: AnimeCalendarAPI) {
    this.api = api;
  }

  endpoint(): string {
    return `${this.api.path}/${this.user}`;
  }
}
