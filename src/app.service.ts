import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductosRequestDto } from './productos/dto/productos-requets.dto';
import { ProductEntity } from './entity/product-entity';

@Injectable()
export class AppService {
  
  constructor(
    // @InjectRepository(ProductEntity)
    // private readonly product: Repository<ProductEntity>
  ) {

  }

  getHello(): string {
    return 'Hello World!';
  }


  getProductsHome(): string {
    return 'home productos'
  }

  postcontacto(): string {
    return 'post Contacto'
  }

  getProductos(): string {
    return 'todos los productos'
  }

  

}
