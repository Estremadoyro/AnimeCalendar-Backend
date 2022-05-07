import { AnimeCalendarAPI } from "./animeCalendarApi";

export interface EndpointStructure {
  api: AnimeCalendarAPI;
  endpoint(): string;
}
