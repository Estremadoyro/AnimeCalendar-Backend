import { AnimeCalendarAPI } from "../interfaces/animeCalendarApi";

export class API extends AnimeCalendarAPI {
  // Readonly properties
  protected readonly version: string = "v1.0";
  protected readonly api: string = "api";
  public readonly path: string = `${this.api}/${this.version}`;
}
