import { AnimeCalendarAPI } from "src/api";

export interface EndpointStructure {
  api: AnimeCalendarAPI;
  endpoint(): string;
}
