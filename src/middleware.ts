import express from "express";

export interface IMiddleware {
  configureMiddleware(): void;
}

export class AppMiddleWare implements IMiddleware {
  // Properties
  app: express.Express;

  // Constructor
  constructor(app: express.Express) {
    this.app = app;
  }

  // Methods
  configureMiddleware(): void {
    console.log("Configured middleware");
    this.app.use(express.json());
  }
}
