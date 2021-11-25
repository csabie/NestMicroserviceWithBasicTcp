import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
//npm i @nestjs/microservices
import {MessagePattern} from "@nestjs/microservices"
// a main.ts-ben is be kell állítani 1-2 dolgot, hogy microservice-ként működjön

@Controller()
export class AppController {
  private logger = new Logger("AppController");

  constructor(private readonly appService: AppService) {}

  @Post("add")
  async accumlate(@Body("data") data: number[]){
    this.logger.log("Adding "+ data);
    return this.appService.accumlate(data);
  }
}
