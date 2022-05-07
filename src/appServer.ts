import express from "express";
import { AnimeCalendarServer } from "./interfaces/animeCalendarServer";

const PORT: number = 2022;

export class AppServer implements AnimeCalendarServer {
  app: express.Express;

  constructor(app: express.Express) {
    this.app = app;
  }

  bootServer(): void {
    this.app.listen(PORT, () => {
      console.log(`Server running @ ${PORT}`);
    });
  }
}
