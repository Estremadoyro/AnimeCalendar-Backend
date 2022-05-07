import express, { Router } from "express";
import { EndpointFactory } from "./endpointFactory";
import animesRouter from "./routes/animes";
import userRouter from "./routes/user";
import { EndpointStructure } from "src/interfaces/endpointStructure";
import { EndpointType } from "src/enums/endpointType";
import { EndpointManager } from "../interfaces/endpointManager";
import { AnimeCalendarAPI } from "src/interfaces/animeCalendarApi";

export class AppEndpoints extends EndpointManager {
  // Properties
  app: express.Express;
  api: AnimeCalendarAPI;

  // Constructor
  constructor(app: express.Express, api: AnimeCalendarAPI) {
    super();
    this.app = app;
    this.api = api;
  }

  // Methods
  public configureEndpoints(): void {
    const endpoints: Array<EndpointStructure> = this.getEndpoints();
    const paths: Array<string> = this.getPaths(endpoints);
    this.configureRoutes(paths);
    console.log("Configured endpoints");
  }

  // Endpoint objects
  protected getEndpoints(): Array<EndpointStructure> {
    const endpointFactory = new EndpointFactory(this.api);
    const animesEndpoint = endpointFactory.getEndpoint(EndpointType.Animes);
    const userEndpoint = endpointFactory.getEndpoint(EndpointType.User);
    return [animesEndpoint, userEndpoint];
  }

  // Endpoint paths
  protected getPaths(endpoints: Array<EndpointStructure>): Array<string> {
    return endpoints.flatMap((endpoint) => endpoint.endpoint());
  }

  // Routes
  protected configureRoutes(paths: Array<string>): void {
    let routes: Array<Router> = [animesRouter, userRouter];
    paths.forEach((path, index) => {
      console.log(`path: ${path}`);
      this.app.use(path, routes[index]);
    });
  }
}
