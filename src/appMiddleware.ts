import express from "express";

export interface IMiddleware {
  configureMiddleware(): void;
}

export class AppMiddleware implements IMiddleware {
  // Properties
  app: express.Express;

  // Constructor
  constructor(app: express.Express) {
    this.app = app;
  }

  // Methods
  configureMiddleware(): void {
    this.app.use(express.json());
    console.log("Configured middleware");
  }
}
