import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { endianness } from 'os';
import { ProductEntity } from 'src/entity/product-entity';
import { Repository } from 'typeorm';
import { ProductosRequestDto } from './dto/productos-requets.dto';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(ProductEntity)
    private readonly product: Repository<ProductEntity>
  ) { }

  async postNewProducto(req: ProductosRequestDto): Promise<any> {

    const buscarProducto = await this.product.findOne({
      where: { name: req.name }
    });

    if (buscarProducto === undefined) {
      return await this.product.save(req)

    } else {
      return 'ya existe'
    }
  }

}


