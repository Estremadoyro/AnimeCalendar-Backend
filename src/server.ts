import express from "express";

export interface AnimeCalendarServer {
  bootServer(): void;
}

const PORT: number = 2022;

export class AppServer implements AnimeCalendarServer {
  // Properties
  app: express.Express;

  // Constructor
  constructor(app: express.Express) {
    this.app = app;
  }

  // Methods
  bootServer(): void {
    this.app.listen(PORT, () => {
      console.log(`Server running @ ${PORT}`);
    });
  }
}
