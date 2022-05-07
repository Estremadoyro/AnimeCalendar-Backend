import express, { Router } from "express";
import { AnimeCalendarAPI } from "../api";
import { EndpointFactory } from "./endpointFactory";
import animesRouter from "../routes/animes";
import userRouter from "../routes/user";
import { EndpointStructure } from "src/interfaces/endpointStructure";
import { EndpointManager } from "src/interfaces/endpointManager";
import { EndpointType } from "src/enumTypes/endpointEnum";

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
      this.app.use(path, routes[index]);
    });
  }
}
