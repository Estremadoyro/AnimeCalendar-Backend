import express from "express";
import { API } from "./api/api";
import { AppEndpoints } from "./api/appEndpoints";
import { AnimeCalendarAPI } from "./interfaces/animeCalendarApi";
import { EndpointManager } from "./interfaces/endpointManager";
import { AppMiddleware, IMiddleware } from "./appMiddleware";
import { AppServer, AnimeCalendarServer } from "./appServer";

const main = () => {
  // Express
  const app: express.Express = express();

  // Server
  const server: AnimeCalendarServer = new AppServer(app);
  server.bootServer();

  // Middleware
  const middleware: IMiddleware = new AppMiddleware(app);
  middleware.configureMiddleware();

  // Database

  // API
  const api: AnimeCalendarAPI = new API();

  // Endpoints
  let endpoints: EndpointManager = new AppEndpoints(app, api);
  endpoints.configureEndpoints();
};

main();
