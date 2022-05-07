import express from "express";
import { AnimeCalendarAPI } from "./animeCalendarApi";
import { EndpointStructure } from "./endpointStructure";

export abstract class EndpointManager {
  api: AnimeCalendarAPI;
  app: express.Express;
  public abstract configureEndpoints(): void;
  protected abstract getEndpoints(): Array<EndpointStructure>;
  protected abstract getPaths(
    endpoints: Array<EndpointStructure>
  ): Array<string>;
  protected abstract configureRoutes(paths: Array<String>): void;
}
