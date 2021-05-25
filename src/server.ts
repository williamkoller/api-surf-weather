import { Server } from '@overnightjs/core';
import './util/module-alias';
import express, { Application } from 'express';
import { ForecastController } from './controllers/forecast';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    const forecasController = new ForecastController();
    this.addControllers([forecasController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
