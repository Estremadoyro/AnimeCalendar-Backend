import express from "express";
import { AnimeCalendarAPI, API } from "./api";
import { AppEndpoints } from "./enpoints/endpoints";
import { EndpointManager } from "./interfaces/endpointManager";
import { AppMiddleWare, IMiddleware } from "./middleware";
import { AppServer, AnimeCalendarServer } from "./server";

const main = () => {
  // Express
  const app: express.Express = express();

  // Server
  const server: AnimeCalendarServer = new AppServer(app);
  server.bootServer();

  // Middleware
  const middleware: IMiddleware = new AppMiddleWare(app);
  middleware.configureMiddleware();

  // Database

  // API
  const api: AnimeCalendarAPI = new API();

  // Endpoints
  let endpoints: EndpointManager = new AppEndpoints(app, api);
  endpoints.configureEndpoints();
};

main();
