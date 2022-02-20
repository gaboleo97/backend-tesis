import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('home')
export class HomeController {

    constructor(private readonly appService: AppService) {}




    @Get()
    getProductHome(): string {
      return this.appService.getProductsHome();
    }
}

