import { Controller, Post } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('contacto')
export class ContactoController {


    constructor(private readonly appService: AppService) {}

    @Post()
    postContacto(): string {
      return this.appService.postcontacto();
    }
}


